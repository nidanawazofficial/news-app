import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const News = ({ pageSize, country, category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Top Headlines ${category.charAt(0).toUpperCase() + category.slice(1)} News`;
    const fetchNews = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5e8c9469c725433faa6430ce73945166`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setLoading(false);
    };
    fetchNews();
  }, [pageSize, country, category]);

  return (
    <>
      <h1 className="text-center" style={{margin:"35px 0px",marginTop:"90px"}} >
        Top Headlines {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
