import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './Components/Countries.js'
import Filter from './Components/Filter.js'

const App = () => {

  const [ countries, setCountries ] = useState([]); 
  const [ newSearch, setNewSearch ] = useState('');

  useEffect (()=>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data);    
    })
  }, [])

  return (
    <div>    
    
      <Filter newSearch ={newSearch} setNewSearch={setNewSearch}/>      
    
      <Countries countries = {countries} newSearch={newSearch} />     

    </div>
  )
}


export default App