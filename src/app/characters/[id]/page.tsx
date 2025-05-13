import fetchData from "@/lib/fetchData";
import { fetchMultiple } from "@/lib/fetchMultiple";
import Link from "next/link";
import EpisodeCard, {
  EpisodeCardProps,
} from "@/components/episode-card/episode-card";

type Params = {
  params: {
    id: string;
  };
};

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
};

// оказывается у некоторых возвращается unknown, поэтому нужна проверка
function notNumber(str: string) {
  return str.replace(/[^0-9]/g, "");
}

export default async function Character({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  // const { id } = params;

  const data: Character = await fetchData(`character/${id}`);

  const episodes = await fetchMultiple(data.episode);
  // console.log(notNumber(data.location.url), notNumber(data.origin.url))
  console.log(data);

  return (
    <div>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Type: {data.type || "Unknow"}</p>
      <p>Gender: {data.gender}</p>
      <p>
        Origin:{" "}
        <Link href={`/locations/${notNumber(data.location.url)}`}>
          {data.origin.name} [ ↗ ]
        </Link>
      </p>
      <p>
        Location:{" "}
        <Link href={`/locations/${notNumber(data.origin.url)}`}>
          {data.location.name} [ ↗ ]
        </Link>
      </p>
      <div className="list">
        {episodes.map((item: EpisodeCardProps) => (
          <EpisodeCard
            key={item.id}
            id={item.id}
            name={item.name}
            episode={item.episode}
          />
        ))}
      </div>
    </div>
  );
}
