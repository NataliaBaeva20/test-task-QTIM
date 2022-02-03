import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getPosts, getPost } from '../utils/api'

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Blog from './Blog';
import Elements from './Elements';
import Contact from './Contact';
import PortfolioItem from './pages/PortfolioItem';
import PortfolioCategory from './pages/PortfolioCategory';
import ShopSingle from './pages/ShopSingle';
import BlogSingle from './pages/BlogSingle';
import DetailedBlog from './DetailedBlog';


function App() {
  const [posts, setPosts] = React.useState([]);
  const [detailedPost, setDetailedPost] = React.useState(JSON.parse(localStorage.getItem('detailedPost')));

  if (!detailedPost) {
    localStorage.setItem('detailedPost', JSON.stringify({ id: '', createdAt: '', title: '', preview: '', image: '', description: '' }));
    setDetailedPost(JSON.parse(localStorage.getItem('detailedPost')));
  }

  function handlePostClick(postId) {
    if (postId !== undefined) {
      getPost(postId)
        .then(data => {
          localStorage.setItem('detailedPost', JSON.stringify(data));
          setDetailedPost(JSON.parse(localStorage.getItem('detailedPost')));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    getPosts()
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="container">
        <Header />
        <div id="content" className="site-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/blog" >
              <Blog posts={posts} onPostClick={handlePostClick} />
            </Route>
            <Route path="/detailed-blog">
              <DetailedBlog post={detailedPost} />
            </Route>
            <Route path="/elements">
              <Elements />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/portfolio-item">
              <PortfolioItem />
            </Route>
            <Route path="/portfolio-category">
              <PortfolioCategory />
            </Route>
            <Route path="/shop-single">
              <ShopSingle />
            </Route>
            <Route path="/blog-single">
              <BlogSingle />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
      <a href="#top" className="smoothup" title="Back to top"><span className="genericon genericon-collapse"></span></a>
    </div>
  );
}

export default App;
