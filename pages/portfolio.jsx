import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      	Incididunt in cillum magna occaecat nisi qui in.
			      </p>

			      <div className="portfolio-wrapper">
				  <div className="portfolio-item">
			      		<img src="/1.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/2.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/3.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/4.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/5.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/6.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/7.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/8.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/9.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/10.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/11.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/12.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/13.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/14.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/15.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/16.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Chat App Exploration</h4>
			      		<div className="portfolio-category">Mobile Dev</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;