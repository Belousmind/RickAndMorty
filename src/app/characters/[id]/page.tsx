import { fetchData } from "@/lib/fetchData";
import { fetchMultiple } from "@/lib/fetchMultiple";
import Link from "next/link";
import EpisodeCard, {
  EpisodeCardProps,
} from "@/components/episode-card/episode-card";
import extractDigits from "@/utils/extract-digits";
import NamedLink from "@/components/named-link/named-link";

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

export default async function Character({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: Character = await fetchData(`character/${id}`);

  const episodes = await fetchMultiple("episode", data.episode);

  return (
    <div>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Type: {data.type || "Unknow"}</p>
      <p>Gender: {data.gender}</p>
      <p>
        Origin:
        <NamedLink
          name={data.origin.name}
          url={data.origin.url}
          basePath="/locations"
        />
      </p>
      <p>
        Location:
        <NamedLink
          name={data.location.name}
          url={data.location.url}
          basePath="/locations"
        />
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
