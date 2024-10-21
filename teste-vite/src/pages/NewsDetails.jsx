import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, CardMedia, Avatar } from "@mui/material";
import { formatDate } from "../utils/formatters";
import LoadingPage from "./LoadingPage";
import {getAuthorInitial, saveReadArticleId} from '../utils/readingTracker';

const styles = {
  newDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  source: {
    fontSize: '24px',
    color: 'var(--source-color)', 
    fontFamily: 'var(--poppins)', 
    fontWeight: 700,
    lineHeight: '24px',
  },
  title: {
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: '72px',
    fontFamily: 'var(--playfairDisplay)', 
    color: 'var(--title-color)',
    marginBottom: '12px',
  },
  description: {
    fontSize: '20px',
    color: 'var(--description-color)', 
    fontFamily: 'var(--robotoCondensed)', 
    lineHeight: '27.5px',
    marginTop: '12px',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorName: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 700,
    fontFamily: 'var(--robotoCondensed)', 
    color: 'var(--description-color)', 
    margin: 0,
    marginRight: '8px',
  },
  date: {
    fontFamily: 'var(--robotoCondensed)', 
    color: 'var(--description-color)', 
    fontSize: '14px',
    lineHeight: '16px',
    margin: 0,
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '922px',
    borderRadius: '8px',
    marginTop: '24px',
  },
};

function NewDetails({ articles }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const articleIndex = slug.split("-").pop();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  const checkAccessLimit = (index) => {
    const readArticles = JSON.parse(localStorage.getItem('articles_read')) || {};
    const accessCount = readArticles[index] || 0;
    return accessCount > 3;
  };

  const checkTotalArticlesLimit = () => {
    const readArticles = JSON.parse(localStorage.getItem('articles_read')) || {};
    const totalArticlesRead = Object.keys(readArticles).length;
    return totalArticlesRead > 11;
  };

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const selectedArticle = articles[articleIndex];

      if (selectedArticle) {
        if (checkAccessLimit(articleIndex)) {
          navigate('/page-block', { state: { errorType: 'sameArticle' } });  
          return;
        }

        if (checkTotalArticlesLimit()) {
          navigate('/page-block', { state: { errorType: 'tooManyArticles' } });  
          return;
        }

        saveReadArticleId(articleIndex);
        setArticle(selectedArticle);
      } else {
        setLoading(false); 
        return;
      }
      setLoading(false);
    };

    fetchArticle();
  }, [articles, articleIndex, navigate]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!article) {
    return <p>Notícia não encontrada.</p>;
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className="mb-4">
          <Card
            sx={{
              boxShadow: "none",
              marginBottom: "52px",
              textAlign: "center",
            }}
          >
            <CardContent style={styles.newDetails}>
              {article.source?.name && (
                <p style={styles.source}>
                  {article.source.name}
                </p>
              )}
              <h4 style={styles.title}>{article.title}</h4>
              {article.author && (
                <div style={styles.author}>
                  <Avatar alt={article.author} sx={{ marginRight: "8px" }}>
                    {getAuthorInitial(article.author)}
                  </Avatar>
                  <p style={styles.authorName}>
                    {article.author},
                  </p>
                  <p style={styles.date}>
                    {formatDate(article.publishedAt)}
                  </p>
                </div>
              )}
              {article.urlToImage && (
                <CardMedia
                  component="img"
                  style={styles.image}
                  image={article.urlToImage}
                  alt={article.title}
                />
              )}
              <p style={styles.description}>
                {article.description}
              </p>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

NewDetails.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string.isRequired,
      author: PropTypes.string,
      source: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default NewDetails;
