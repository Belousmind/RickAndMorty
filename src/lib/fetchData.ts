const BASE_URL = "https://rickandmortyapi.com/api/";

// export default async function fetchData (endpoint?: string, url = BASE_URL) {
//   const res = await fetch(`${url}${endpoint}`);
//   const data = await res.json();

//   return data;
// }

export default async function fetchData(endpoint: string, page = 1) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/${endpoint}/?page=${page}`
  );
  if (!res.ok) throw new Error("Ошибка загрузки данных");
  const data = await res.json();
  return data;
}
