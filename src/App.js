import { useState, useEffect } from 'react'
import './App.css';

import Search from './components/Search'
import List from './components/List'

function App() {
  const [search, setSearch] = useState('')
  const [emojis, setEmojis] = useState([])

  let url = `https://emoji-api.com/emojis?search=${search}&access_key=24deeed82b2527eeb42354b226b82ce37900f8bb`

  useEffect(async () => {
    if (search.length) {
      fetch(url)
        .then(response => response.json())
        .then(data => setEmojis(data));
    }
  })

  useEffect(() => {
    console.log(emojis)
    console.log(search)
  })

  return (
    <div className="App">
      <Search
        setSearch={setSearch}
        search={search}
      />
      <List
        emojis={emojis}
      />
    </div>
  );
}

export default App;
