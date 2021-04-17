import React from 'react'

const Filter = ({newSearch, setNewSearch}) => {	

  const handleNewSearch = (event) => { setNewSearch(event.target.value) }

  return (
    <div>      
      find countries <input value = {newSearch} onChange = {handleNewSearch} placeholder = 'search here...'/>      
    </div>
  )
}

export default Filter