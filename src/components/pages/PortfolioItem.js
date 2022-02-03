function PortfolioItem() {
  return (
    <>
      <div id="primary" className="content-area column two-thirds single-portfolio">
        <main id="main" className="site-main">

          <article className="portfolio hentry">
            <header className="entry-header">
              <div className="entry-thumbnail">
                <img width="800" height="533" src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30162427/p1.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
              </div>
              <h1 className="entry-title">Sunset Beach</h1>
              <a className='portfoliotype' href='portfolio-category.html'>summer</a>
              <a className='portfoliotype' href='portfolio-category.html'>woman</a>
              <a className='portfoliotype' href='portfolio-category.html'>yellow</a>
            </header>
            <div className="entry-content">
              <p>
                Beautiful young woman in a green dress with curly long hair.
              </p>
              <p>
                There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning.
              </p>
              <blockquote>
                <p>
                  I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.
                </p>
              </blockquote>
              <p>
                The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy.
              </p>
            </div>
          </article>

          <nav className="navigation post-navigation" role="navigation">
            <h1 className="screen-reader-text">Post navigation</h1>
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" rel="prev"> <span className="meta-nav">←</span> Eliza and John</a>
              </div>
              <div className="nav-next">
                <a href="#" rel="next">Sunset Beach <span className="meta-nav">→</span></a>
              </div>
            </div>
          </nav>


        </main>

      </div>


      <div id="secondary" className="column third">
        <div className="widget-area">
          <aside className="widget">
            <h4 className="widget-title">Request similar project</h4>
            <form className="wpcf7" method="post" action="contact.php" id="contactform">
              <div className="form">
                <p><input type="text" name="name" placeholder="Name *" /></p>
                <p><input type="text" name="email" placeholder="E-mail Address *" /></p>
                <p><textarea name="comment" rows="3" placeholder="Message *"></textarea></p>
                <input type="submit" id="submit" className="clearfix btn" value="Send" />
              </div>
            </form>
            <div className="done">
              Your message has been sent. Thank you!
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;