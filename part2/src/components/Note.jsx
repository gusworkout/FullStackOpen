const Note =({name, toggleNumber}) => {

  return (
    <li>
    {name.content} {name.phone}
    <button onClick={toggleNumber}> Delete</button>
    </li>
  )
}

export default Note