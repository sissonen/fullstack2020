import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Text = (props) => {
  return (
  <>
    <h2>Anecdote of the day</h2>
    <div>{props.text.a}</div>
    <div>has {props.text.v} votes</div>
    <div style={props.voted ? {} : { display: 'none' }}>Thanks for the vote!</div>
  </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * props.anecdotes.length))
  const [voted, setVoted] = useState(false)

  const randomSelected = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
    setVoted(false)
  }
  
  const incVotes = () => {
    const newValue = props.anecdotes[selected].v + 1
    props.anecdotes[selected].v = newValue
    randomSelected()
    setVoted(true)
  }
  const findMostVotes = () => {
    const sorted = anecdotes.sort((a, b) => (a.v > b.v) ? -1 : 1)
    return (
      <>
        <div>{sorted[0].a}</div>
        <div>with {sorted[0].v} votes</div>
      </>
    )
  }
  
  return (
    <div>
      <Text text={props.anecdotes[selected]} voted={voted} />
      <br />
      <button onClick={randomSelected}>Random anecdote</button>
      <button onClick={incVotes}>Vote</button>
      <h2>Anecdoted with most votes</h2>
      <div>
        {findMostVotes()}
      </div>
    </div>
  )
}

const anecdotes = [
  {a:'If it hurts, do it more often',
  v:0},
  {a:'Adding manpower to a late software project makes it later!',
  v:0},
  {a:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  v:0},
  {a:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  v:0},
  {a:'Premature optimization is the root of all evil.',
  v:0},
  {a:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  v:0}
]
/*const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
