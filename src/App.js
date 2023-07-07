import React, { useEffect, useMemo, useState } from "react"

const App = () => {
  const [slot1, setSlot1] = useState("")
  const [slot2, setSlot2] = useState("")
  const [slot3, setSlot3] = useState("")
  const [message, setMessage] = useState("")
  const [stoppedSpin, setStoppedSpin] = useState(true)

  const symbols = ["🍒", "🍊", "🍇", "🍋", "🍎", "🔔"]
  const slotsHasSymbols = useMemo(() =>
    [slot1, slot2, slot3].every((i) => symbols.includes(i))
  )
  const spinSlots = () => {
    if (!stoppedSpin) {
      return
    }
    setStoppedSpin(false)
    const randomSymbol = () =>
      symbols[Math.floor(Math.random() * symbols.length)]

    setSlot1("...")
    setSlot2("...")
    setSlot3("...")
    setMessage("Spinning...")
    setTimeout(() => setSlot1(randomSymbol()), 1000)
    setTimeout(() => setSlot2(randomSymbol()), 2000)
    setTimeout(() => setSlot3(randomSymbol()), 3000)
  }
  useEffect(() => {
    if (slotsHasSymbols) {
      if (slot1 === slot2 && slot2 === slot3) {
        setMessage("Jackpot! You won!")
      } else {
        setMessage("Try again!")
      }
      setStoppedSpin(true)
    }
  }, [slot1, slot2, slot3])

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
