import React, { useState } from "react"

const App = () => {
  const [slot1, setSlot1] = useState("")
  const [slot2, setSlot2] = useState("")
  const [slot3, setSlot3] = useState("")
  const [message, setMessage] = useState("")

  const spinSlots = () => {
    setSlot1("...")
    setSlot2("...")
    setSlot3("...")
    setMessage("Spinning...")
  }

  return (
    <div>
      <h1>React Slots Machine</h1>
      <div className="slots">
        <div className="slot">{slot1}</div>
        <div className="slot">{slot2}</div>
        <div className="slot">{slot3}</div>
      </div>
      <button onClick={spinSlots}>Spin</button>
      <p>{message}</p>
    </div>
  )
}

export default App
