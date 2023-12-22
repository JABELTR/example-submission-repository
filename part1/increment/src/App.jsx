import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        *** This App is used by pressing the buttons ***
      </div>
    )
  }

  return (
    <div>
      <h1>Total clicks {props.allClicks.length} </h1> 
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' /><br></br>
      <br></br>
      <br></br>
      <h1>Statistics</h1><br></br>
      <h2>Good {good}</h2><br></br>
      <h2>Neutral {neutral}</h2><br></br>
      <h2>Bad {bad}</h2><br></br>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App