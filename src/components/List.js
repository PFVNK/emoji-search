import React from 'react'

function List({
  emojis
}) {
  return (
    <div className='list-container'>
      <ul className='list-inner'>
        {emojis.map(item =>
          <li className='list-item'><span className='emoji'>{item.character}</span><span className='emoji-title'>{item.unicodeName}</span></li>
        )}
      </ul>
    </div>
  )
}

export default List
