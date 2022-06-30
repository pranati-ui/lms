import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

const SearchBar = () => {
  return (
    <div style={{width:'100%'}} className="search-box">
        <input
            className="form-control mr-sm-2 flex-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <SearchOutlined className='search-icon' />
    </div>
  )
}

export default SearchBar