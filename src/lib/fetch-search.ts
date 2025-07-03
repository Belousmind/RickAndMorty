import { fetchData } from "./fetch-data";

export async function fetchSearch(endpoint: string, page = 1, query = "") {
  const params = new URLSearchParams();
  params.set("page", String(page));
  if (query) params.set("name", query);

  return await fetchData(`${endpoint}/?${params.toString()}`);
}
