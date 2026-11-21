import React from 'react'

const Filter = ({handleFilterChange}) => {
  return (
    <div>
      <span>filter shown with a </span> <input onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter
