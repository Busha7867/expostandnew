'use client';

import React, { useState } from "react";


import Link from "next/link";
import Image from "next/image";
import DesigVideo from '@/Components/Images/Video/boothconclusion.gif';
import Truck from '@/Components/Images/truck.webp';
import Stickform from "@/Components/stickform";









export default function Installing() {
    const [show, toggleShow] = useState(false);

    

    return (
        <div className="construction_section">
        
            <div className="construction-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 standConstruction col-m-12">
                            <h1 className="construction_head">Installation &amp; Dismantling Services </h1>
                        </div>
                        <div className="col-6 col-m-12">
                            <div className="construction_img">
                                <Image src={DesigVideo} alt="Installation & Dismantling Services" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="construction-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="construction_head2">Need Installation &amp; Dismantling Experts? Hire Expo Stand Services!
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <p className="intro-para3 germanpara">
                                Expo Stand Services offers professional exhibition stand installation in addition to superior
                                display stand design and construction. Our exclusive and cost-effective packages include a host of
                                services along with exhibition stand design and build. A highly skilled and competent team takes
                                complete charge of the assembly and dismantling process of your exhibition stand at the venue, to
                                ascertain that you are show-ready on schedule.
                            </p>



                            <h3 className="german_para " >Second to None Installation and
                                Dismantling Services</h3>

                            <p className="intro-para3 germanpara">
                                Installation is a crucial part of exhibition planning. Only well-trained and skilled professionals can
                                assemble a stand as it was envisioned by the designers and the client. This totally eliminates the
                                hassle of outsourcing and coordinating with various suppliers to assemble and dismantle your
                                exhibition stand. Your stand is pre-assembled in our warehouse weeks before it is shipped. Our task
                                quickens the assembly process on the fairground thus giving you ample time to set up.
                                <br />
                                <br />
                                We also take care of the logistics and make sure all the parts of your exhibition stand to reach safely
                                at the show site. After that, our skilled builders carefully and safely assemble your display using their
                                years of knowledge to make sure that it doesn&#39;t sustain any scratches. And if you are anxious about
                                the rules and regulations of the exhibition stand space and installation, then please don’t be.
                                Because we have been in this industry for years and know almost all the layouts of exhibition halls
                                across the world. So, there won’t be any issue regarding installing your display.











                            </p>



                            <div className="row gifrow">
                                <div className="col-6 col-m-12">
                                    <Image src={Truck} alt="installing " className="constimg" />
                                </div>
                                <div className="col-6 col-m-12">
                                    <p className="gif_para">



                                        Once you partner with Expo Stand Services, we take complete responsibility for your exhibition stand. From stand manufacturing to the exhibition stand design and build process, we handle everything so that you need not worry about these details and concentrate solely on your show. To get a free design proposal Whatsapp us at<a href="https://api.whatsapp.com/send?phone=48532499316">+48-532499316</a>  or email at <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a>

                                    </p>













                                </div>



                            </div>
                            <br />
                            <br />
                            <div className="request_quote" >
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">
                                    Starts the exhibiting process for your brand exhibit here!</p>

                                {/* <Link to='/'>Reaquest A Quote</Link> */}
                                <Link class="cta" href="/contact-us/">
                                    <span>Request A Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

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
                                        <li><Link href="/exhibition-stand-design">Exhibition Stand Design</Link></li>
                                        <li><Link href="/exhibition-stand-construction">Stand Construction</Link></li>
                                        <li><Link href="/exhibition-graphic-designing-and-production">Graphic Production</Link></li>
                                        <li><Link href="/exhibition-stand-management">Exhibition Stand Management</Link></li>
                                        <li><Link href="/exhibition-stand-audio-visual">Audio & Visual</Link></li>
                                        <li><Link href="/exhibition-stand-installation-dismantling">Installing & Dismantling</Link></li>
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

