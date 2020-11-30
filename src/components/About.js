import React from 'react';
import '../styles/components/_about.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background-images.jpg';
import { IoIosColorPalette } from 'react-icons/io';
import { AiOutlineMobile } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';

const About = ()=>  {
    return (
        <div className="about-main pb-section">
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
                        <div className="col-xl-6">
                            <div className="about-image">
                                <img className="about-image" alt="About" src={backgroundImage}/>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-content contents">
                                <h3>I am <span className="color-theme">Prahlad Kumar</span></h3>
                                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more &amp; more interactive with web animations.</p>
                                <ul>
                                    <li><b>Full Name</b> : Prahlad Kumar</li>
                                    <li><b>Age</b> : 20 Years</li>
                                    <li><b>Nationality</b> : Indian</li>
                                    <li><b>Languages</b> : English, Hindi</li>
                                    <li><b>Address</b> : Jamui(811307), Bihar, India</li>
                                    <li><b>Freelance</b> : Available</li>
                                </ul>
                                <Link className="button btn" to="/files/empty.pdf">Download CV</Link>
                            </div>
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
                    <div className="service-wrapper">
                        <div className="row mt-30 reverse">
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="service">
                                    <span className="service-icon"><IoIosColorPalette /></span>
                                    <div className="service-icon-bottom"></div>
                                    <h5>Web Design</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="service">
                                    <span className="service-icon"><RiCodeSSlashLine /></span>
                                    <div className="service-icon-bottom"></div>
                                    <h5>Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
                                <div className="service">
                                    <span className="service-icon"><AiOutlineMobile /></span>
                                    <div className="service-icon-bottom"></div>
                                    <h5>Mobile Application</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                                </div>
                            </div>
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
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;