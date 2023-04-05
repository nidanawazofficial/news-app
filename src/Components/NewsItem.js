import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date } = props;
  return (
    <div className='my-3 mx-3'>
      <div className="card">
        <img src={!imageUrl ? 'https://play-lh.googleusercontent.com/Jj52b09gps4lZMaS7VDFzu4l9YvrvSqGlN5xBdUbB7IwMlNNJtuzv2_GnEOcR3-jDLU' : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-danger"><small className="text-danger"> by: {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={url} target="__blank" className="btn btn-sm btn-primary"> Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;

