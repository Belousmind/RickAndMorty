const BASE_URL = 'https://rickandmortyapi.com/api/';

export async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      if (response.status === 404) {
        return { results: [], info: { pages: 0 } };
      }
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
