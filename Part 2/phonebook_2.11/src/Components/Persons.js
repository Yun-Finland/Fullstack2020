import React from 'react'

const Person = ({person}) => <ul>{person.name} {person.number}</ul>

const Persons = ({persons, newSearch}) => {
  
  return (
    <div>
      {persons
      .filter((person) => person.name.toLowerCase().startsWith(newSearch.toLowerCase()))
      .map((person) => <Person key = {person.name} person = {person} />) }             
    </div> 
  ) 
}

export default Persons
