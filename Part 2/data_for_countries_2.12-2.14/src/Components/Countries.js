import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WeatherDetails = ({capital}) => {

  const [weather, setWeather] = useState(null);  

  useEffect(()=>{ 
    axios
    .get(`http://api.weatherstack.com/current`,{
      params: {
        access_key: process.env.REACT_APP_API_KEY,
        query: capital,
      },
    })
    .then(response => setWeather(response.data))},[capital]) 
  
  if(weather===null){
    return <div></div>
  }else{
    return(
      <div>
          <p><b>Temperature:</b> {weather.current.temperature} Celcius</p>
          <img src={weather.current.weather_icons} alt='weather icon'/>
          <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>        
      </div>
    ) 
  }

}


const CountryDetails = ({country}) => {
 
  return (
    <div>     
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
    
      <h2>Languages</h2>
      <p>
      {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
      </p>
      <img src={country.flag} alt="flag" width="15%" length="15%"/>  
    
      <h2>Weather in {country.capital}</h2>  
      <WeatherDetails capital = {country.capital} />  
      
  </div>
  )
}

const ShowButton = ({country})=> {

  const [showDetails, setShowDetails] = useState(true);
  const [newCountry, setNewCountry] = useState([]);

  const showOrHide = () => {

    if(showDetails){
      setNewCountry(<CountryDetails country={country}/>);
      setShowDetails(false);
    }else{
      setNewCountry([]);
      setShowDetails(true);
    }
    
  }

  return (
    <div>
      {country.name }
      <button onClick = {showOrHide}>
        {showDetails ? 'show' :'hide'}
      </button>   
      {newCountry}
    </div>
  )
}

const ShowCountryButton = ({countries}) => {
  return (
    countries.map((country) => <ShowButton key={country.name} country={country}/>) 
  ) 
}    

const Countries = ({countries, newSearch}) => {  

  let results = countries.filter((country) => country.name.toLowerCase().startsWith(newSearch.toLowerCase()))
  
  let results_size = results.length;

  if (results_size === 0){
    return <p>None is matched, please change another filter</p>

  } else if(results_size === 1){
    return ( <CountryDetails country = {results[0]} />) 

  } else if( results_size <= 10){
    return <ShowCountryButton countries = {results} />

  } else{
    return <p>Too many matches, specify another filter</p>;
  }
  
}

export default Countries
