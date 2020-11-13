import React from "react"
import useWordGame from "./useWordGame"

function App() {
  const {
      textBoxRef, 
      handleChange, 
      text, 
      isTimeRunning, 
      timeRemaining, 
      startGame, 
      wordCount
  } = useWordGame()

    return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
      ref={textBoxRef}
      onChange={handleChange}
      value={text}
      disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
      onClick={startGame}
      disabled={isTimeRunning}
      >Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
    )
 }

 export default App