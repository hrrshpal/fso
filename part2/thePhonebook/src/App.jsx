import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import PersonForm from '../components/PersonForm'
import DisplayPersons from '../components/DisplayPersons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filteredArray, setFilteredArray] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  })

  function handleNameChange(e){
    let name = e.target.value
    setNewName(name)
  }
  
  function handleNumberChange(e){
    let number = e.target.value
    setNewNumber(number)
  }

  function handleFilterChange(e){
    let query = e.target.value;
    let newarr = persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
    setFilteredArray(newarr)
  }

  function handleAddBtn(e){
    e.preventDefault();

    if(persons.find(person => newName === person.name)){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      let newArr = [...persons, {name: newName, number: newNumber}]
      setPersons(newArr)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>

      <h3>add a new</h3>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleAddBtn={handleAddBtn} />

      <h3>Numbers</h3>
      <DisplayPersons persons={persons} filteredArray={filteredArray}/>
    </div>
  )
}

export default App