import React from "react";

function ShopSingle() {
  React.useEffect(() => {
    document.body.className = 'single single-product woocommerce woocommerce-page';

    return () => {
      document.body.className = 'home page page-template page-template-template-portfolio page-template-template-portfolio-php';
    }
  })

  return (
    <div id="primary" className="content-area column full">
      <main id="main" className="site-main" role="main">
        <div id="container">
          <div id="content" role="main">
            <nav className="woocommerce-breadcrumb" itemProp="breadcrumb"><a href="#">Home</a> / <a
              href="#">Clothing</a> / Beige Jacket</nav>
            <div itemScope itemType="http://schema.org/Product" className="product">
              <div className="images">
                <a href="" itemProp="image" className="woocommerce-main-image zoom" title="" data-rel="prettyPhoto">
                  <img
                    src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j10-520x780-520x600.jpg"
                    alt=""></img></a>
              </div>
              <div className="summary entry-summary">
                <h1 itemProp="name" className="product_title entry-title">Beige Jacket</h1>
                <div className="woocommerce-product-rating" itemProp="aggregateRating" itemScope
                  itemType="http://schema.org/AggregateRating">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                    className="fa fa-star"></i> <i className="fa fa-star"></i>
                  <a href="#reviews" className="woocommerce-review-link" rel="nofollow">(<span itemProp="reviewCount"
                    className="count">2</span> customer reviews)</a>
                </div>
                <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                  <p className="price">
                    <span className="amount">$35.00</span>
                  </p>
                  <meta itemProp="price" content="35" />
                  <meta itemProp="priceCurrency" content="USD" />
                  <link itemProp="availability" href="http://schema.org/InStock" />
                </div>
                <div itemProp="description">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
                <form className="cart" method="post" encType='multipart/form-data'>
                  <div className="quantity">
                    <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty"
                      className="input-text qty text" size="4" readOnly />
                  </div>
                  <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                </form>
                <div className="product_meta">
                  <span className="posted_in">Categories:
                    <a href="#" rel="tag">Clothing</a>,
                    <a href="#" rel="tag">Hoodies</a>
                  </span>
                </div>
              </div>

              <div className="woocommerce-tabs wc-tabs-wrapper">
                <div className="panel entry-content wc-tab" id="tab-description">
                  <h2>Product Description</h2>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
                <div className="panel entry-content wc-tab" id="tab-reviews">
                  <div id="reviews">
                    <div id="comments">
                      <h2>2 Reviews for Beige Jacket</h2>
                      <ol className="commentlist">
                        <li itemProp="review" itemScope itemType="http://schema.org/Review" className="comment">
                          <div id="comment-3" className="comment_container">
                            <img alt=''
                              src='http://0.gravatar.com/avatar/c7cab278a651f438795c2a9ebf02b5ae?s=60&#038;d=mm&#038;r=g'
                              srcSet='http://0.gravatar.com/avatar/c7cab278a651f438795c2a9ebf02b5ae?s=120&amp;d=mm&amp;r=g 2x'
                              className='avatar avatar-60 photo' height='60' width='60' />
                            <div className="comment-text">
                              <p className="meta">
                                <strong itemProp="author">Steve</strong> &ndash; <time itemProp="datePublished"
                                  dateTime="2013-06-07T15:54:25+00:00">June 7, 2013</time>:
                              </p>
                              <div itemProp="description" className="description">
                                <p>
                                  I like the logo but not the color.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li itemProp="review" itemScope itemType="http://schema.org/Review" className="comment">
                          <div id="comment-4" className="comment_container">
                            <img alt=''
                              src='http://2.gravatar.com/avatar/59c82b1d2c60537f900fb191b3cb611b?s=60&#038;d=mm&#038;r=g'
                              srcSet='http://2.gravatar.com/avatar/59c82b1d2c60537f900fb191b3cb611b?s=120&amp;d=mm&amp;r=g 2x'
                              className='avatar avatar-60 photo' height='60' width='60' />
                            <div className="comment-text">
                              <p className="meta">
                                <strong itemProp="author">Maria</strong> &ndash; <time itemProp="datePublished"
                                  dateTime="2013-06-07T15:54:25+00:00">June 7, 2013</time>:
                              </p>
                              <div itemProp="description" className="description">
                                <p>
                                  Three letters, one word: WOO!
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>

                      </ol>
                    </div>
                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" className="comment-respond">
                          <h3 style={{marginBottom:10}} id="reply-title" className="comment-reply-title">Add a review
                            <small><a rel="nofollow" id="cancel-comment-reply-link"
                              href="/demo-moschino/product/woo-logo-2/#respond" style={{display:'none'}}>Cancel
                              reply</a></small></h3>
                          <form action="#" method="post" id="commentform" className="comment-form" noValidate>
                            <p className="comment-form-rating">
                              <label htmlFor="rating">Your Rating</label>
                              <select name="rating" id="rating">
                                <option value="">Rate&hellip;</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very Poor</option>
                              </select>
                            </p>
                            <p className="comment-form-comment">
                              <label htmlFor="comment">Your Review</label><textarea id="comment" name="comment"
                                cols="45" rows="8" aria-required="true"></textarea>
                            </p>
                            <p className="comment-form-author">
                              <label htmlFor="author">Name <span className="required">*</span></label><input id="author"
                                name="author" type="text" value="" size="30" aria-required="true" readOnly/>
                            </p>
                            <p className="comment-form-email">
                              <label htmlFor="email">Email <span className="required">*</span></label><input id="email"
                                name="email" type="text" value="" size="30" aria-required="true" readOnly/>
                            </p>
                            <p className="form-submit">
                              <input name="submit" type="submit" id="submit" className="submit" value="Submit" /><input
                                type='hidden' name='comment_post_ID' value='60' id='comment_post_ID' readOnly/>
                            </p>
                          </form>
                        </div>

                      </div>
                    </div>
                    <div className="clear">
                    </div>
                  </div>
                </div>
              </div>
              <div className="related products">
                <h2>Related Products</h2>
                <ul className="products">
                  <li className="first product">
                    <a href="shop-single.html">
                      <span className="onsale">Sale!</span>
                      <img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j4-520x520.jpg"
                        alt=""></img>
                      <h3>Beige Fedora</h3>
                      <span className="price"><del><span className="amount">$35.00</span></del><ins><span
                        className="amount">&#36;14.00</span></ins></span>
                    </a>
                    <a href="#" className="button">Add to cart</a>
                  </li>

                  <li className="product">
                    <a href="shop-single.html">
                      <img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j6-520x779-520x600.jpg"
                        alt=""></img>
                      <h3>Male Jeans</h3>
                      <span className="price"><span className="amount">$35.00</span></span>
                    </a>
                    <a href="#" className="button">Add to cart</a>
                  </li>

                  <li className="product">
                    <a href="shop-single.html">
                      <img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j7-520x780-520x600.jpg"
                        alt=""></img>
                      <h3>Slim Jeans</h3>
                      <span className="price"><span className="amount">$20.00</span></span>
                    </a>
                    <a href="#" className="button">Add to cart</a>
                  </li>


                  <li className="product last">
                    <a href="shop-single.html">
                      <img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/10175658/j3-320x320.jpg"
                        alt=""></img>
                      <h3>Summer Blouse</h3>
                      <span className="price"><span className="amount">$35.00</span></span>
                    </a>
                    <a href="#" className="button">Add to cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default ShopSingle;