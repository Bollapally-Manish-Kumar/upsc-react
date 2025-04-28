import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "../styles/pages/current-affairs.css";

const CurrentAffairs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("GNews API Key:", process.env.REACT_APP_GNEWS_API_KEY);
      const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
        params: {
          country: 'in', // India-specific news
          lang: 'en', // English language
          max: 10, // Limit to 10 articles
          apikey: process.env.REACT_APP_GNEWS_API_KEY,
        },
      });
      console.log("GNews API Response:", response.data);
      setArticles(response.data.articles);
      setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      let errorMessage = 'Failed to fetch news. Please try again later.';
      if (err.response?.status === 401 || err.response?.data?.errors?.includes('Invalid API key. Please check your API key and try again.')) {
        errorMessage = (
          <>
            Authentication failed: Invalid GNews API key.{' '}
            <a
              href="https://gnews.io"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-link"
              style={{ color: 'var(--neon-yellow)', textDecoration: 'underline' }}
            >
              Check your key at GNews.io
            </a>.
          </>
        );
      } else if (err.response?.data?.errors) {
        errorMessage = `GNews Error: ${err.response.data.errors.join(', ')}`;
      }
      setError(errorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Fallback static content
  const fallbackContent = (
    <div className="current-affairs-grid">
      <Card title="Daily Updates" cyberpunk glowColor="green" animation="fade-up">
        <ul className="cyber-list">
          <li>April 24, 2025 - New National Education Policy Draft</li>
          <li>April 23, 2025 - G20 Summit Outcomes</li>
          <li>April 22, 2025 - Climate Action Plan 2025</li>
        </ul>
        <button className="cyber-button">View All</button>
      </Card>
      <Card title="Monthly Archives" cyberpunk glowColor="blue" animation="fade-up">
        <p className="cyber-text">Access past months' summaries:</p>
        <ul className="cyber-list">
          <li><a href="#" className="cyber-link">March 2025</a></li>
          <li><a href="#" className="cyber-link">February 2025</a></li>
        </ul>
      </Card>
      <Card title="Key Highlights" cyberpunk glowColor="pink" animation="fade-up">
        <p className="cyber-text">Top 3 topics this week:</p>
        <ul className="cyber-list">
          <li>Economy - Inflation Trends</li>
          <li>Environment - Renewable Energy Push</li>
          <li>Polity - New Legislation</li>
        </ul>
      </Card>
    </div>
  );

  return (
    <div className="current-affairs-container">
      <div className="current-affairs-content">
        <h2 className="page-title">Current Affairs</h2>
        <p className="cyber-text">
          Stay ahead with the latest news and events tailored for UPSC 2025. 
          Explore daily updates, monthly archives, and key highlights below: <span className="neon-accent">🔍</span>
        </p>
        {loading && (
          <p className="cyber-text" style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Loading news...
          </p>
        )}
        {error && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="cyber-text" style={{ color: 'var(--neon-pink)', fontSize: '1.2rem', marginBottom: '1rem' }}>
              {error}
            </p>
            <button
              className="cyber-button"
              onClick={fetchNews}
              style={{ padding: '0.6rem 1.4rem', fontSize: '1rem' }}
            >
              Retry
            </button>
            <p className="cyber-text" style={{ marginTop: '1rem', fontSize: '1rem' }}>
              While we resolve this, check out our curated updates below:
            </p>
            {fallbackContent}
          </div>
        )}
        {!loading && !error && (
          <div className="current-affairs-grid">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <Card
                  key={index}
                  title={article.title}
                  cyberpunk
                  glowColor={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'blue' : 'pink'}
                  animation="fade-up"
                  buttonText="Read More"
                  buttonLink={article.url}
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        objectFit: 'cover',
                        maxHeight: '200px'
                      }}
                    />
                  )}
                  <p className="cyber-text">{article.description || 'No description available'}</p>
                </Card>
              ))
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p className="cyber-text" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                  No articles found. Check out our curated updates below:
                </p>
                {fallbackContent}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentAffairs;