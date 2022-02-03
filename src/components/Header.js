import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header id="masthead" className="site-header">
			<div className="site-branding">
				<h1 className="site-title"><a href="index.html" rel="home">Moschino</a></h1>
				<h2 className="site-description">Minimalist Portfolio HTML Template</h2>
			</div>
			<nav id="site-navigation" className="main-navigation">
			<button className="menu-toggle">Menu</button>
			<a className="skip-link screen-reader-text" href="#content">Skip to content</a>
			<div className="menu-menu-1-container">
				<ul id="menu-menu-1" className="menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/shop">Shop</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/elements">Elements</Link></li>
					<li><a href="#">Pages</a>
					<ul className="sub-menu">
						<li><Link to="/portfolio-item">Portfolio Item</Link></li>
						<li><Link to="/blog-single">Blog Article</Link></li>
						<li><Link to="/shop-single">Shop Item</Link></li>
						<li><Link to="/portfolio-category">Portfolio Category</Link></li>
					</ul>
					</li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
			</nav>
		</header>
  );
}

export default Header;