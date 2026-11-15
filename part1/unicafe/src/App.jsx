import { useState } from 'react'

const Statistics = ({good,neutral,bad,all}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good*1 + neutral*0 + bad*(-1))/all}</p>
      <p>positive {(good/all)*100}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = 0 || good+neutral+bad;
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(prev => prev+1)}>good</button>
      <button onClick={() => setNeutral(prev => prev+1)}>neutral</button>
      <button onClick={() => setBad(prev => prev+1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App