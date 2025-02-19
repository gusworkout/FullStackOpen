import courses from "./components/allcourses"
import Course from "./components/course"

const App = () => {
  return (
    <div>
      {courses.map(course => (
      <Course key={course.id} course={course} />))}
    </div>
  )

}

//hola
export default App