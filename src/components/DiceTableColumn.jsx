import Die from './Die'
import DiceTableInput from './DiceTableInput'
import { useState } from 'react'

const DiceTableColumn = () => {
  const [dieSides, setDieSides] = useState(2)
  const [side, setSide] = useState(randomSide(dieSides))

  function randomSide() {
    const newSide = Math.ceil(Math.random()*dieSides)
    return newSide
  }

  const randomizeSide = () => {
    console.log('randomizeSide')
    setSide(randomSide())
  }

  const addSide = () => {
    setDieSides(dieSides + 1)
  }

  const inputArray = []
  for (let i = 1; i <= dieSides; i++) {
    inputArray.push(i)
  }

  console.log({inputArray})

  return (
    <div className='column'>
      <Die side={side} randomizeSide={randomizeSide} />
      {inputArray.map(x => {
        console.log(x)
        return <DiceTableInput key={x} isActive={side === x} />
      })}
      <div>
        {dieSides > 2 && <button type='button' onClick={() => setDieSides(dieSides - 1)}>-</button>}
        <button type='button' onClick={() => setDieSides(dieSides + 1)}>+</button>
      </div>
    </div>
  )
}

export default DiceTableColumn