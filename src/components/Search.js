import React from 'react'

function Search({
  setSearch,
  search
}) {

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className='search-container'>
      <div className='search-inner'>
        <h1>😺 EMOJI SEARCH 😾</h1>
        <input className='search-input'
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Search
