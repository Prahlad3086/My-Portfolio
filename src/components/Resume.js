import React from 'react';
import '../styles/components/_resume.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';   

const Resume = ()=>  {
    return (
        <div className="resume-main pb-section">
            <div className="skills-area area-top-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>MY SKILLS</h2>
                        <div class="progress progress-title">
                            <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="my-skills">
                        <div className="row mt-30-reverse">
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">HTML5</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">95%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 html5" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">CSS3</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">90%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 css3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">Javascript</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">75%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 javascript" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">jQuery</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">80%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 jquery" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">ReactJS</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">85%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 reactjs" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">
                                <div className="skill-progress-bar">
                                    <h6 className="progress-bar-title">Photoshop</h6>
                                    <div className="progress-measure">
                                        <span className="percentage">65%</span>
                                        <div class="progress-measure-percentage">
                                            <div class="progress-bar progress-bar-1 photoshop" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-area area-top-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>RESUME</h2>
                        <div class="progress progress-title">
                            <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="small-title mt-50">
                        <span><BsFillBriefcaseFill /></span>
                        <h4>Working Experience</h4>
                    </div>
                    <div className="resume-wrapper">
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-title usergraduate mt-50">
                        <span><FaUserGraduate /></span>
                        <h4>Educational Qualifications</h4>
                    </div>
                    <div className="resume-wrapper">
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                        <div className="resume-data mt-30">
                            <div className="resume-summary">
                                <h6 className="resume-year">2019 - Present</h6>
                            </div>
                            <div className="resume-details">
                                <h5>Frontend Web Developer</h5>
                                <h6>ABC Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;