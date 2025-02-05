import { useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState("");

  console.log(query)
  
  return (
    <input 
      type="text"
      value={query}
      placeholder="Search characters..."
      onChange={(e) => setQuery(e.target.value)} />
  )
}

export default App;