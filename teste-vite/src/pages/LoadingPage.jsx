import CircularProgress from '@mui/material/CircularProgress'; 

const styles = {
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
};

const LoadingPage = () => {
  return (
    <div style={styles.loadingContainer}> 
      <CircularProgress color="success" />
    </div>
  );
};

export default LoadingPage;
