import React from 'react'

function List({
  emojis
}) {
  return (
    <div className='list-container'>
      <ul className='list-inner'>
        {emojis.map(item =>
          <li className='list-item'>{item.character}{item.unicodeName}</li>
        )}
      </ul>
    </div>
  )
}

export default List
