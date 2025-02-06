import { useState, useRef, useEffect } from 'react';
import './searchCharacter.css';
import CharacterCard from '../characterCard/characterCard';

const SearchCharacter = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (query.length < 3) {
      setCharacters([]);
      setLoading(false);
      setFound(true);
      return;
    }
  
    const getCharacters = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
  
        if (!response.ok) {
          if (response.status === 404) {
            console.log("Not found");
            setFound(false);
            setCharacters([]);
          } else {
            console.log(`Could not fetch, status: ${response.status}`);
            setCharacters([]);
          }
        } else {
          const data = await response.json();
          setFound(true);
          setCharacters(data.results || []);
        }
      } catch (error) {
        console.error("Network error:", error);
        setFound(false);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
  
    const timeoutId = setTimeout(getCharacters, 500);
  
    return () => clearTimeout(timeoutId);
  
  }, [query]);
  

  console.log(characters.length);
  
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Search characters..."
        onChange={(e) => setQuery(e.target.value)} />

      {loading && <p>Loading...</p>}

      {!found && <p>Not found! Try another request</p>}

      <div className='cards'>
        {
          characters.map(char => {
            return <CharacterCard key={char.id} {...char}/>
          })
        }
      </div>
    </>
  )
}

export default SearchCharacter;