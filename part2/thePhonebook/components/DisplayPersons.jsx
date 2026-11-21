import React from 'react'

const DisplayPersons = ({persons, filteredArray}) => {
  return (
    <div>
        <ul>
          {
            filteredArray.length==0 ? 
            persons.map(person => <li key={person.name}>{person.name} : {person.number}</li>) :
            filteredArray.map(person => <li key={person.name}>{person.name} : {person.number}</li> )
          }
        </ul>
    </div>
  )
}

export default DisplayPersons
