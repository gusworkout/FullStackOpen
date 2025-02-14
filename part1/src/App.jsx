const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
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
//
export default App