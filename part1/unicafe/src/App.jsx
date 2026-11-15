import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text,value}) => {
  if(text === "positive"){
    return <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    </tbody>
  </table>
  }
  return <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
}

const Statistics = ({good,neutral,bad,all}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}> {bad}</StatisticLine>
      <StatisticLine text="all" value={all}> {all}</StatisticLine>
      <StatisticLine text="average" value={(good*1 + neutral*0 + bad*(-1))/all}></StatisticLine>
      <StatisticLine text="positive" value={(good/all)*100}></StatisticLine>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = 0 || good+neutral+bad;

  function handleSetGood(){
   setGood(prev => prev+1)
  }
  function handleSetNeutral(){
    setNeutral(prev => prev+1)
  }
  function handleSetBad(){
    setBad(prev => prev+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleSetGood} text="good"></Button>
      <Button onClick={handleSetNeutral} text="neutral"></Button>
      <Button onClick={handleSetBad} text="bad"></Button>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App