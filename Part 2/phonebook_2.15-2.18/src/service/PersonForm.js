import React, { useState } from 'react'
import PersonServer from './PersonServer.js';

const PersonForm = ({persons, setPersons}) => {  
  
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const handleNameChange = (event) => { setNewName(event.target.value); }
  const handleNumberChange = (event) => { setNewNumber(event.target.value); }

  const addName = (event) =>{
    event.preventDefault();
    
    if(persons.length && (persons
      .map((person)=>person.name)
      .includes(newName))) {

        // double check if the user wants to update the contact info
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
          
          const existingPerson = persons.find(person => person.name === newName)
          
          const changedPerson = {...existingPerson, number: newNumber}

          PersonServer
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
          })
        }

    }else{
      
      const newPersons = {
        name: newName,
        number: newNumber
      }

      PersonServer
      .create(newPersons)
      .then(returnedPerson =>{
        setPersons(persons.concat(returnedPerson));   
        setNewName('');
        setNewNumber('');         
      })
      
    }

  }


    return (
      <div>  
        <form onSubmit = {addName}>
          <div>
            name: <input value = {newName} onChange = {handleNameChange} />
            <br/>
            number: <input value = {newNumber} onChange = {handleNumberChange} />
          </div>        
          <button type="submit">add</button>        
        </form>
      </div>
    )
}

export default PersonForm