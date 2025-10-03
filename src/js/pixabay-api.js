import axios from 'axios';
const pixabayAPI = {
  url: 'https://pixabay.com/api/',
  key: '44811580-9eab9f49684dd01a2a36a0ef4',
};

export async function searchImage({ query = '', page = 1, pageSize = 5 } = {}) {
  try {
    const response = await axios.get(`${pixabayAPI.url}`, {
      params: {
        key: pixabayAPI.key,
        q: query,
        image_type: 'photo',
        orient: 'horizontal',
        safeSearch: true,
        page,
        per_page: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}