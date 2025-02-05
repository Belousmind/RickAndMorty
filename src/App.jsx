import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(query)
  
  return (
    <input
      ref={inputRef}
      type="text"
      value={query}
      placeholder="Search characters..."
      onChange={(e) => setQuery(e.target.value)} />
  )
}

export default App;