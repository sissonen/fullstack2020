import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stats = ({good, neutral, bad}) => {
  const avg = () => {
    if (good+neutral+bad === 0) {
      return 0
    } else {
      return (good - bad) / (good+neutral+bad)
    }
  }
  const positive = () => {
    if (good+neutral+bad === 0) {
      return 0
    } else {
      return ((good/(good + neutral + bad))*100) + "%"
    }
  }

  if (good + neutral + bad === 0)
    return "No feedback given yet."
  return (
    <>
      <Stat name="good" counter={good} />
      <Stat name="neutral" counter={neutral} />
      <Stat name="bad" counter={bad} />
      <Stat name="all" counter={good + neutral + bad} />
      <Stat name="average" counter={avg()} />
      <Stat name="positive" counter={positive()} />
    </>
  )
}
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
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
