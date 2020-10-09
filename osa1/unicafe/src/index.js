import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stat = ({name, counter}) => (
  <div>{name}: {counter}</div>
)
const Button = ({text, onClick}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => setGood(good + 1)
  const incNeutral = () => setNeutral(neutral + 1)
  const incBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button text="good" onClick={incGood} />
      <Button text="neutral" onClick={incNeutral} />
      <Button text="bad" onClick={incBad} />
      <h2>Stats</h2>
      <Stat name="good" counter={good} />
      <Stat name="neutral" counter={neutral} />
      <Stat name="bad" counter={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
