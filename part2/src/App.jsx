import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'
import './index.css'
import Notification from './components/allcourses'

const Footer = () =>{
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}




const App = (props) => {

  //new
  const [names, setNames] = useState(props.names)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happend...')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    noteService.getAll().then(initialPersons => {
      setNames(initialPersons)
    }).catch(error => console.error('Error fetching data:', error))
  }, [])
  const toggleImportanceOf = id => {
    if (window.confirm("Want delete a this person?")) {


      noteService
        .supr(id)
        .then(() => {
          setNames(names.filter(person => person.id !== id))

        }).catch()
    }
    //onsole.log(`importance of  ${id} needs to be toggled`)
    //LLAVES Y COMILLAS PARA DEVOLVER DATOS DE UN JSON
  }
  const addName = (event) => {
    event.preventDefault()


    const existingPerson = names.find(person => person.phone === newPhone);

    if (existingPerson) {
      if (window.confirm(`${newPhone} already exists. Do you want to replace it?`)) {
        const updatedPerson = { ...existingPerson, content: newName, phone: newPhone }

        noteService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setNames(names.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            setNewPhone('')
          }).catch(setErrorMessage(
            `Person has already been removed from server`
          ),
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000))
      }
      return
    }

    if (names.find((name) => name.content === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    
    const noteObject = {
      phone: newPhone,
      content: newName,

    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNames(names.concat(returnedNote))
        setNewName('')
        setNewPhone('')
        setErrorMessage(
          `Person ${newName} added`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }).catch(error => console.error('Error adding name', error))

  }

  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handlePhoneChange = (event) => { setNewPhone(event.target.value) }
  const handleFilterChange = (event) => { setFilter(event.target.value) }



  const notesToShow = showAll
    ? names
    : names.filter(name => name.content.toLowerCase().includes(filter.toLowerCase()))
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
      } type='submit'>
        show {showAll ? 'Sin Filtro' : 'Con Filtro'}
      </button>
      <input value={filter} onChange={handleFilterChange} />

      
      <ul>
        {notesToShow.map((a) => (
          <Note key={a.id}
            name={a}
            phone={a.phone}
            toggleNumber={() => toggleImportanceOf(a.id)} />
        ))}
      </ul>
        <Notification message={errorMessage}/>
        <Footer />
    </div>
  )
}

export default App

