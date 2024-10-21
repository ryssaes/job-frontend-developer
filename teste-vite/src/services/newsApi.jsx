import axios from 'axios';

const API_KEY = '772a3c46c12f42c5939edbaf1da6fc2b'; 
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async () => {
  const cachedNews = localStorage.getItem('news');
  const cachedTime = localStorage.getItem('newsTime');

  if (cachedNews && cachedTime && Date.now() - cachedTime < 60 * 60 * 1000) { // 1 hora de cache
    return JSON.parse(cachedNews);
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        country: 'us', 
        apiKey: API_KEY,
        category: 'technology', 
      },
    });
    
    localStorage.setItem('news', JSON.stringify(response.data.articles));
    localStorage.setItem('newsTime', Date.now());
    
    return response.data.articles;
  } catch (error) {
    console.error('Erro ao buscar notícias', error);
    return [];
  }
};
