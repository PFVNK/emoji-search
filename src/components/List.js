import { useEffect } from 'react'

function List({
  emojis
}) {

  let noNum = []
  let filteredEmojis = emojis.map(emoji => emoji.unicodeName.split(''))

  // for (let i = 0; i < filteredEmojis.length; i++) {
  //   let title = filteredEmojis[i]
  //   console.log(title)
  // }

  useEffect(() => {
    console.log(filteredEmojis)
  })

  return (
    <div className='list-container'>
      <ul className='list-inner'>
        {emojis && emojis.map(item =>
          <li className='list-item'><span className='emoji'>{item.character}</span><span className='emoji-title'>{item.unicodeName.charAt(0).toUpperCase() + item.unicodeName.slice(1)}</span></li>
        )}
      </ul>
    </div>
  )
}

export default List
