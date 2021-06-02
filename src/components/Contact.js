import React from 'react';
import '../styles/components/_contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// const Contact = ()=>  {
class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onSubjectChange(event){
        this.setState({subject: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    sendMessage(event) {
        event.preventDefault();
        console.log('The function is called');
        emailjs.sendForm('service_xxudskg', 'template_7t0573a', '#contact-form', 'user_CrfW62aLf8lQ0LcVLFoId')
            .then((result) => {
                alert(result.text, 'Email sent successfully');
            }, (error) => {
                alert(error.text, 'There is a problem please try again');
            });
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    } 

    render(){
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
                                <form className="contact-form" id="contact-form">
                                    <div className="form-field">
                                        <legend htmlFor="contact-form-name" className="form-field-name">Enter your name*</legend>
                                        <input type="text" name="user_name" value={this.state.name} onChange={this.onNameChange} id="contact-form-name" />
                                    </div>
                                    <div className="form-field">
                                        <legend htmlFor="contact-form-email" className="form-field-name">Enter your email*</legend>
                                        <input type="email" name="user_email" value={this.state.email} onChange={this.onEmailChange} id="contact-form-email" />
                                    </div>
                                    <div className="form-field">
                                        <legend htmlFor="contact-form-subject" className="form-field-name">Enter your subject*</legend>
                                        <input type="text" name="user_subject" value={this.state.subject} onChange={this.onSubjectChange} id="contact-form-subject" />
                                    </div>
                                    <div className="form-field">
                                        <legend className="form-field-name">Enter your message*</legend>
                                        <textarea name="user_message" value={this.state.message} onChange={this.onMessageChange} id="contact-form-message" cols="30" rows="6" />
                                    </div>
                                    <div className="form-field">
                                        <button type="submit" onClick={this.sendMessage} className="send-button">SEND MAIL</button>
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
}

export default Contact;