'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Graphicimage from '@/Components/Images/Graphic.webp';
import Stickform from "@/Components/stickform";





export default function Graphic() {
    const [show, toggleShow] = useState(false);

   

    return (
        <div className="graphic_section">
           
            <div className="graphic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="graphic_imagebox">
                                <Image src={Graphicimage} alt="graphic" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12">
                            <p className="graphic_heading" style={{color:"#A8cf45",fontSize:"41px"}}> Graphics Production </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="graphic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h1 className="graphic_heading2">Exclusive Exhibition Stand Graphics Production</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">


                            <p className="intro-para3 germanpara">Exhibition graphics make exhibition stand more expressive. So, we have an expert in place to handle and oversee exhibition stand graphics production for your booth. We offer state-of the art exhibition stands to our customers and to further add value to the look of the stand we design enticing graphics as well. We use the advanced dye sublimation printing technology to make sure that the quality of graphics are on par with the designing standards of your exhibition stand.

                            </p>
                            <div className="animation_border">

                                <p className="graphicpara"> At our modern printing workshop, we have the facility of printing large format prints so that your exhibition stand graphics are uniquely merged with the booth design for the seamless experience. Dye-sublimation printing technology makes us capable to print on various forms of media. It also ensures that your artwork is printed in high resolution and the colors are appealing and eye catching. We print graphics that can be utilized for the longer time, with the use of permanent colors, we create weather-resistant and dust resistant exhibition graphics, which ensures our exhibition stand graphics reusable and our stands, an ideal option for outdoor events.</p>



                                <span className="top"></span><span className="right"></span><span className="bottom"></span><span className="left"></span>

                            </div>
                            <p className="intro-para3 germanpara">Our vast experience of working with different client from different geography on varying sizes starting from small businesses to mid and high level companies and to deliver design concept that exceeds their expectations. 3D design concepts are developed considering clients brand image and exhibition goals to deliver a state-of-the-art <Link href="/exhibition-stand-design/">exhibition stand design.</Link>

                            </p>
                            <div className="request_quote" >
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">Perfect place to transform your vision into reality 
                                  </p>

                                {/* <Link to='/'>Reaquest A Quote</Link> */}
                                <Link class="cta" href="/contact-us/">
                                    <span>Request A Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

                            </div>
                            <div className="row gifrow">
                                <div className="col-6 col-m-12">
                                    <Image src={Graphicimage} alt="exhibition stand graphic" className="constimg" />
                                </div>
                                <div className="col-6 col-m-12">
                                    <p className="gif_para">Need a high-quality trade show booth display to spread the right marketing message, Expo Stand Services may be your Turnkey exhibition service provider. To get free design proposal Whatsapp us at <a href="tel:+48-532499316">+48-532499316</a>  or email at  <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></p>
                                </div>

                            </div>

                        </div>


                        <div className="col-4 col-m-12">


                            <div className="audiohide">
                                <div className="baudio">
                                    <button className="button_audio" onClick={() => toggleShow(!show)}>{show ? "Our Services" : "Our Services"}</button>
                                </div>

                                {show && <div className="AudioList">
                                    <ul>

                                        <li><Link href="/exhibition-stand-consultation/">Consultation</Link></li>
                                        <li><Link href="/exhibition-stand-design/">Exhibition Stand Design</Link></li>
                                        <li><Link href="/exhibition-stand-construction/">Stand Construction</Link></li>
                                        <li><Link href="/exhibition-graphic-designing-and-production/">Graphic Production</Link></li>
                                        <li><Link href="/exhibition-stand-management/">Exhibition Stand Management</Link></li>
                                        <li><Link href="/exhibition-stand-audio-visual/">Audio & Visual</Link></li>
                                        <li><Link href="/exhibition-stand-installation-dismantling/">Installing & Dismantling</Link></li>
                                    </ul>




                                </div>}
                            </div>







                          <Stickform/>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>

    )


}

