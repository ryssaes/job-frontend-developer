import PropTypes from 'prop-types'; 
import { Button } from '@mui/material';
import SearchInput from './SearchInput';

const styles = {
  nav: {
    backgroundColor: 'var(--background-color)',
    minHeight: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '80px',
    position: 'relative',
  },
  home: {
    position: 'absolute',
    left: '20px',
    top: '22%',
    transform: 'translateY(-50%)',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--title-color)',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'var(--poppins)',
  },
  logo: {
    padding: '24px 0',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    maxWidth: '917px',
    marginTop: '20px',
  },
  search: {
    width: '100%',
  },
};

function Nav({ onSearch, onClear }) {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.home}>
        <Button onClick={handleGoHome} style={styles.button}>
          <img src="../../public/images/Arrow.svg" alt="Go Home" />
          Home
        </Button>
      </div>
      <div style={styles.logo}>
        <img src="../../public/images/Logo.svg" alt="Logo" />
      </div>
      <div style={styles.container}>
        <div style={styles.search}>
          <SearchInput onSearch={onSearch} onClear={onClear} />
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired, 
  onClear: PropTypes.func.isRequired,  
};

export default Nav;
