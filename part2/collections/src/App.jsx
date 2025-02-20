import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {


  const [names, setNames] = useState(props.names)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      phone: newPhone,
      content: newName,
      id: String(names.length + 1),

    }

    if (names.find((name) => name.content === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setNames(names.concat(noteObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  
  const notesToShow = showAll
  ? names
  : names.filter(names => names.id === 'Gustavo Ochoa')

  return (
    <div>
      <h1>Add Name</h1>
      <form onSubmit={addName}>
        <p>Name:<input value={newName} onChange={handleNameChange} /></p>
        <p>Phone: <input value={newPhone} onChange={handlePhoneChange} /></p>

        <button type="submit">add</button>
      </form>

      <h2>Names</h2>
    
        <button onClick={
          () => setShowAll(!showAll)
        } type='submit'> show {showAll ? 'Sin Filtro' : 'Con Filtro' }</button>
   
      <ul>
        {notesToShow.map((a) => (
          <Note key={a.id} name={a} phone={a.phone} />
        ))}
      </ul>
      <ul>
        {names.map((a) => (
          <Note key={a.id} name={a} phone={a.phone} p />
        ))}
      </ul>

    </div>
  )
}

export default App

