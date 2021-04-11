import React, { useState } from 'react'

const Title = (props) => <h1>{props.title}</h1>

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const Counter = ({text, number}) => <p>{text} {number}</p>  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodIncreaseByOne = () => {setGood(good+1)};
  const neutralIncreaseByOne = () => {setNeutral(neutral+1)};
  const badIncreaseByOne = () => {setBad(bad+1)};

  return (
    <div>
      <Title title = 'give feedback'/>
      <Button clickHandler = {goodIncreaseByOne} text = 'good'/>
      <Button clickHandler = {neutralIncreaseByOne} text = 'neutral'/>
      <Button clickHandler = {badIncreaseByOne} text = 'bad'/>

      <Title title = 'statistics'/>
      <Counter text='good' number={good} />
      <Counter text='neutral' number={neutral} />
      <Counter text='bad' number={bad} />
    </div>
  )
}

export default App