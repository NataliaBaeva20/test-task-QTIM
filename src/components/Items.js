import Article from './Article';

function Items({ currentItems, onClick }) {
  return (
    <>
      {
        currentItems &&
        currentItems.map((item) => (
          <Article
            key={item.id}
            postId={item.id}
            createdAt={item.createdAt}
            title={item.title}
            preview={item.preview}
            image={item.image}
            description={item.description}
            onPostClick={onClick}
          />
        ))
      }
    </>
  );
}

export default Items;