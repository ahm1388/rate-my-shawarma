import React from 'react'
import './styles.css'

const Body = () => {

  const handleSubmit = () => {
    
  }
  return (
    <div className="mainContent">
        <form className="searchForm" onSubmit={handleSubmit()}>
          <label><h3>Find Restaurants</h3></label>
          <input 
            type="text" 
            required 
            placeholder='Search by restaurant name'
          />
          <div className="secRow">
            <select>
              <option>1 star</option>
              <option>2 stars</option>
              <option>3 stars</option>
              <option>4 stars</option>
              <option>5 stars</option>
            </select>
            <button>Search</button>
          </div>
        </form>
    </div>
  )
}

export default Body