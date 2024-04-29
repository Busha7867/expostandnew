'use client';

import React from 'react'

import Image from 'next/image';
import Max from '@/Components/flags/maxbill.jpg';
import Paul from '@/Components/flags/LSV.webp';
import Logo1 from '@/Components/Logoslider/img3.png';
import Logo2 from '@/Components/Logoslider/img4.png';
import Logo3 from '@/Components/Logoslider/img2.png';
import Logo4 from '@/Components/Logoslider/img1.png';
import Logo5 from '@/Components/Logoslider/img6.png';
import Bigimage from '@/Components/Portimage/Custom/Custom51.jpg';
import '@/app/innerpages.css';





import { IoStarSharp, IoStarHalf } from "react-icons/io5";
import Testimonial from '@/Components/Testimonial';

const page = () => {
    return (
        <div>
           


            <div className="testimonial_1">
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-m-12 col-t-7 col-d-7">
                            <div className="mainclient_content">
                                <span style={{ fontSize: "40px", color: "#A8cf45" }}>Feedback ?</span>
                                <p>The greatest are already with us, <br />Lets get together?</p>
                            </div>
                            <div className="testimonial">
                                <div className="onetestimonial">
                                    <Image src={Max} alt="client image" className="testiimage" />
                                    <div className="flex1">
                                        <span>Maxbill</span>
                                        <p>Happy Client </p>

                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarHalf className='star' />
                                    </div>
                                </div>
                                <div className="twotestimonial">
                                    <Image src={Paul} alt="client image" className="testiimage" />
                                    <div className="flex1">
                                        <span>Paula</span>
                                        <p>Happy Client</p>

                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarSharp className='star' />
                                        <IoStarHalf className='star' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-m-12 col-t-5 col-d-5">
                            <div className="clientlogo">

                                <Image src={Logo1} alt="client exhibition stand logo" className="client_logo1" />

                                <Image src={Logo2} alt="client exhibition stand logo" className="client_logo2" />
                                <Image src={Logo3} alt="client exhibition stand logo" className="client_logo3" />
                                <Image src={Logo5} alt="client exhibition stand logo" className="client_logo4" />
                                <Image src={Logo4} alt="client exhibition stand logo" className="client_logo5" />

                            </div>
                            <Image src={Bigimage} alt="client exhibition stand logo" className="big_image" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial_2">
                <div className="container">

                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-d-12">
                            <h1 className="test_heading">Client Testimonials</h1>
                        </div>
                        <div className="col-4"></div>
                    </div>
                  <Testimonial/>
                </div>
            </div>
       
        </div>

    )
}

export default page