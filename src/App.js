 import React, {useState, useEffect} from "react"

 function App() {
     const STARTING_TIME = 5
     
     const [ text, setText ] = useState("")
     const [ timeRemaining, setTimeRemaining ] = useState(STARTING_TIME)
     const [ isTimeRunning, setisTimeRunning ] = useState(false)
     const [ wordCount, setWordCount] = useState(0)

 function handleChange(event) {
   const {value} = event.target
   setText(value)
 }

function calculateWordCount(text) {
const wordsArr = text.trim().split(" ")
return wordsArr.filter(word => word !== "").length
}

function startGame(){
  setisTimeRunning(true)
  setTimeRemaining(STARTING_TIME)
  setText("")
  setWordCount(0)
}

function endGame() {
  setisTimeRunning(false)
  const numWords = calculateWordCount(text)
  setWordCount(numWords)
}

useEffect(() => {
  if( isTimeRunning && timeRemaining > 0) {
    setTimeout(()=> {
      setTimeRemaining(time => time - 1)
}, 1000)
  } else if (timeRemaining === 0) {
    endGame()
  }
}, [timeRemaining, isTimeRunning])


   return(
     <div>
       <h1>How fast do you type?</h1>
       <form>
        <textarea
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
        />
       </form>
       <h4>Time Remaining: {timeRemaining} seconds</h4>
       <button 
       onClick={startGame} 
       disabled={isTimeRunning}>Start Game</button>
       <h1>Word Count: {wordCount}</h1>
     </div>
   )
 }


 export default App 