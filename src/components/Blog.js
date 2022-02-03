import Secondary from './Secondary';
import PaginatedItems from './PaginatedItems';

function Blog({ posts, onPostClick }) {
  return (
    <>
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          {posts.length > 0 && <PaginatedItems itemsPerPage={8} posts={posts} onPostClick={onPostClick} />}
          <div className="clearfix">
          </div>
        </main>
      </div>
      <Secondary />
    </>
  );
}

export default Blog;