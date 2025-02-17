const App = () => {
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
  
  /*
  return (
    
    <div>
      
      <Header courseName={course}/>
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} part3={part3} 
      exercises3={exercises3} />
      <Total Totalexercises={exercises1+exercises2+exercises3}/>
      
    </div>
    
  )*/
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


/*
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
export default App