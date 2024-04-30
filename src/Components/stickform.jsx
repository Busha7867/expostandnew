import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import '@/app/germany.css';
import Link from 'next/link';
import '@/app/Arrounworld.css';
import '@/app/form.css';






class Stickform extends Component {


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
            NameValidationMessage:'',
            PhoneValidationMessage:'',
            EmailValidationMessage:'',
            BudgetValidationMessage:'',
            captchaNum1: 0,
            captchaNum2: 0,
            captchaAnswer:0,
            userAnswer: '',
            CaptchaValidationMessage: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
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

    handleFileChange(event) {
        this.setState({ files: event.target.files });
    }

    handleSubmit(event) {
        event.preventDefault();


        const { name, company, email, phone, exhibition, city, dimension, budget, message, files } = this.state;

        if(name.length==0){
            this.setNameValidationMessage('Name cannot be empty');
            return;
        }
        if(email.length==0){
            this.setEmailValidationMessage('Email cannot be empty');
            return;
        }
        if(phone.length==0){
            this.setPhoneValidationMessage('Phone number cannot be empty');
            return;
        }
        if(isNaN(phone)||phone.includes('.')||phone.includes('e')){
            this.setPhoneValidationMessage('Phone number can only contain digits');
            return;
        }
               
        if(budget.length==0){
            this.setBudgetValidationMessage('Budget cannot be empty');
            return;
        }if(isNaN(budget)||budget.includes('.')||budget.includes('e')){
            this.setBudgetValidationMessage('Budget can only contain digits');
            return;
        }
        if (parseInt(this.state.userAnswer, 10) !== this.state.captchaAnswer) {
            this.setCaptchaValidationMessage('Incorrect answer. Please try again.');
            return;
        }

        let formData = new FormData();
        formData.append('name', name);
        formData.append('company', company);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('exhibition', exhibition);
        formData.append('city', city);
        formData.append('dimension', dimension);
        formData.append('budget', budget);
        formData.append('message', message);
        formData.append('pageurl', window.location.href);

        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }
        this.setNameValidationMessage('');
        this.setPhoneValidationMessage('');
        this.setEmailValidationMessage('');
        this.setBudgetValidationMessage('');
        this.setCaptchaValidationMessage('');

        axios.post('https://react.expostandservice.com/maildemo/ReactMail.php', formData)
            .then(response => {
                alert('Email sent successfully!');
                window.location.href = 'https://react.expostandservice.com/';
            })
            .catch(error => {
                alert('Error sending email !');
               window.location.href = 'https://react.expostandservice.com/';
            });

    }
    
    setNameValidationMessage(message){
        this.setState({NameValidationMessage:message});
    }
    setPhoneValidationMessage(message){
        this.setState({PhoneValidationMessage:message});
    }
    setEmailValidationMessage(message){
        this.setState({EmailValidationMessage:message});
    }
    setBudgetValidationMessage(message){
        this.setState({BudgetValidationMessage:message});
    }
    setCaptchaValidationMessage(message){
        this.setState({CaptchaValidationMessage:message});
    }
    



    render() {
        return (

            <div id="stickbox" className=" germanregister">
                    <span style={{color:"#fff",fontSize:"25px", margin:"10px 0"}}>CONTACT US</span>


                <form id='form germanform' className='flex flex-col' onSubmit={this.handleSubmit} >


                    <div className=" sideform">

                        <div className="input-box ginput">
                            <i className='fa fa-user  icon'></i>

                            <input type="text" id="name" name="name" onChange={this.handleChange} placeholder="Contact Name"

                            />
                            <div style={{ color: 'red' }}>{this.state.NameValidationMessage}</div>


                        </div>


                        <div className="input-box ginput">
                            <i class="far fa-building icon"></i>

                            <input type="text" id="company" name="company" onChange={this.handleChange} placeholder="Company Name" />
                        </div>


                        <div className="input-box ginput">
                            <i className="fas fa-envelope-open-text icon"></i>
                            <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="Email Address" />
                            <div style={{ color: 'red' }}>{this.state.EmailValidationMessage}</div>
                        </div>


                        <div className="input-box ginput">
                            <i className="fas fa-mobile-alt icon"></i>

                            <input type="phone" id="phone" name="phone" onChange={this.handleChange} placeholder="Phone Number" />
                            <div style={{ color: 'red' }}>{this.state.PhoneValidationMessage}</div>
                        </div>


                        <div className="input-box ginput">
                            <i class="fas fa-store-alt icon"></i>

                            <input type="phone" id="exhibition" name="exhibition" onChange={this.handleChange} placeholder="Exhibition Name" />
                        </div>


                        <div className="input-box ginput">
                            <i class="fas fa-city icon  "></i>

                            <input type="text" id="city" name="city" onChange={this.handleChange} placeholder="Exhibition City" />
                        </div>


                        <div className="input-box ginput">
                            <i class="fas fa-share-alt icon"></i>

                            <input type="text" id="dimension" name="dimension" onChange={this.handleChange} placeholder="Stand Dimension & Area" />
                        </div>

                     
                            <div className="input-box ginput">

                                <i class="fas fa-hand-holding-usd icon"></i>
                                <input type="text" id="budget" name="budget" onChange={this.handleChange} placeholder="Stand Budget" />
                                <div style={{ color: 'red' }}>{this.state.BudgetValidationMessage}</div>

                            </div>
             


                        {/* <label htmlFor="files" className="custom-file-up
                        
                        
                        load"> <i class="fas fa-file-import"></i>Browser</label> */}
                        <input type="file" id="files" name="files[]" multiple onChange={this.handleFileChange} />
                        <br />
                        <br />
                     


                        <textarea id="message" name="message" onChange={this.handleChange} placeholder="Message"  cols="30" rows="4" />



                        {/* <Captcha2 /> */}
                        <br />



                    <div className='captcha-box'>
                    <label htmlFor="captcha" style={{color:"#fff"}}>
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
                    



                    </div>

                    



                        <button type='submit' className='from_sendbtn Stickbtn'>Send</button>
                </form>
            </div>



        );
    }
}

export default Stickform;
