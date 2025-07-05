import { fetchData } from './fetch-data';

export async function fetchPage(endpoint: string, page = '1') {
  const data = await fetchData(`${endpoint}/?page=${page}`);
  return data;
}
