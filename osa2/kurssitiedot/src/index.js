import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <div><b>Total of { course.parts.reduce((total, part) => total + part.exercises, 0) } exercises</b></div>
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
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web dev curriculum</h1>
      { courses.map((course) => <Course key={course.id} course={course} />) }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
