import React from 'react'

  const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((s, part) => s += part.exercises,0)
  
    return(
      <p>Total of {sum} exercises </p>
    ) 
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key = {part.id} part = {part}/>)}
      </div>
    )
  }
  
  const Course = ({ course }) =>{
    return (
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course} />
      </div>
    )
  }
  
  const Courses = ({courses}) => {  
    return (
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(course => <Course key = {course.id} course = {course}/>)}
      </div>
    )
  }

  export default Courses
