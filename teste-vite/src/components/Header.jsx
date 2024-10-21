import PropTypes from 'prop-types'; 
import SearchInput from './SearchInput';

const styles = {
  header: {
    backgroundColor: 'var(--background-color)',
    minHeight: '420px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '160px',
  },
  logo: {
    padding: '24px 0',
  },
  container: {
    width: '100%',
    maxWidth: '917px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  title: {
    fontFamily: 'var(--playfairDisplay)',
    fontSize: '64px',
    lineHeight: '72px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'var(--poppins)',
    fontSize: '24px',
    lineHeight: '32px',
  },
  search: {
    position: 'absolute',
    bottom: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    width: '100%',
    maxWidth: '800px',
  },
};

function Header({ onSearch, onClear }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="../../public/images/Logo.svg" alt="Logo" />
      </div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Explore as últimas notícias <br /> sobre tecnologia da web
        </h1>
        <p style={styles.subtitle}>
          Selecionamos todas as notícias sobre tecnologia <br />
          produzidas na web para você. Aproveite, foi tudo feito com dedicação.
        </p>
        <div style={styles.search}>
          <SearchInput onSearch={onSearch} onClear={onClear} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired, 
  onClear: PropTypes.func.isRequired,  
};

export default Header;