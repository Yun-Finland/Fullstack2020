import React, { useState } from 'react'

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
            window.alert(`${newName} is already added to phonebook`);

        }else{
          
          const newPersons = {
            name: newName,
            number: newNumber
          }

          setPersons(persons.concat(newPersons));
        }
    
        setNewName('');
        setNewNumber('');
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