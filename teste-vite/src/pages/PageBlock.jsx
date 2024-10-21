import { useLocation } from 'react-router-dom';

const styles = {
  block: {
    display: 'flex',               
    flexDirection: 'column',       
    justifyContent: 'center',     
    alignItems: 'center',          
    height: '100vh',              
    textAlign: 'center', 
  },
  image: {
    maxWidth: '500px',
    height: 'auto',
    opacity: 0.7, 
  },
  title: {
    fontFamily: 'var(--playfairDisplay)', 
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  subtitle: {
    fontFamily: 'var(--poppins)', 
    fontSize: '20px',
    margin: 0,
    color: '#008B8B', 
  },
};

const PageBlock = () => {
  const location = useLocation();
  
  const errorType = location.state?.errorType; 

  let errorMessage = 'Limite de Leitura Excedido';
  let subtitleMessage = 'Você já está bem informado por enquanto!';

  if (errorType === 'sameArticle') {
    errorMessage = 'Você acessou a mesma notícia mais de duas vezes...';
  } else if (errorType === 'tooManyArticles') {
    errorMessage = 'Você consultou mais de 10 notícias diferentes...';
  } else {
    errorMessage = 'Navegação anônima detectada...';
    subtitleMessage = 'Entre em uma aba normal para continuar navegando!';
  }

  return (
    <div style={styles.block}>
      <img style={styles.image} src='/images/Persona.jpg' alt='persona' />
      <h3 style={styles.title}>{errorMessage}</h3>
      <p style={styles.subtitle}>{subtitleMessage}</p>
    </div>
  );
};

export default PageBlock;
