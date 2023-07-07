import React, { useState } from "react"

const App = () => {
  const [slot1, setSlot1] = useState("")
  const [slot2, setSlot2] = useState("")
  const [slot3, setSlot3] = useState("")
  const [message, setMessage] = useState("")

  const spinSlots = () => {
    const symbols = ["🍒", "🍊", "🍇", "🍋", "🍎", "🔔"]
    const randomSymbol = () =>
      symbols[Math.floor(Math.random() * symbols.length)]

    setSlot1(randomSymbol())
    setSlot2(randomSymbol())
    setSlot3(randomSymbol())

    if (slot1 === slot2 && slot2 === slot3) {
      setMessage("Jackpot! You won!")
    } else {
      setMessage("Try again!")
    }
  }

  return (
    <div>
      <h1>Slot Machine</h1>
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
