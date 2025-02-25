const Note =({name, toggleNumber}) => {

  return (
    <li className="nams">
    {name.content} {name.phone}
    <button onClick={toggleNumber}> Delete</button>
    </li>
  )
}

export default Note