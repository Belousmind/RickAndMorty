export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterApi = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
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
  created: string;
};

export type LocationApi = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type EpisodeApi = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type CharacterApiResponse = {
  info: Info;
  results: CharacterApi[];
};

export type LocationApiResponse = {
  info: Info;
  results: LocationApi[];
};

export type EpisodeApiResponse = {
  info: Info;
  results: EpisodeApi[];
};
