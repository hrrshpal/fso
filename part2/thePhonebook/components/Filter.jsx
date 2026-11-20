import React from 'react'

const Filter = ({filteredArray, handleFilterChange}) => {
  return (
    <div>
      <span>filter shown with a </span> <input onChange={handleFilterChange}/>
      <ul>
        {filteredArray.map(person => <li key={person.name}>{person.name} : {person.number}</li>)}
      </ul>
    </div>
  )
}

export default Filter
