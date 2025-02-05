import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (query.length < 3) {
      setCharacters([]);
      return;
    }

    const getCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);

      if (!response.ok) {
        throw new Error(`Could not fetch, status: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.results || []);
    }

    const timeoutId = setTimeout(getCharacters, 500);

    return () => clearTimeout(timeoutId);

  }, [query]);

  console.log(characters);
  
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