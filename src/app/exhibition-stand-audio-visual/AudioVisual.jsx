'use client';

import React, { useState } from "react";
import Link from "next/link";

import Audio from '@/Components/Images/Video/Audiovisual.mp4';
import Stickform from "@/Components/stickform";
import { IoMdArrowDropright } from "react-icons/io";








export default function AudioVisual() {

    const [show, toggleShow] = useState(false);





    return (
        <div className="audiovisual_section">

            <div className="audio">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="visual">
                                <div className="visual_back">
                                    <video src={Audio} autoPlay muted loop></video>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-m-12 ">
                            <h1 className="audiovisual_heading">Audio &amp; Visual services for your brand exposition</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audio_two">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="german_heading2 audioHeading">Technologically advanced exhibition stands are at ESS</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <div className="intro-para3 ">
                                <p className="germanpara">Expo Stand Services offers a wide range of audio-visual rental services along many
                                    other showcasing services. We believe in enhancing your exhibition experience through
                                    new cutting-edge technology and impeccable services. We provide:
                                    </p>
                                    <ul class="custom_list">
                                        <li><IoMdArrowDropright className="green"/>	Top-notch projectors on rent to make your presentations clear and engaging</li>

                                        <li><IoMdArrowDropright className="green"/>Rental high-powered sound systems for crystal-clear audio  </li>

                                        <li><IoMdArrowDropright className="green"/>Vibrant LED video walls on rent to capture the attention of your audience with dynamic visual displays.</li>

                                        <li><IoMdArrowDropright className="green"/>Illuminating professional-grade stage lighting solutions on rent</li>
                                        <li><IoMdArrowDropright className="green"/>Receptions desks or counters on rent </li>
                                        <li><IoMdArrowDropright className="green"/>Rental Workstations & monitor stands</li>
                                        <li><IoMdArrowDropright className="green"/>Table covers & Shipping cases </li>







                                    </ul>
                                    <br />
                                    <b> Hostesses Audio-Visual Rental Solutions: </b>
                                    <ul class="custom_list">
                                        <li><IoMdArrowDropright className="green"/>Food Catering: We extend the experience beyond sight and sound with our delightful food catering services. </li>

                                        <li><IoMdArrowDropright className="green"/>Exhibition Hostess Services: Choosing Expo Stand Services will give you the experience of professionalism and warmth on the exhibition floor with our experienced and courteous hostesses. </li>








                                    </ul>
                                    <br />
                                    With more than a decade of experience planning and executing trade show
                                    services, we are well-equipped to put on a show. We are one of the best
                                    companies across the globe to provide new innovative technologies and
                                    experiential marketing, which include:
                                    <ul class="custom_list">
                                        <li><IoMdArrowDropright className="green"/>	Conceptualizing</li>

                                        <li><IoMdArrowDropright className="green"/>Designing your exhibition stand  </li>

                                        <li><IoMdArrowDropright className="green"/>Building exhibits with precision </li>
                                        <li><IoMdArrowDropright className="green"/>Custom graphics, logos, and backdrops</li>
                                        <li><IoMdArrowDropright className="green"/>Installations</li>
                                        <li><IoMdArrowDropright className="green"/>Receptions desks or counters on rent </li>
                                        <li><IoMdArrowDropright className="green"/>Dismantling </li>
                                        <li><IoMdArrowDropright className="green"/>Storing your exhibition stand after the show</li>







                                    </ul>



                               
                                <h3 className="german_para">Factors That Make Our Exhibition Stand Unique and Showstopper:
                                    Strategic Layout

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Inviting and open layout that encourages visitor flow</li>

                                    <li><IoMdArrowDropright className="green"/>Designate specific areas for product displays, demonstrations, and interaction </li>

                                    <li><IoMdArrowDropright className="green"/>Vibrant LED video walls on rent to capture the attention of your audience with dynamic visual displays.</li>

                                    <li><IoMdArrowDropright className="green"/>Illuminating professional-grade stage lighting solutions on rent</li>

                                    <li><IoMdArrowDropright className="green"/>Rental Workstations & monitor stands</li>
                                    <li><IoMdArrowDropright className="green"/>Table covers & Shipping cases </li>







                                </ul>

                                <h3 className="german_para">Eye-Catching Graphics:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Bold and visually appealing graphics to grab attention from a distance.</li>

                                    <li><IoMdArrowDropright className="green"/>Prominent and consistent branding throughout the stand. </li>









                                </ul>
                                <h3 className="german_para">Engaging Interactivity:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Interactive elements like touchscreens or product demos to engage visitors.</li>

                                    <li><IoMdArrowDropright className="green"/>Virtual or augmented reality experiences. </li>









                                </ul>
                                <h3 className="german_para">Branded Atmosphere:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Cohesive atmosphere that reflects your brand identity.</li>

                                    <li><IoMdArrowDropright className="green"/>Branded colors, imagery, and concise messaging</li>









                                </ul>
                                <h3 className="german_para">Effective Lighting:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Creative and strategic lighting to highlight key areas.</li>
                                    <li><IoMdArrowDropright className="green"/>Proper lighting to enhance the visibility of products and graphics.</li>









                                </ul>
                                <h3 className="german_para">Comfortable Seating:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Comfortable seating for discussions and meetings.</li>
                                    <li><IoMdArrowDropright className="green"/>Lounge areas to encourage longer interactions.</li>









                                </ul>
                                <h3 className="german_para">Tech Integration:

                                </h3>
                                <ul class="custom_list">
                                    <li><IoMdArrowDropright className="green"/>Integration of the latest technology relevant to your industry.</li>
                                    <li><IoMdArrowDropright className="green"/>Digital displays or interactive screens to convey information dynamically.</li>









                                </ul>
                                <br />

                                Do you need a seasoned <Link href="/exhibition-stand-builder/"> exhibition stand builder </Link> to manage your exhibit-related chores
                                and provide quality audio-visual rental services? Then call us right now and discuss
                                your requirements. We are present worldwide, offering professional services and eye-
                                catching exhibition stands. Get in touch with us now!

                            </div>
                            <div className="request_quote" >
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">
                                    Start the exhibition planning for your brand today!</p>

                                {/* <Link to='/'>Reaquest A Quote</Link> */}
                                <Link class="cta" href="/contact-us/">
                                    <span>Reaquest a Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

                            </div>


                            <div className="animation_border">

                                <p class="para_expertize audioteam">A TEAM OF SPECIALISTS, WITH A GOAL TO DOMINATE THE EXHIBITION SPACE WORLDWIDE. </p>
                                <span class="top"></span>
                                <span class="right"></span>
                                <span class="bottom"></span>
                                <span class="left"></span>

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


                            <Stickform />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )


}

