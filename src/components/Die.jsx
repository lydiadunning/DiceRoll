
const Die = ({ side, randomizeSide }) => {
  console.log('side', side)

  return (
    <button className='die' onClick={randomizeSide}>
      {side}
    </button>
  )
}

export default Die