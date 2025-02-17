import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const HandleGoodButton =()=>{
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
    setAverage(updateGood + neutral + bad)
  }
  const HandleNeutralButton  =()=>{
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(updateNeutral + good + bad)
    setAll(updateNeutral + good + bad)
  }
  const HandleBadButton =()=>{
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(updateBad + neutral + good)
    setAll(updateBad + good + neutral)
  }
  


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={HandleGoodButton} text={'Good'} />
      <Button onClick={HandleNeutralButton} text={'Neutral'} />
      <Button onClick={HandleBadButton} text={'Bad'} />
      <h2>Statics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}



const Statistics = ({good, neutral, bad, all}) => {
  if(all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
      )
  }
  return(
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {all}</p>
      <p>Average: {all/3}</p>
      <p>
        Positive: {good/all} %
      </p>
    </div>
  )
}






export default App



 /* const App = () => {
  const [left, setLeft]=useState(0)
  const [right, setRight]=useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  

  const handleRightClick = () =>{
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const handleLeftClick =()=>{
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(updateLeft + right)
  }
 
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
 const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('Rendering with counter value', counter)

  const increaseByOne =() => setCounter(counter +1 )
  console.log('Increasing, value before', counter)
  const zero = () => setCounter(0)
  const decreaseByOne =() => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter} />

      <Buttons 
        onClick={increaseByOne}
        text='plus'
      />
      <Buttons 
        onClick={decreaseByOne}
        text='min'
      />
      <Buttons 
        onClick={zero}
        text='zero'
      />

    </div>
  )
}

//desestructuracion
const Display = ({counter}) =>(<div>{counter}</div>)


const Buttons =({onClick, text}) => 
<button onClick={onClick}>
  {text}
</button>
  
 const course ={ 
    name:'Half Stack application development',

  parts: [ 
    
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
  return(
    <div>
      <Header coursename={course.name}/>
     <Content parts={course.parts[0].name} />
     <Content parts={course.parts[1].name } />
     <Content parts={course.parts[2].name } />
     <Total TotalH={course.parts[0].exercises +course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
  
  
  return (
    
    <div>
      
      <Header courseName={course}/>
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} part3={part3} 
      exercises3={exercises3} />
      <Total Totalexercises={exercises1+exercises2+exercises3}/>
      
    </div>
    
  )
}

const Header = (props) => {
  return(
    <div>
      <p>Course: {props.coursename}</p>
    </div>
  )

}

const Content = (props) => {
  console.log(props)
  return(
    
    <div>
      <p>Content: {props.parts}</p>
    </div>
  )

}
const Total = (props) => {
  console.log(props)

  return(
    
    <div>
      <p>Hours: {props.TotalH}</p>
    </div>
  )

}


const Header = (props) => {
  return(
  <div>
    <p>Curso: {props.courseName}</p>
  </div>
)
}
const Content = () => {
  const parts = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part1: 'Using props to pass data', exercises1: 7},
    {part1: 'State of a component', exercises1: 14 }
  ]

  return(
  <div>
    
   <Part  pos={1} parts={parts[0].part1} exercises={parts[0].exercises1}  />
   <Part  pos={2} parts={parts[1].part1} exercises={parts[1].exercises1}  />
   <Part  pos={3} parts={parts[2].part1} exercises={parts[2].exercises1}  />
   
  </div>
)
}
const Total = (props) => {
  return(
    <div>
      <p>Num ejercicios: {props.Totalexercises}</p>
    </div>
  )
}

const Part = (props) => {
  return( 
  <div>
    <p>Parte {props.pos}: {props.parts} Ejercicios: {props.exercises}</p>
  </div>
  )
}

*/



