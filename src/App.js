import React,{useState, useEffect} from "react"
import React from "react"

function App() {
  const STARTING_TIME = (15)
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function beginGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time -1)
      }, 1000)
    } else if (timeRemaining === 0 ){
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
      onChange={handleChange}
      value={text}
      disabled={!isTimeRunning}
      />
      <h3>Remaining Time: {timeRemaining}</h3>
      <button 
      onClick={beginGame}
      disabled={isTimeRunning}
      >Start</button>
  <h3>Word Count: {wordCount}</h3>
    </div>
  )
}

export default App 