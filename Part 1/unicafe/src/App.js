import React, { useState } from 'react'

const Title = (props) => <h1>{props.title}</h1>

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const Statistic = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good||neutral||bad){
    return (
      <table>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text ='all' value={good+neutral+bad} />
        <Statistic text = 'average' value={(good*1 + neutral*0 + bad*(-1))/(good+neutral+bad)} />
        <Statistic text = 'positive' value={good*100/(good+neutral+bad) +" %"} />
      </table>
    )
  }
  
  return <p>No feeback given</p>
}

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
      <Statistics good ={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App