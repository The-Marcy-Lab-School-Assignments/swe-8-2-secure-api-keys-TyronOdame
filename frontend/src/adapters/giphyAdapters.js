import { handleFetch } from './handleFetch.js';

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  const url = '/api/gifs';
  // const [data, error] = await handleFetch(url);

  return await handleFetch(url);
};

export const getGifsBySearch = async (searchTerm) => {};
