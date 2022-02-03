import React from 'react';

function Shop() {
  const [value, setValue] = React.useState('menu_order');

  React.useEffect(() => {
    document.body.className = 'archive post-type-archive post-type-archive-product woocommerce woocommerce-page';
    return () => {
      document.body.className = 'home page page-template page-template-template-portfolio page-template-template-portfolio-php';
    }
  });

  function handleChange(event) {
    setValue(event.target.value);
  }
  
  return (
    <div id="primary" className="content-area column full">
      <main id="main" className="site-main" role="main">
        <p className="woocommerce-result-count">
          Showing 1–8 of 12 results
        </p>
        <form className="woocommerce-ordering" method="get">
          <select value={value} onChange={handleChange} name="orderby" className="orderby">
            <option value="menu_order">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </form>
        <ul className="products">

          <li className="first product">
            <a href="shop-single.html">
              <span className="onsale">Sale!</span>
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j4-520x520.jpg" alt="" />
              <h3>Cool Fedora</h3>
              <span className="price"><span className="amount">$34.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j10-520x780-520x600.jpg" alt="" />
              <h3>Beige Blouse</h3>
              <span className="price"><span className="amount">$66.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j1-520x780-520x600.jpg" alt="" />
              <h3>Black Jacket</h3>
              <span className="price"><span className="amount">$125.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="last product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j9-520x780-520x600.jpg" alt="" />
              <h3>Brown Jacket</h3>
              <span className="price"><span className="amount">$28.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="first product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j12-520x668-520x600.jpg" alt="" />
              <h3>Gray Blouse</h3>
              <span className="price"><span className="amount">$15.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/f11-520x755-520x600.jpg" alt="" />
              <h3>Male Bag</h3>
              <span className="price"><span className="amount">$16.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j6-520x779-520x600.jpg" alt="" />
              <h3>Hugo Jeans</h3>
              <span className="price"><span className="amount">$36.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

          <li className="last product">
            <a href="shop-single.html">
              <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j2-520x780-520x600.jpg" alt="" />
              <h3>Male T-Shirt</h3>
              <span className="price"><span className="amount">$49.00</span></span>
            </a><a href="#" className="button">Add to cart</a>
          </li>

        </ul>
        <nav className="woocommerce-pagination">
          <ul className="page-numbers">
            <li><span className="page-numbers current">1</span></li>
            <li><a className="page-numbers" href="#">2</a></li>
            <li><a className="next page-numbers" href="#">→</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Shop;