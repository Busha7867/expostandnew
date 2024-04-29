'use client';

import React from 'react'
import Link from 'next/link';

import worldMap from '@/Components/Images/mapglobe.webp';
import Image from 'next/image';
import '@/app/innerpages.css';

import { GiStarsStack } from "react-icons/gi";



const Global = () => {
  return (
    <div>
        
        <div className="global-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12">
                            <div className="title">
                                <h1 className="global_heading">Global Presence</h1>
                                <p className="global_para">Creating new possibilities – anywhere.</p>
                            </div>
                            <div className="world_map">
                                <Image src={worldMap} alt="world map" />
                                <div className="pin usa">

                                    <span>United States</span>
                                </div>
                                <div className="pin france">

                                    <span className="Spains">France</span>
                                </div>
                                <div className="pin uae">

                                    <span>UAE</span>
                                </div>
                                <div className="pin uk">

                                    <span>UK</span>
                                </div>
                                <div className="pin india">

                                    <span>India</span>
                                </div>
                                <div className="pin china">

                                    <span>China</span>
                                </div>
                                <div className="pin italy">

                                    <span>Italy</span>
                                </div>
                                <div className="pin thailand">

                                    <span>Thailand</span>
                                </div>
                                <div className="pin spain">

                                    <span className="Spains">Spain</span>
                                </div>
                                <div className="pin switzerland">

                                    <span >Switzerland</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="global-2">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="globalheading">GLOBAL PRESENCE </h2>

                            <p className="globalpara">Global presence is more than just geography – it’s an unstoppable commitment to creating new possibilities – anywhere. Our extensive experience, proficiency at the exhibition stand design and build on the global platform. A strong relationship with global production houses allows us to deliver excellence in <Link href="/trade-shows-calender" style={{ color: "#A8cf45" }}>trade show booth design</Link> in Germany, USA and Dubai within the customer budget. We always deliver it on time, and we are well-versed with the latest technology knowledge, have resources and expertise to meet our customer expectations.

                                Expo Stand Services has an erudite and deep-rooted understanding of geographies, cultures, traditions, and design language, including our proven track record as exhibition stand builder in Germany. Expo Stand Services is committed to empowering leading brands through high-impact exhibition booth design and execution anywhere across the world.</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12  col-d-12  ">
                            <h2 className="globalheading">Why choose Expo Stand Services as your exhibition stand design company?</h2>

                            <p className="para_expertize globeexpertize">Expo Stand Services is the one-stop for all your exhibition stand construction needs. Our manufacturing & warehousing facility is strategically located in Poland, and the USA provides booth building services to clients across Europe and America.</p>



                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-t-12 col-d-12">
                            <div className="position">
                                <div className="globeparaleft">
                                    <p className="paragraph"> <span><GiStarsStack/></span>More than a decade of experience in stand design and construction.</p>
                                    <p className="paragraph"> <span><GiStarsStack/></span> Efficient and Experienced team of 3D designers and stand contractors in Germany.</p>
                                    <p className="paragraph"> <span><GiStarsStack/></span> Strategically Located Manufacturing and Warehousing facility.</p>
                                    <p className="paragraph"> <span><GiStarsStack/></span>Turnkey Exhibit with in-house production team of experienced booth builders in USA.</p>
                                    <p className="paragraph"> <span><GiStarsStack/></span>Innovative and smart solutions as per clients’ requirements.</p>
                                    <p className="paragraph"> <span><GiStarsStack/></span>Strong presence in the exhibition industry across four continents.</p>
                                </div>




                            </div>
                        </div>
                        <div className="col-2"></div>


                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-12 col-m-12">
                            <h2 className="globalheading">Our Mission</h2>
                            <p className="globalpara">As a company, we are conscious and perturbed about the importance and latest development in environmental sustainability. Our expert on-site exhibition management teams always take care of the environmental sustainability and ensure timely execution and delivery of your trade show booth. As an exhibition stand builders company, we have been executing exceptional stands for all our international clients for more than a decade in different parts of the world.</p>

                            <p className="para_expertize globexpertize">Whatever your needs, we don’t make it possible – we make it happen.</p>

                        </div>
                    </div>

                </div>
              

            </div>
         
    </div>
  )
}

export default Global;