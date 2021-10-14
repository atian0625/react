import logo from './logo.svg';
import './css/component.css';
import './css/layout.css';

function App() {
  return (
  <div className="wrapper">
		<div className="bg"></div>
		<header className="header js-header">
			<div className="container">
				<div className="navbar navbar--collapse u-clearfix">
					
					<div className="nav navbar__nav">
						<a href="#popup-overlay" className="menu-toggle">
							<span></span>
							<span></span>
							<span></span>
						</a>
						<div id="popup-overlay" className="popup-menu">
							<div className="container">
								<div className="u-clearfix">
									<a href="#" className="popup-menu__close">
										<span></span>
										<span></span>
									</a>
								</div>
								<ul>
									<li><a href="#about" className="popup-menu__item">ABOUT</a></li>
									<li><a href="#work" className="popup-menu__item">SHOP</a></li>
									<li><a href="#contact" className="popup-menu__item">CONTACT</a></li>
								</ul>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</header>

		<section className="main">

			<div id="about" className="hero">
				<div className="container">
					<div className="hero__content">
						<h1 className="hero__heading">How you create<br/>The Life</h1>
						<a href="#" className="btn btn--primary btn--md">SHOP NOW</a>
					</div>
				</div>
			</div>

			<div className="quote">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-push-3">
							<div className="quote__content">
								
								<p className="quote__text">New Arrival</p>
								<div className="quote__name">Discover light formulas designed specifically for summer. Travel-friendly packaging makes it easy to take them wherever you go.</div>
							</div>
						</div>
					</div>			
				</div>
			</div>
			
			<div id="work" className="work">
				<div className="container">
					<h2 className="subtitle u-text-center">SHOP</h2>
					<div className="work-list">
						<div className="work-item">
							<div className="row">
								<div className="col-sm-6 col-sm-push-5">
									<div className="imgbox">
											<div className="imgbox__inner imgbox__inner--4-3">
												<div className="image image1"></div>
											</div>
								
									</div>
								</div>
								<div className="col-sm-4 col-sm-pull-5">
									<div className="work-item__text work-item__text--right">
										<h3 className="work-item__title work-item__title--right">COCO MADEMOISELLE</h3>
										<p className="work-item__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam reprehenderit perspiciatis minima unde rerum magnam, sit tenetur odio? Est!</p>
										<a href="#" className="text-btn text-btn--primary text-btn--lg"> add to cart</a>
									</div>
								</div>
							</div>
						</div>
						<div className="work-item">
							<div className="row">
								<div className="col-sm-6 col-sm-push-1">
									<div className="imgbox">
											<div className="imgbox__inner imgbox__inner--4-3">
												<div className="image image2"></div>
											</div>
									</div>
								</div>
								<div className="col-sm-4 col-sm-push-1">
									<div className="work-item__text">
										<h3 className="work-item__title work-item__title--left">COCO MADEMOISELLE</h3>
										<p className="work-item__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam reprehenderit perspiciatis minima unde rerum magnam, sit tenetur odio? Est!</p>
										<a href="#" className="text-btn text-btn--primary text-btn--lg"> add to cart</a>
									</div>
								</div>
							</div>
						</div>
						<div className="work-item">
							<div className="row">
								<div className="col-sm-6 col-sm-push-5">
									<div className="imgbox">
											<div className="imgbox__inner imgbox__inner--4-3">
												<div className="image image3"></div>
											</div>
								
									</div>
								</div>
								<div className="col-sm-4 col-sm-pull-5">
									<div className="work-item__text work-item__text--right">
										<h3 className="work-item__title work-item__title--right">COCO MADEMOISELLE</h3>
										<p className="work-item__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam reprehenderit perspiciatis minima unde rerum magnam, sit tenetur odio? Est!</p>
										<a href="#" className="text-btn text-btn--primary text-btn--lg"> add to cart</a>
									</div>
								</div>
							</div>
						</div>
						
						
						
					</div>
					<div className="btn-group btn-group--center">
						<a href="#" className="btn btn--secondary btn--md">SHOP MORE</a>
					</div>
				</div>
			</div>
		
			<div id="contact" className="contact">
				<div className="container">
					<div className="info">
						<div className="info__email ">
							<a href="mailTo:haha123@gmail.com">atain_hi@gmail.com</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	
		<footer className="footer">
			<div className="container">
				<p className="copyright">atain 2021 web</p>
			</div>
		</footer>


	</div>

  );
}

export default App;
