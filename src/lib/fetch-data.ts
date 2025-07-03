const BASE_URL = "https://rickandmortyapi.com/api/";

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

export async function fetchSearch(endpoint: string, page = 1, query = "") {
  const params = new URLSearchParams();
  params.set("page", String(page));
  if (query) params.set("name", query);

  return await fetchData(`${endpoint}/?${params.toString()}`);
}

export async function fetchPage(endpoint: string, page = 1) {
  const data = await fetchData(`${endpoint}/?page=${page}`);
  return data;
}
