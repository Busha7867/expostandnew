'use client';

import React, { lazy } from 'react'

import CustomVideo from '@/Components/Images/Video/Pavilion.webm';
import Link from 'next/link';
import Image from 'next/image';
import { GiThreePointedShuriken } from "react-icons/gi";
import '@/app/innerpages.css';
import img3 from '@/Components/Portimage/Pavilon/Pavilion17.jpg';



const page = () => {
    return (
        <div>
          

            <div className="custom-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="blurr">
                                <h1 className="customstand"> Country Pavilion Design</h1>
                                <p className="customstand_para">Expo Stand Services has expertise in exhibition country pavilion design all across Europe and the USA. .</p>
                            </div>
                        </div>
                        <div className="col-6 col-m-12 ">
                            <video src={CustomVideo} autoPlay muted loop className="customimage"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12"  >
                            <div className="customstand_heading2">
                                <h2 className="customheading2">Exhibition Country Pavilion Design
                                </h2>
                                <p className="custompara"> Expo Stand Services has expertise in exhibition country pavilion design all across Europe and the USA. We make these booths using modern techniques at our workshop. Our country pavilion trade show booths are an amalgamation of modern art and contemporary architecture.
                                    <br />
                                    <br />

                                    Exhibition pavilions ask for undivided attention to each element and awareness of the booming trends of the industry in order to deliver an everlasting impression on the minds of visitors and increase the category and standard. Expo Stand Services is an expert in <b>exhibition pavilion designs In Germany. </b>We deliver turnkey exhibit display stand solutions as well as reflect ones based on the professional requirements, budget, and minute details from the customers. Our team of experienced, highly motivated, and innovative members comprises 3D booth designers, craftsmen, visualizers, technical specialists, and project supervisors. Our team has delivered state of the art stands and pavilions to customers around the world..</p>





                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <h2 className="customheading2">What Does EXPO STAND SERVICES Offer?</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-5 col-m-12 col-t-12 col-d-12">
                            <div class="serviceBox paviln">
                                <div class="service-icon">
                                    <span><i class="fa fa-globe"></i></span>
                                </div>

                                <video src={CustomVideo} autoPlay loop muted onLoad={lazy} className='sidecustom'>3D </video>
                            </div>





                        </div>
                        <div className="col-7 col-m-12 col-t-12 col-d-12">
                            <p className="paracustom intro-para3">Our custom exhibition stand designs are created to deliver your message throughout the exhibit. We are an empirical design and construction complex specializing in the design, development, construction and implementation of exhibits. We work across all industries and sectors and are known for creating unique customer experiences on display grounds. Our services include the design and furnishing stands. The custom exhibition stand design can be used in any environment because we adapt them to your needs. Our team of experienced professionals works with the utmost care and with your needs and budget in mind.</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">

                            <h2 className="customheading2">Our Team</h2>
                            <div className="row">

                                <div className="col-7 col-m-12 col-t-12 col-d-12 ">
                                    <div className="flex-container">


                                        <p className='intro-para3 germanpara'>
                                            As an expert exhibition pavilion builder in Europe, Our team is managing the large horizon of building an outstanding overall structure. These country pavilion exhibition stands are designed to offer an informal hospitality space, catering, and private meeting rooms. Each country pavilion exhibition booth has an individual exhibitor catalog reflecting your profile, logo, and contact details which helps in distribution.
                                            <br />
                                            We create country pavilion designs with unique ethnic and modern sense adding simple volumes of 3D-letters. We have experience of more than a decade in the exhibition industry and have extensive knowledge of the latest designs in the industry.
                                            <br />
                                            We know how to build a country pavilion exhibition stand that reflects dignity amongst visitors about the respective country and the exhibitors in the show. For more information on design, ideas to build the country pavilion exhibition booth, you can go through our recent work. If you have any questions, please reach our customer service experts.
                                            <br />
                                            <br />
                                            We are one of the well-known <Link href
                                                ="/exhibition-stand-designs-in-germany/">exhibition stand design company in Germany, </Link> we offer a variety of solutions and services in all major trade fairs across Germany, France, Italy, Netherlands, Spain, Italy, and other European countries. We devised a unique process that results in excellent outcome every time we take up a project. The process starts at the moment we are awarded an order from the customer (local as well as international exhibitors). Initially, we focus on understanding customer business specifications. Once we have an idea, we will:

                                        </p>

                                    </div>



                                </div>
                                <div className="col-5 col-m-12 col-t-12 col-d-12">
                                    <Image src={img3} alt="country-pavilion exhibition design" className="createimage" loading="lazy" />
                                </div>
                            </div>
                        </div>

                    </div>






                </div>
            </div>
            <div className="decker">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flex_p">


                                <ul className="custom_lists intro-para3">
                                    <li><GiThreePointedShuriken className='custom_arrow' /> Share a 3D stand layout design with the customer for approval</li>
                                    <li><GiThreePointedShuriken className='custom_arrow' />Starting of stand building at our workshop</li>
                                    <li><GiThreePointedShuriken className='custom_arrow' />Ship and assembly of the booth at the exhibition hall</li>
                                    <li><GiThreePointedShuriken className='custom_arrow' />Give life to the pavilion through lighting, AVs, and other key additions</li>
                                
                                </ul>
                                <ul className="custom_lists intro-para3">


                                    <li><GiThreePointedShuriken className='custom_arrow' />On-site supervision and exhibition management</li>
                                    <li><GiThreePointedShuriken className='custom_arrow' />Dismantle the booth Post show. </li>
                                    <li><GiThreePointedShuriken className='custom_arrow' />On-site supervision and exhibition management </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    

        </div>
    )
}

export default page;