import Secondary from '../Secondary';

function BlogSingle() {
  return (
    <>
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          <article>
            <header className="entry-header">
              <h1 className="entry-title">Somewhere in time</h1>
              <div className="entry-meta">
                <span className="posted-on"><time className="entry-date published">April 6, 2016</time></span>
                <span className="comments-link"><a href="#">Leave a comment</a></span>
              </div>
              <div className="entry-thumbnail">
                <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg" alt="" />
              </div>
            </header>

            <div className="entry-content">
              <p>
                When Mary Lennox was sent to Manor to live with her uncle everybody said she was the most disagreeablelooking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression.
              </p>
              <p>
                Her hair was yellow, and her face was yellow because she had been born in India and had always been ill in one way or another. Her father had held a position under the English Government and had always been busy and ill himself, and her mother had been a great beauty who cared only to go to parties and amuse herself with gay people. She had not wanted a little girl at all, and when Mary was born she handed her over to the care of an Ayah, who was made to understand that if she wished to please the Mem Sahib she must keep the child out of sight as much as possible.
              </p>
              <p>
                So when she was a sickly, fretful, ugly little baby she was kept out of the way, and when she became a sickly, fretful, toddling thing she was kept out of the way also. She never remembered seeing familiarly anything but the dark faces of her Ayah and the other native servants, and as they always obeyed her and gave her her own way in everything, because the Mem Sahib would be angry if she was disturbed by her crying, by the time she was six years old she was as tyrannical and selfish a little pig as ever lived.
              </p>
              <p>
                The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.
              </p>
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
                <a href="#" rel="prev"><span className="meta-nav">←</span> Thanks for watching!</a>
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

export default BlogSingle;