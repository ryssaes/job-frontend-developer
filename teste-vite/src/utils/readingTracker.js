
export const getAuthorInitial = (author) => {
    if (!author) return '';
    return author.charAt(0).toUpperCase();
  };
  
  export const saveReadArticleId = (index) => {
    const readArticles = JSON.parse(localStorage.getItem('articles_read')) || {};
    
    if (readArticles[index]) {
      readArticles[index] += 1;
    } else {
      readArticles[index] = 1;
    }
  
    localStorage.setItem('articles_read', JSON.stringify(readArticles));
  };
  