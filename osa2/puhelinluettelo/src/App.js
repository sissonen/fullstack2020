import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService
      .getPersons()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.some(person => person.name === newName)) {
      const newPerson = { name: newName, number: newNumber }
      personService
        .addPerson(newPerson)
        .then(returnedData => {
          setPersons(persons.concat(returnedData))
        })
    } else {
      let existingPerson = persons.find(person => person.name === newName)
      if (existingPerson.number !== newNumber) {
        if (window.confirm('Person "' + newName + '" is already added in the phonebook. Would you like to update their phone number (' + existingPerson.number + ' -> ' + newNumber + ')?')) {
          const updatedPerson = { ...existingPerson, number: newNumber }
          personService
            .updatePerson(existingPerson.id, updatedPerson)
            .then(returnedData => {
              setPersons(persons.map(person => person.id !== returnedData.id ? person : returnedData))
            })
        }
      } else {
        window.alert(`Person "${newName}" is already added in the phonebook.`)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id) => {
    let idToRemove = id
    let personToRemove = persons.find(person => person.id === idToRemove)
    if (window.confirm('Do you really want to remove "' + personToRemove.name + '" from the phonebook?')) {
      personService
        .removePerson(idToRemove)
        .then(returnedData => {
          setPersons(persons.filter(person => person.id !== idToRemove))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new person:</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers:</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <Persons persons={personsFiltered} removePerson={removePerson}  />
    </div>
  )
}

export default App;
