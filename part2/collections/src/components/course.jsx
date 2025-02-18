const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map(part =>
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          )}
        </ul>
        <Total parts={course.parts} />
      </div>
    );
  };
  
  const Total = ({ parts }) => {
    const total = parts.reduce((acc, part) => {
      return acc + part.exercises;
    }, 0);
    return (
      <p>Total exercises: {total}</p>
    );
  };
  

export default Course;