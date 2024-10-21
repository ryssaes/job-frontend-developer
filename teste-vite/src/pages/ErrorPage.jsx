const styles = {
  error: {
    display: 'flex',               
    flexDirection: 'column',       
    justifyContent: 'center',     
    alignItems: 'center',           
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

const ErrorPage = () => {
  
  return (
    <div style={styles.error}>
      <img style={styles.image} src='/images/Persona2.jpg' alt='persona' />
      <h3 style={styles.title}>Essa página não existe...</h3>
      <p style={styles.subtitle}>Pesquise ou volte para a home!</p>
    </div>
  );
};

export default ErrorPage;
