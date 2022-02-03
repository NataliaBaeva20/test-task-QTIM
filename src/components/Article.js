import React from 'react';
import { Link } from 'react-router-dom';

function Article(props) {

  function handleClick() {
    props.onPostClick(props.postId)
  }
        
  return (
    <article>
      <header className="entry-header">
        <h1 className="entry-title"><Link to="/detailed-blog" onClick={handleClick} rel="bookmark">{props.title}</Link></h1>
        <div className="entry-meta">
          <span className="posted-on"><time className="entry-date published">{props.createdAt}</time></span>
          <span className="comments-link"><a href="#">Leave a comment</a></span>
        </div>
        <div className="entry-thumbnail">
          <img src={props.image} alt={props.title}/>
        </div>
      </header>
      <div className="entry-summary">
        <p>
          {props.preview} <Link className="more-link" to="/detailed-blog" onClick={handleClick}>Read more</Link>
        </p>
      </div>
      <footer className="entry-footer">
        <span className="cat-links">
          Posted in <a href="#" rel="category tag">audio</a>, <a href="#" rel="category tag">embed</a>, <a href="#" rel="category tag">media</a>
        </span>
      </footer>
    </article>
  );
}

export default Article;