import React from 'react';
import { useHistory } from 'react-router-dom'; 
import Secondary from './Secondary';

function DetailedBlog({ post }) {
  const history = useHistory();

  return (
    <>
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          <article>
            <header className="entry-header">
              <h1 className="entry-title">{post.title}</h1>
              <div className="entry-meta">
                <span className="posted-on"><time className="entry-date published">{post.createdAt}</time></span>
                <span className="comments-link"><a href="#">Leave a comment</a></span>
              </div>
              <div className="entry-thumbnail">
                <img src={post.image} alt={post.title} />
              </div>
            </header>

            <div className="entry-content">
              <p>{post.preview}</p>
              <p>{post.description}</p>
            </div>

            <footer className="entry-footer">
              <span className="cat-links">
                Posted in
                <a href="#" rel="category tag">audio</a>,
                <a href="#" rel="category tag">embed</a>,
                <a href="#" rel="category tag">media</a>
              </span>
            </footer>

          </article>

          <nav className="navigation post-navigation" role="navigation">
            <h1 className="screen-reader-text">Post navigation</h1>
            <div className="nav-links">
              <div className="nav-previous">
                <a onClick={() => history.goBack()} style={{cursor: 'pointer'}}><span className="meta-nav">←</span> Thanks for watching!</a>
              </div>
            </div>

          </nav>

          <div id="comments" className="comments-area">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/demo-moschino/embed-audio/#respond" style={{ display: 'none' }}>Cancel reply</a></small></h3>
              <form action="http://www.themepush.com/demo-moschino/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="">
                <p className="comment-notes">
                  <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                </p>
                <p className="comment-form-comment">
                  <label htmlFor="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="required"></textarea>
                </p>
                <p className="comment-form-author">
                  <label htmlFor="author">Name <span className="required">*</span></label><input id="author" name="author" type="text" value="" size="30" aria-required="true" required="required" readOnly />
                </p>
                <p className="comment-form-email">
                  <label htmlFor="email">Email <span className="required">*</span></label><input id="email" name="email" type="email" value="" size="30" aria-describedby="email-notes" aria-required="true" required="required" readOnly />
                </p>
                <p className="comment-form-url">
                  <label htmlFor="url">Website</label><input id="url" name="url" type="url" value="" size="30" readOnly />
                </p>
                <p className="form-submit">
                  <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" readOnly /><input type="hidden" name="comment_post_ID" value="90" id="comment_post_ID" readOnly />
                  <input type="hidden" name="comment_parent" id="comment_parent" value="0" readOnly />
                </p>
                <noscript>
                </noscript>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Secondary />
    </>
  );
}

export default DetailedBlog;