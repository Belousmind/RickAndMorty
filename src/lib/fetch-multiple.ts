const BASE_URL = 'https://rickandmortyapi.com/api/';

export async function fetchMultiple(endpoint: string, urls: string[]) {
  if (!urls.length) return [];
  const ids = urls.map((url) => url.split('/').pop()).filter(Boolean);
  const idString = ids.join(',');
  const res = await fetch(`${BASE_URL}${endpoint}/${idString}`);

  if (!res.ok) throw new Error('Ошибка загрузки персонажей');
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
}
