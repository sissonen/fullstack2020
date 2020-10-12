import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const Header = ({name}) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  )
}

const Content = ({parts}) => {
  console.log(parts)

  return (
    <>
      {parts.map((part) => <Part key={part.id} part={part} />) }
    </>
  )
}

const Part = ({part}) => {
  return (
    <>
      <div>{part.name} {part.exercises}</div>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Random part',
        exercises: 1,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
