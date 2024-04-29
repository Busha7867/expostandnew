'use clinet';

import React from 'react'

import Image from 'next/image';
import CVideo from '@/Components/Images/vid.gif';

import Link from 'next/link';
import { IoMdStar } from "react-icons/io";
import CompanyLogo from '@/Components/Images/Expo.webp';
import Goal from '@/Components/Images/target.png';
import Booth from '@/Components/Images/booth.png';
import Traffic from '@/Components/Images/traffic.png';
import Star from '@/Components/Images/Star.png';
import Customer from '@/Components/Images/customer.png';
import time from '@/Components/Images/time.png';
import '@/app/innerpages.css';


const page = () => {
    return (
        <div>
        


            <div className="company">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-m-12">

                            <div className="company_box">
                                <h1 className="company_heading">Setting the standards for exhibiting</h1>

                            </div>
                        </div>
                        <div className="col-4 col-m-12">
                            <div className="company_contentbox">

                                <Image src={CVideo} alt="company exhibiton stand " className='big-img' />

                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="company-1">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12">
                            <div className="company_content">
                                <h2 className="cheading">Company Profile</h2>
                                <p className="cpara">
                                    Expo Stand Services is an <Link href="/exhibition-stand-builder/"><span>exhibition stand builders </span></Link>company in Germany comes with more than a decade of experience in the field of exhibitions around the world. Our team of expert designers and architects add value to the services offered by Expo Stand Services and make us, one of the best among exhibition stands design company in Europe.

                                    <br />
                                    <br />

                                    We as a Trade show booth design company, offer a comprehensive range of services in the field and help customers to plan and execute the quality project under expert supervision. As a proficient exhibition stand contractor, we strive for customer satisfaction taking every minute detail into consideration and helps to make the best out of the client investment. Our team of efficient experts can help to turn your vision into reality. We have the skills to work within your budget without compromising the quality of the project.
                                    <br />
                                    <br />
                                    Our global outreach with in house production capacity enables us to deliver the booths in the multiple locations at the same time. Expo Stand Services is a company specializing in high visibility and impact turnkey exhibits offering 360-degree brand marketing and professional expertise in exhibitions throughout Europe, USA, UAE and Asia. When it comes to
                                    <Link href="/exhibition-stand-design/"> exhibition stand design </Link> and set up, Expo Stand Services has what it takes to deliver a punch for your brand marketing push at any exhibition and trade show across the globe, this makes us one of the best among exhibition stand building companies.
                                </p>
                            </div>
                        </div>
                        <div className="col-4 col-m-12 col-t-12">
                            <div className="position">
                                <p className="paragraph1"> <span><IoMdStar /></span> Experience of more than a decade on international platforms.</p>
                                <p className="paragraph1"> <span><IoMdStar /></span> Expert in brand marketing ideas at trade fair and exhibitions.</p>
                                <p className="paragraph1"> <span><IoMdStar /></span> Extraordinary space design & booth construction with global expertize.</p>
                                <p className="paragraph1"> <span><IoMdStar /></span>Continuous innovation, advanced technology, enhanced design & construction techniques, and time management = Quality</p>
                                <p className="paragraph1"> <span><IoMdStar /></span>Expo Stand Services has become among the most trusted partner in exhibition design and booth construction.</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="company-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="company-specialist">Specialists In Exhibition Stand Design & Construction</h2>
                            <p className="company_p">Expo Stand Services is one of the leading <Link href="/" style={{color:"#A8cf45"}}>exhibition stand builders in Europe </Link> offering custom exhibition stands, double-decker exhibition stands, portable stands, and country pavilions at a comprehensive price across Europe. Our sole motto is to make your exhibition stand designing & building a pleasant experience and hassle-free in Europe, enabling you to focus on achieving your exhibition goals. Your Exhibition stand design is completely based on your brief requirements and brand guidelines. Our objective is to deliver an extraordinary trade show stand by taking care of complete installation, dismantling, and transportation. Exhibition stand building is an outcome of vast planning and detailing. Expo Stand Services has an experience of more than a decade as an expert exhibition stand contractor in Germany.</p>
                        </div>
                    </div>

                    <div className="col-12 col-m-12 col-t-12">
                    <h2 className="company-specialist">Raising Standards, Exceeding Expectations, Year After Year</h2>
                        <div className="bars">
                            <div className="skilss_bar">
                                <div className="bar">
                                    <div className="info">
                                        <span>2008</span>
                                    </div>
                                    <div className="progress_line expo1"><span></span></div>
                                </div>
                            </div>
                            <div className="skilss_bar">
                                <div className="bar">
                                    <div className="info">
                                        <span>2012</span>
                                    </div>
                                    <div className="progress_line expo2"><span></span></div>
                                </div>
                            </div>
                            <div className="skilss_bar">
                                <div className="bar">
                                    <div className="info">
                                        <span>2015</span>
                                    </div>
                                    <div className="progress_line expo3"><span></span></div>
                                </div>
                            </div>
                            <div className="skilss_bar">
                                <div className="bar">
                                    <div className="info">
                                        <span>2017</span>
                                    </div>
                                    <div className="progress_line expo4"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
               
            </div>
            
             <div className="company-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="company-specialist">Whatever The Scale Of Your Exhibition, We Have The Expertize</h2>
                            <p className="para_expertize">Expo Stand Service Designs and Build Modular, Custom & Hybrid exhibition booths for international companies exhibiting in Europe and Worldwide.</p>

                        </div>
                    </div>
                    <div className="row comp_row">
                        <div className="col-4 mid col-t-10">
                            <div className="leftside_para">
                                <div className="left_icon">
                                <Image src={Goal} alt="icons" className="leftimg" />
                                </div>
                                <p className="leftpara" >Our motto is to make your exhibition booth design & build pleasant experiences in Europe hassle-free, enable you to focus on achieving your exhibition goals.</p>
                            </div>
                            <div className="leftside_para">
                                <div className="left_icon">
                                    <Image src={Booth} alt="icons" className="leftimg" />
                                </div>

                                <p className="leftpara" >Delivering exceptional booth fabrication services to international companies in Europe for more than a decade which has given us tremendous mileage in trade show booth design.</p>
                            </div>
                            <div className="leftside_para">
                                <div className="left_icon">
                                    <Image src={Traffic}alt="icons" className="leftimg" />
                                </div>
                                <p className="leftpara" >The vast experience of designing and executing custom build exhibition booths that helps in increasing demand and boost traffic.</p>
                            </div>
                        </div>
                        <div className="col-4">

                            <div className="circle_white">

                                <Image src={CompanyLogo}alt="icons" className="circle_img" />
                            </div>
                        </div>
                        <div className="col-4 lid col-t-10">
                            <div className="rightside_para">
                                <div className="right_icon">
                                    <Image src={Star}alt="icons" className="rightimg" />
                                </div>

                                <p className="rightpara">Exhibition stand design company which helps in the development of the visitor experience and make you the star of the show.</p>
                            </div>
                            <div className="rightside_para">
                                <div className="right_icon">
                                    <Image src={Customer} alt="icons"className="rightimg" />
                                </div>
                                <p className="rightpara">Organized project management and quality control have enabled us to make amazing exhibition booth building experiences for our putative customers over the years.</p>
                            </div>
                            <div className="rightside_para">
                                <div className="right_icon">
                                    <Image src={time}alt="icons" className="rightimg" />
                                </div>
                                <p className="rightpara">We substantiate our quick turnaround time. Whether it’s creating the mood boards, designing the booth concept, or delivering it on the fairground to the clients, we believe in moving fast .</p>
                            </div>

                        </div>

                    </div>
                    

                </div>
               
            </div> 
            
        </div>
    )
}

export default page;