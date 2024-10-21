import axios from 'axios';

const API_KEY = '64d82fbc0326448ea0b856409802706b'; 
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        country: 'us', 
        apiKey: API_KEY,
        category: 'technology', 
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Erro ao buscar notícias', error);
    return [];
  }
};
