import React from 'react';
import '../styles/components/_portfolio.css';
import image1 from '../images/portfolio-1.png';
import image2 from '../images/portfolio-2.png';
import image3 from '../images/portfolio-3.png';
import image4 from '../images/portfolio-4.png';
import image5 from '../images/portfolio-5.png';

const Portfolios = ()=>  {
    return (
        <div className="portfolio-main area-top-padding pb-section">
            <div className="container">
                <div className="section-title">
                    <h2>PORTFOLIOS</h2>
                    <div class="progress progress-title">
                        <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="portfolios-wrapper">
                        <div className="row mt-30 reverse">
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="portfolio">
                                    <div className="portfolio-image">
                                        <img src={image1} alt="PortfolioImage"></img>
                                    </div>
                                    <h5>
                                        <a rel="noopener noreferrer" target="_blank" href="https://corona-web-clone.herokuapp.com/">Covid-19 Stats Tracker</a>
                                    </h5>
                                    <h6>Hello World</h6>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="portfolio">
                                    <div className="portfolio-image">
                                        <img src={image2} alt="PortfolioImage"></img>
                                    </div>
                                    <h5>
                                        <a rel="noopener noreferrer" target="_blank" href="https://prahlad-node-chat-app.herokuapp.com/">Chat App</a>
                                    </h5>
                                    <h6>Hello World</h6>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="portfolio">
                                    <div className="portfolio-image">
                                        <img src={image3} alt="PortfolioImage"></img>
                                    </div>
                                    <h5>
                                        <a rel="noopener noreferrer" target="_blank" href="https://prahlad-weather-application.herokuapp.com/">Weather App</a>
                                    </h5>
                                    <h6>Hello World</h6>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="portfolio">
                                    <div className="portfolio-image">
                                        <img src={image4} alt="PortfolioImage"></img>
                                    </div>
                                    <h5>
                                        <a rel="noopener noreferrer" target="_blank" href="https://prahlad3086.github.io/analog-clock.github.io/">Analog Clock</a>
                                    </h5>
                                    <h6>Hello World</h6>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="portfolio">
                                    <div className="portfolio-image">
                                        <img src={image5} alt="PortfolioImage"></img>
                                    </div>
                                    <h5>
                                        <a rel="noopener noreferrer" target="_blank" href="https://prahlad3086.github.io/calculator.github.io/">Calculator</a>
                                    </h5>
                                    <h6>Hello World</h6>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolios;