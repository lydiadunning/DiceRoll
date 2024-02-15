
import './App.css'
import Die from './components/Die'
import DiceTableInput from './components/DiceTableInput'
import DiceTableColumn from './components/DiceTableColumn'
import { useState } from 'react'

function App() {
  const [columnCount, setColumnCount] = useState(1)
  const inputArray = []
  for (let i = 1; i <= columnCount; i++) {
    inputArray.push(i)
  }

  return (
    <div className='row'>
      {inputArray.map(x => {
        return <DiceTableColumn key={x}/>
      })}
      <button onClick={() => setColumnCount(columnCount + 1)}>+</button>
    </div>
  )
}

export default App
