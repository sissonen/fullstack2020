import React from 'react';

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

export default Course
