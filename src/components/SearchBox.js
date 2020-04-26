import React from 'react'
import {IconSearch} from './Icon'

function SearchBox({onSearch, loading}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSearch(event.target.elements.search.value)
  }

  return (
    <form className="search-wrapper" method="POST" onSubmit={handleSubmit}>
      <input
        id="search"
        disabled={loading}
        aria-label="search input"
        className="search__input"
        placeholer="Search Movies"
      />
      <button disabled={loading} aria-label="search" className="search-icon">
        <IconSearch className="search-svg" />
      </button>
    </form>
  )
}

export default SearchBox
