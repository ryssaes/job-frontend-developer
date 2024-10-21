
import PropTypes from 'prop-types'; 
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

const styles = {
  searchInput: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '80px',
    borderRadius: '8px',
  },
  iconButton: {
    padding: '10px',
  },
  inputBase: {
    marginLeft: '8px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    width: '100%',
  },
  clearButtonIcon: {
    width: '20px',
    height: '20px',
  },
};

export default function SearchInput({ onSearch, onClear }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <Paper 
      sx={{ 
        boxShadow: '0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A',
        width: '100%',
        maxWidth: '917px',
      }}
      component="form"
      style={styles.searchInput}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <IconButton 
        style={styles.iconButton} 
        aria-label="search" 
        onClick={handleSearch}
      >
        <img src='../../public/images/Search.svg' alt='search' />
      </IconButton>
      <InputBase
        sx={{
          '& input::placeholder': {  
            fontFamily: 'var(--poppins)',
            color: '#1E293B',
            opacity: 'unset',
          },
        }}
        style={styles.inputBase}
        placeholder="O que deseja encontrar?"
        inputProps={{ 'aria-label': 'buscar por título ou autor' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <IconButton 
          style={styles.iconButton} 
          aria-label="clear" 
          onClick={clearSearch}
        >
          <img style={styles.clearButtonIcon} src='../../public/images/Close.svg' alt='clear' />
        </IconButton>
      )}
    </Paper>
  );
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired, 
  onClear: PropTypes.func.isRequired, 
};
