export async function fetchMultiple(urls: string[]) {
  const requests = urls.map((url) => fetch(url).then((res) => res.json()));
  const results = await Promise.all(requests);
  return results;
}
