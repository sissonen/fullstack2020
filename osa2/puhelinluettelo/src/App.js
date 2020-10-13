import React, { useState } from 'react';

const App = () => {
 const [ persons, setPersons] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.some(person => person.name === newName)) {
      const newPerson = { name: newName }
      setPersons(persons.concat(newPerson))
    } else {
      window.alert(`Person "${newName}" is already added in the phonebook.`)
    }
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
    </div>
  )
}

export default App;
