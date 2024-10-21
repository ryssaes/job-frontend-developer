import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { fetchNews } from './services/newsApi';
import NewsList from './components/NewsList';
import Header from './components/Header';
import NewsDetails from './pages/NewsDetails';
import LoadingPage from './pages/LoadingPage';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav';
import PageBlock from './pages/PageBlock';
import { detectIncognito } from 'detectincognitojs';
import PropTypes from 'prop-types'; 
import ErrorPage from './pages/ErrorPage';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  app__header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  app__title: {
    fontSize: '24px',
    fontWeight: '800',
    lineHeight: '24px',
    letterSpacing: '2%',
    fontFamily: 'var(--poppins)',
    marginBottom: '32px',
  },
  app__text: {
    textAlign: 'center',
    color: 'var(--description-color)',
    fontSize: '20px',
    fontFamily: 'var(--robotoCondensed)', 
    lineHeight: '27.5px',
    marginBottom: '40px',
  },
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsArticles = await fetchNews();
        setArticles(newsArticles);
        setFilteredArticles(newsArticles);
        setLoading(false);
      } catch {
        setError('Erro ao buscar notícias. Tente novamente.');
        setLoading(false);
      }
    };

    getNews();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(term.toLowerCase()) ||
        article.author?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilteredArticles(articles);
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isPageBlock = location.pathname === '/page-block'; 

    return (
      <>
        {!isPageBlock && ( 
          <>
            {!searchTerm && isHome ? (
              <Header onSearch={handleSearch} onClear={handleClear} />
            ) : (
              <Nav onSearch={handleSearch} onClear={handleClear} />
            )}
          </>
        )}
        {children}
      </>
    );
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Router>
      <CheckAnonymousTab />
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <div style={styles.app}>
                <Container>
                  <Row>
                    <Col sm={12} md={12} lg={12} className="mb-4">
                      <div style={styles.app__header}>
                        {!searchTerm || filteredArticles.length > 0 ? (
                          <h2 style={styles.app__title}>
                            {searchTerm ? 'O RESULTADO DA SUA BUSCA' : 'ÚLTIMAS NOTÍCIAS'}
                          </h2>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </Container>
                
                {filteredArticles.length === 0 ? (
                  <div>
                    <p style={styles.app__text}>
                      Nenhum resultado encontrado para o termo pesquisado. <br/>
                      Talvez você goste da nossa sugestão de notícias
                    </p>
                    <h2 style={styles.app__title}>SUGESTÃO DE NOTÍCIAS</h2>
                    <NewsList articles={[articles[19]]} /> 
                  </div>
                ) : (
                  <NewsList articles={filteredArticles} />
                )}
              </div>
            } 
          />
          <Route 
            path="/technology/:slug" 
            element={<NewsDetails articles={articles} />} 
          />
          <Route 
            path="/page-block" 
            element={<PageBlock />} 
          />
          <Route 
            path="*" // Captura qualquer rota não definida
            element={<ErrorPage />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

const CheckAnonymousTab = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkIncognitoMode = async () => {
      const result = await detectIncognito();
      if (result.isPrivate) {
        navigate('/page-block'); 
      }
    };

    checkIncognitoMode();
  }, [navigate]);

  return null;
};

export default App;
