import React from 'react';
import '../styles/base/_settings.css';
import '../styles/components/_about.css';
import backgroundImage from '../images/background-images.jpg';

const About = ()=>  {
    return (
        <div className="about-main">
            <div className="about-area area-top-padding"> 
                <div className="container">
                    <div className="section-title">
                        <h2>ABOUT ME</h2>
                        <div class="progress">
                            <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img alt="About" src={backgroundImage}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content"></div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="services-area area-top-padding">  
                <div className="container">
                    <div className="section-title">
                        <h2>SERVICES</h2>
                        <div class="progress">
                            <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews-area area-top-padding">  
                <div className="container">
                    <div className="section-title">
                        <h2>REVIEWS</h2>
                        <div class="progress">
                            <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;