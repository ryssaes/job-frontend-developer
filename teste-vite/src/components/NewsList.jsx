import PropTypes from 'prop-types'; 
import { Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatters';
import {getAuthorInitial, saveReadArticleId} from '../utils/readingTracker';

function NewsList({ articles }) {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

const styles = {
  newsList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  source: {
    fontSize: '16px',
    color: 'var(--source-color)',
    fontFamily: 'var(--robotoCondensed)',
    fontWeight: 700,
    lineHeight: '16px',
    marginBottom: '4px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '48px',
    fontFamily: 'var(--playfairDisplay)',
    color: 'var(--title-color)',
  },
  description: {
    fontSize: '20px',
    color: 'var(--description-color)',
    fontFamily: 'var(--robotoCondensed)',
    lineHeight: '27.5px',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
  },
  authorName: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 700,
    fontFamily: 'var(--poppins)',
    color: 'var(--description-color)',
    margin: '0',
    marginRight: '8px',
  },
  date: {
    fontFamily: 'var(--poppins)',
    color: 'var(--description-color)',
    fontSize: '14px',
    lineHeight: '16px',
    margin: '0',
  },
  link: {
    textDecoration: 'none',
  },
  cardMedia: {
    width: { xs: '100%', md: '424px' },
    height: '317px',
    borderRadius: '8px',
  },
  cardContent: {
    flex: 1,
    padding: '0 16px',
  },
};

  return (
    <Container>
      <Row>
        {sortedArticles.map((article, index) => {
          const slug = `${article.title.toLowerCase().replace(/[^\w-]+/g, '-')}-${index}`;

          return (
            <Col key={index} sm={12} md={12} lg={12} className="mb-4">
              <Link
                to={`/technology/${slug}`}
                onClick={() => saveReadArticleId(article.id)}
                style={styles.link}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 'none',
                    marginBottom: '52px',
                  }}
                >
                  {article.urlToImage && (
                    <CardMedia
                      component="img"
                      sx={styles.cardMedia}
                      image={article.urlToImage}
                      alt={article.title}
                    />
                  )}
                  <CardContent sx={styles.cardContent}>
                    {article.source?.name && (
                      <p style={styles.source}>{article.source.name}</p>
                    )}
                    <h4 style={styles.title}>{article.title}</h4>
                    <p style={styles.description}>{article.description}</p>
                    {article.author && (
                      <div style={styles.author}>
                        <Avatar alt={article.author} sx={{ marginRight: '8px' }}>
                          {getAuthorInitial(article.author)}
                        </Avatar>
                        <p style={styles.authorName}>{article.author},</p>
                        <p style={styles.date}>{formatDate(article.publishedAt)}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

NewsList.propTypes = {
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


export default NewsList;
