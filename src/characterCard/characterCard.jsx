import "./CharacterCard.css";


const CharacterCard = ({name, species, status, created, url}) => {

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  
  return (
    <div className="character-card">
      <a target="_blank" href={url}><span className="name">{name}</span> - <span className="speices">{species}</span></a>
      <p className="status">Status: <span className={`${status.toLowerCase()}`}>{status}</span></p>
      <p className="created">Created: {formatDate(created)}</p>
    </div>
  )
}

export default CharacterCard;