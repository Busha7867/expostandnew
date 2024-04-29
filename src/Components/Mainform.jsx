
'use client';
import React from "react";
import { Component } from "react";
import axios from "axios";
import Link from "next/link";
import '@/Components/Mainform.css';
import '@/app/navbar.css'
import { FaUser,FaBuilding,FaMobileAlt,FaStoreAlt,FaCity    } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";





class Mainform extends Component {



    constructor(props) {
      super(props);
      this.state = {
        name: '',
        company: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
        files: [],
        NameValidationMessage: '',
        PhoneValidationMessage: '',
        EmailValidationMessage: '',
        BudgetValidationMessage: '',
        captchaNum1: 0,
        captchaNum2: 0,
        captchaAnswer: 0,
        userAnswer: '',
        CaptchaValidationMessage: '',
  
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFileChange2 = this.handleFileChange2.bind(this);
    }
  
  
    componentDidMount() {
  
  
      this.generateCaptcha();
    }
    generateCaptcha() {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      const answer = num1 + num2;
  
      this.setState({
        captchaNum1: num1,
        captchaNum2: num2,
        captchaAnswer: answer,
        userAnswer: '',
      });
    }
  
    handleChange(event) {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
  
      if (name === 'captcha') {
        this.setState({ userAnswer: value });
      }
    }
  
    handleFileChange2(event) {
      this.setState({ files: event.target.files });
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
  
      const { name, company, email, phone, exhibition, city, dimension, budget, message, files } = this.state;
  
      if (name.length == 0) {
        this.setNameValidationMessage('Name cannot be empty');
        return;
      }
      if (email.length == 0) {
        this.setEmailValidationMessage('Email cannot be empty');
        return;
      }
      if (phone.length == 0) {
        this.setPhoneValidationMessage('Phone number cannot be empty');
        return;
      }
      if (isNaN(phone) || phone.includes('.') || phone.includes('e')) {
        this.setPhoneValidationMessage('Phone number can only contain digits');
        return;
      }
    
  
      if (parseInt(this.state.userAnswer, 10) !== this.state.captchaAnswer) {
        this.setCaptchaValidationMessage('Incorrect answer. Please try again.');
        return;
      }
  
      let fformData = new FormData();
      fformData.append('name', name);
      fformData.append('company', company);
      fformData.append('email', email);
      fformData.append('phone', phone);
      fformData.append('exhibition', exhibition);
      fformData.append('city', city);
      fformData.append('dimension', dimension);
      fformData.append('budget', budget);
      fformData.append('message', message);
      fformData.append('pageurl', window.location.href);
  
      
     
  
  
  
      for (let i = 0; i < files.length; i++) {
        fformData.append('files[]', files[i]);
      }
  
      this.setNameValidationMessage('');
      this.setPhoneValidationMessage('');
      this.setEmailValidationMessage('');
      this.setBudgetValidationMessage('');
      this.setCaptchaValidationMessage('');
  
      axios.post('https://react.expostandservice.com/maildemo/FooterEmail.php', fformData)
        .then(response => {
          alert('Email Sent Successfully!');
          window.location.href = 'https://react.expostandservice.com/';
        })
        .catch(error => {
          alert('Error Sending Email!');
          window.location.href = 'https://react.expostandservice.com/';
        });
  
  
    }
    setNameValidationMessage(message) {
      this.setState({ NameValidationMessage: message });
    }
    setPhoneValidationMessage(message) {
      this.setState({ PhoneValidationMessage: message });
    }
    setEmailValidationMessage(message) {
      this.setState({ EmailValidationMessage: message });
    }
    setBudgetValidationMessage(message) {
      this.setState({ BudgetValidationMessage: message });
    }
    setCaptchaValidationMessage(message) {
      this.setState({ CaptchaValidationMessage: message });
    }
  
    render() {
      return (
        <div className="form-1">
          <div className="container form-box">
            <div className="row">
              <div className="col-6 contact_col col-m-12 col-t-12 ">
                <div className="form-para">
  
                  <p className='formContact_para'>Contact Us For Free</p>
                  <p className='threeD_para'>3D DESIGN AND QUOTE</p>
  
  
                  <ul className='form-item'>
                    <li className='form-lists'><a href="tel:+48-616255500"><i class="fa-solid fa-phone form_icon"></i>+48-616255500</a></li>
  
                    <li className='form-lists'><a href="mailto: enquiry@expostandservice.com "><i class="fas fa-envelope form_icon "></i>enquiry@expostandservice.com</a></li>
                    <li className='form-lists'><Link href="/contact-us"><i class="fab fa-wpforms form_icon"></i>Submit Enquiry Form</Link> </li>
  
                  </ul>
                </div>
  
  
              </div>
              <div className="col-6 col-m-12 col-t-12">
  
                <div className="register">
                  <form id='form' className='flex flex-col' onSubmit={this.handleSubmit}   >
  
  
                    <div className="user-details">
  
                      <div className="input-box">
                      <FaUser className="icon_form"/>
  
  
                        <input type="text" id="name" name="name" onChange={this.handleChange} placeholder="Contact Name" />
                        <div style={{ color: 'red' }}>{this.state.NameValidationMessage}</div>
  
  
                      </div>
  
  
                      <div className="input-box">

                       <FaBuilding className="icon_form"/>
  
  
                        <input type="text" id="company" name="company" onChange={this.handleChange} placeholder="Company Name" />
                      </div>
  
  
                      <div className="input-box">
                          <IoIosMailOpen className="icon_form"/>
                        <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="Email Address" />
                        <div style={{ color: 'red' }}>{this.state.EmailValidationMessage}</div>
                      </div>
  
  
                      <div className="input-box">
                      <FaMobileAlt className="icon_form"/>
  
                        <input type="phone" id="phone" name="phone" onChange={this.handleChange} placeholder="Phone Number" />
                        <div style={{ color: 'red' }}>{this.state.PhoneValidationMessage}</div>
                      </div>
  
  
                      <div className="input-box">
                      <FaStoreAlt className="icon_form"/>
  
  
                        <input type="phone" id="exhibition" name="exhibition" onChange={this.handleChange} placeholder="Exhibition Name" />
                      </div>
  
  
                      <div className="input-box">
                      <FaCity className="icon_form"/>
  
  
                        <input type="text" id="city" name="city" onChange={this.handleChange} placeholder="Exhibition City" />
                      </div>
  
  
                      <div className="input-box">
                      <TbDimensions className="icon_form"/>
  
  
                        <input type="text" id="dimension" name="dimension" onChange={this.handleChange} placeholder="Stand Dimension & Area" />
                      </div>
  
                      <label>
                        <div className='input-box'>
                        <FaHandHoldingDollar className="icon_form"/>
  
                          <input type="text" id="budget" name="budget" onChange={this.handleChange} placeholder="Stand Budget" />
                          <div style={{ color: 'red' }}>{this.state.BudgetValidationMessage}</div>
                        </div>
                      </label>
  
                      {/* <label htmlFor="files" className="custom-file-upload"> <i class="fas fa-file-import"></i>Browser</label> */}
  
  
  
                      <input type="file" id="files" name="files[]" className='form_fil' multiple onChange={this.handleFileChange2} />
  
  
  
                      <textarea id="message" name="message" onChange={this.handleChange} placeholder="Message" rows="3" cols="4" />
                      {/* <textarea class="textarea" placeholder="e.g. Hello world"></textarea> */}
  
  
                    </div>
                    <div className="user-details">
                      <div className='captcha-box'>
                        <label htmlFor="captcha">
                          {this.state.captchaNum1} + {this.state.captchaNum2} = ?
                        </label>
                        <input
                          type="text"
                          id="captcha"
                          name="captcha"
                          value={this.state.userAnswer}
                          onChange={this.handleChange}
                          placeholder="Enter the sum"
                        />
                        <div style={{ color: 'red' }}>{this.state.CaptchaValidationMessage}</div>
                      </div>
  
  
  
                      <button type='submit' className='from_sendbtn'>Send</button>
                    </div>
  
                  </form>
                </div>
  
  
              </div>
  
            </div>
          </div>
  
        </div>
  
      )
    }
  }
  
  export default Mainform;
  