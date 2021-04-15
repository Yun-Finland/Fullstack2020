import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './Components/Persons.js'
import PersonForm from './Components/PersonForm.js'
import Filter from './Components/Filter.js'

const App = () => {

  const [ persons, setPersons ] = useState([]); 

  const [ newSearch, setNewSearch ] = useState('');

  useEffect (()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    })
  }, [])
  
  return (
    <div>      
      
      <h2>Phonebook</h2>  
      <Filter newSearch ={newSearch} setNewSearch={setNewSearch}/>
      
      <h3>add a new</h3>  
      <PersonForm persons = {persons} setPersons = {setPersons} />
      
      <h3>Numbers</h3>
      <Persons persons = {persons} newSearch={newSearch} />

    </div>
  )
}


export default App