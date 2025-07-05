const BASE_URL = 'https://rickandmortyapi.com/api/';

const resources = [
  { title: 'Characters', endpoint: 'character', route: 'characters' },
  { title: 'Locations', endpoint: 'location', route: 'locations' },
  { title: 'Episodes', endpoint: 'episode', route: 'episodes' },
];

export const fetchCounts = async () => {
  const requests = resources.map((item) =>
    fetch(`${BASE_URL}${item.endpoint}`, {
      next: { revalidate: 60 },
    }).then((res) => res.json()),
  );

  const results = await Promise.all(requests);

  return results.map((res, index) => ({
    ...resources[index],
    amount: res.info.count,
  }));
};
