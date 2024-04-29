
'use client';

import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import Expo from '@/Components/Images/Expo.webp';
import { IoLogoYoutube } from "react-icons/io";
import '@/Components/footer.css'
import { FaFacebook,FaTumblrSquare  } from "react-icons/fa";
import { FaInstagram,FaLinkedin,FaSquareXTwitter,FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>



        <div className="footer-1">
            <div className="container">
                <div className="expo-foot">
                    <div className="row expo-row">

                        <div className="col-3 col-m-7 ">
                            <Image src={Expo} alt="expo stand logo" className='footer-logo' loading='lazy' />

                        </div>
                        <div className="col-9 col-m-12 col-l-12 col-p-12 col-imp-12">
                            <p className="footer-para">
                                Expo Stand Services is one of the top exhibitions stand builders in Europe, serving exhibition services
                                across the globe. We work with exhibitors to break through the marketing clutter and ensure that
                                their stand meets all their requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"> </div>
                    <div className="col-8 col-m-12 col-t-12 col-d-12">

                        <ul className='social_iconslist'>
                            <li>
                                <a href="https://www.youtube.com/@expostandservices" target='blank'>
                                    <IoLogoYoutube size="2x" className='sicons y' />

                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/expostandservice" target='blank'>
                                    <FaFacebook  size="2x" className='sicons f' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/expostandservices/" target='blank'>
                                    <FaInstagram  size="2x" className='sicons ins' />
                                </a></li>
                            <li>
                                <a href="https://twitter.com/expostandservice/" target='blank'>
                                    <FaSquareXTwitter size="2x" className='sicons twit' />

                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/expo-stand-service" target='blank'>
                                    <FaLinkedin  size="2x" className='sicons lin' />

                                </a>
                            </li>
                            <li>
                                <a href="https://in.pinterest.com/expostandservice/" target='blank'>
                                    <FaPinterest  size="2x" className='sicons pint' />
                                </a>
                            </li>
                            <li>
                                <a href="https://exhibitionsstandbuilder.tumblr.com/" target='blank'>
                                    <FaTumblrSquare  size="2x" className='sicons tumb' />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-2"> </div>

                </div>
                <div className="row">

                    <div className="col-3 col-m-12 col-t-6 col-d-6">
                        <div className="footer-box">
                            <h5 className='footer-heading'>Expo Stand Services</h5>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link href="/">Home</Link></li>
                                    <li className='footer-lists'><Link href="/company-profile">About Us</Link></li>
                                    <li className='footer-lists'><Link href="/portfolios">Our Work</Link></li>
                                    <li className='footer-lists'><Link href="/major-exhibiting-cities">Trade Show Cities</Link></li>
                                    <li className='footer-lists'><Link href="/trade-shows-calender">Upcoming trade show</Link></li>
                                    <li className='footer-lists'><Link href="/global-presence">Global FootPrint</Link></li>
                                    <li className='footer-lists'><Link href="/design">Design to Delivery</Link></li>
                                    <li className='footer-lists'><Link href="/blog">Blog</Link></li>

                                    <li className='footer-lists'><Link href="/contact-us">Contact Us</Link></li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="col-3 col-m-12 col-t-6 col-d-6">
                        <div className="footer-box mobilehide">
                            <h5 className='footer-heading'> Services</h5>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link href="/exhibition-stand-consultation/">Consultation</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-design/">Exhibition Stand Design</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-builder/">Exhibition Stand Builder</Link></li>

                                    <li className='footer-lists'><Link href="/exhibition-stand-construction/">Stand Construction</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-graphic-designing-and-production/">Graphic Production</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-management/">Exhibition Management</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-audio-visual/">Audio & Visual</Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-installation-dismantling/">Installing & Dismantling</Link></li>



                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="col-3  col-m-12 col-t-6 col-d-6">
                        <div className="footer-box mobilehide">
                            <h5 className='footer-heading'> Solutions</h5>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link href="/custom-exhibition-stand/">Custom Booth Design and Build</Link></li>
                                    <li className='footer-lists'><Link href="/double-decker-exhibition-stands/">Double Decker Booth Design </Link></li>
                                    <li className='footer-lists'><Link href="/exhibition-stand-builder/">Exhibition Stand Builder</Link></li>

                                    <li className='footer-lists'><Link href="/country-pavilion-exhibition-design/">Pavilion Booth Design and Build</Link></li>
                                    <li className='footer-lists'><Link href="/portable-modular-exhibition-stand/">Modular Booth Design </Link></li>



                                </ul>
                            </div>
                        </div>


                    </div>


                    <div className="col-3  col-m-12 col-t-6 col-d-6">
                        <div className="footer-box">
                            <h5 className='footer-heading'> Contact Us</h5>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><i class="fa-solid fa-phone footer_icon"></i><a href="tel:+48616255500">+48-616255500</a></li>
                                    <li className='footer-lists'><i class="fab fa-whatsapp footer_icon"></i><a href="https://api.whatsapp.com/send?phone=48532499316"> +48-532499316</a></li>
                                    <li className='footer-lists'><i class="fas fa-envelope footer_icon"></i><a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></li>
                                    <li className='footer-lists'><i class="fab fa-skype footer_icon"></i><a href="">expo stand</a></li>




                                </ul>
                            </div>

                        </div>
                        

                    </div>



                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Footer;