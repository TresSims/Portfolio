import axios from 'axios';

export function getStrapiURL(path = '') {
  let finalPath = 'http://backend:1337' + path;
  console.log(finalPath);
  return finalPath;
}

export function getMediaURL(path = '') {
  let finalPath = 'http://localhost:3000/api' + path;
  console.log(finalPath);
  return finalPath;
}

export async function fetchAPI(path) {
  console.log('Fetching' + path);
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  const data = response.data;
  return data;
}
