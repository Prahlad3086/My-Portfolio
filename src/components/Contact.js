import React from 'react';
import '../styles/components/_contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

const Contact = ()=>  {
    return (
        <div className="contact-main area-top-padding pb-section">
            <div className="container">
                <div className="section-title">
                    <h2>CONTACT ME</h2>
                    <div class="progress progress-title">
                        <div class="progress-bar progress-bar-1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-formwrapper">
                            <h4>Get in Touch</h4>
                            <form className="contact-form">
                                <div className="form-field">
                                    <legend htmlFor="contact-form-name" className="form-field-name">Enter your name*</legend>
                                    <input type="text" name="name" id="contact-form-name" />
                                </div>
                                <div className="form-field">
                                    <legend htmlFor="contact-form-email" className="form-field-name">Enter your email*</legend>
                                    <input type="text" name="email" id="contact-form-email" />
                                </div>
                                <div className="form-field">
                                    <legend htmlFor="contact-form-subject" className="form-field-name">Enter your subject*</legend>
                                    <input type="text" name="subject" id="contact-form-subject" />
                                </div>
                                <div className="form-field">
                                    <legend className="form-field-name">Enter your message*</legend>
                                    <textarea name="message" id="contact-form-message" cols="30" rows="6" />
                                </div>
                                <div className="form-field">
                                    <button type="submit" className="send-button">SEND MAIL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-info">
                            <div className="contact-info-block mt-30">
                                <span className="contact-info-block-icon"><FaPhoneAlt /></span>
                                <div className="contact-info-block-content">
                                    <h6>Phone</h6>
                                    <p>+91-7004293401</p>
                                </div>
                            </div>
                            <div className="contact-info-block mt-30">
                                <span className="contact-info-block-icon"><IoMdMail /></span>
                                <div className="contact-info-block-content">
                                    <h6>Email</h6>
                                    <p><a className="mail" href="mailto:kprahalad25@gmail.com">kprahalad25@gmail.com</a></p>
                                    <p className="mail-2"><a className="mail" href="mailto:prahlad_11913086@nitkkr.ac.in">prahlad_11913086@nitkkr.ac.in</a></p>
                                </div>
                            </div>
                            <div className="contact-info-block mt-30">
                                <span className="contact-info-block-icon"><FaHome /></span>
                                <div className="contact-info-block-content">
                                    <h6>Address</h6>
                                    <p>Satgama, Jamui , Bihar 811307, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;