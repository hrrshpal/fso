import React from 'react'

const PersonForm = ({handleNameChange, handleNumberChange, handleAddBtn}) => {
  return (
    <form>
        <div>
            name: <input onChange={handleNameChange}/> <br />
            number: <input onChange={handleNumberChange}/>
        </div>
        <div>
            <button onClick={handleAddBtn}>add</button>
        </div>
    </form>
  )
}

export default PersonForm
