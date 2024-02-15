import { useState } from "react"

const DiceTableInput = ({ isActive }) => {
  console.log({isActive})
  const [content, setContent] = useState('')
  const className = isActive ? 'cell active' : 'cell inactive'

  return (
    <input value={content} className={className} onChange={(e) => setContent(e.target.value)} />
  )
}

export default DiceTableInput