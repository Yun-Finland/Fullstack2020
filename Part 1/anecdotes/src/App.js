import React, { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Anecdote = ({text}) => <p>{text}</p>

const DisplayVote = ({number}) => {
  if (number === 0){
    return (<p>has 0 vote</p>)
  }
  return (<p>has {number} votes</p>)
}

const Button =({handler, text}) => <button onClick={handler}>{text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(6).fill(0))
  
  // generate the next anecdote
  const clickHandler = () => {setSelected(Math.round(Math.random()*5))};

  // vote for a anecdote
  const voteHandler = () => {
    const newVotes = [...votes];  
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <Title text='Anecdote of the day'/>
      <Anecdote text = {anecdotes[selected]} /> 
      <DisplayVote number = {votes[selected]} />   
      <Button handler = {voteHandler} text ='vote'/>
      <Button handler = {clickHandler} text = 'next anecdote' />
      <Title text='Anecdote with most votes'/>
      <Anecdote text = {anecdotes[votes.indexOf(Math.max(...votes))]} />      
      <DisplayVote number = {Math.max(...votes)}  /> 
    </div>
  )
}

export default App