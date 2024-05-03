'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '@/app/navbar.css';
import Logo from '@/Components/Images/Expo.webp';
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import $ from 'jquery';
import { FaQrcode } from "react-icons/fa6";

import { ImCross } from "react-icons/im";




const Navbar = () => {

    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)

    }






    useEffect(() => {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrink');
                $('.logo').addClass('shrink__logo');
                $(".logo").css("top", "0px");
            } else {
                $('nav').removeClass('shrink');
                $('.logo').removeClass('shrink__logo');

            }
        });
    }, []);

    return (
        <div>



            <div className="background-2">
                <div className="container">
                    <div className="row">
                        <div className="col-4 email_col">

                            <div className="email-contact">

                                <ul className='unorder'>
                                    <li className='email-contact'><a href="tel:+48-616255500"><span> <FaPhoneAlt className='icons' /> +48-616255500</span></a></li>
                                    <li className='email-contact'><a href="mailto:enquiry@expostandservice.com"><span> <FaMailBulk className='icons' /> enquiry@expostandservice.com</span></a></li>
                                </ul>

                            </div>

                        </div>
                        <div className="col-2 logo_col  ">
                            <div className="company-logo" >

                                <Link href="/"><Image src={Logo} alt='Logo' className='Expo-logo' loading='lazy' /></Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="Delivery-btn">

                                <button className='download_btn' >
                                    <a href="#popUp" id="openPopUp" className='d_btn'>
                                        Download Brouchure
                                        <span class="first"></span>
                                        <span class="second"></span>
                                        <span class="third"></span>
                                        <span class="fourth"></span>
                                    </a>
                                </button>

                                <button className='download_btn'>
                                    <Link href='https://www.expostandservice.us/' className='d_btn'>
                                        USA Presence
                                        <span class="first"></span>
                                        <span class="second"></span>
                                        <span class="third"></span>
                                        <span class="fourth"></span>
                                    </Link>
                                </button>
                                <button className='download_btn'>
                                    <Link href='/design/' className='d_btn'>
                                        Design To Delivery
                                        <span class="first"></span>
                                        <span class="second"></span>
                                        <span class="third"></span>
                                        <span class="fourth"></span>
                                    </Link>
                                </button>
                            </div>





                        </div>


                    </div>
                </div>
            </div>
            <div className="background-3">
                <div className="container">
                    <nav>
                        <div className="menu-icon" onClick={handleClick}>

                            {click ? <ImCross /> : <FaQrcode />}

                        </div>



                        <ul class="menu" className={click ? 'nav-menu active' : 'nav-menu'} >

                            <li>
                                <Link href="/" onClick={closeMobileMenu}><IoHome /></Link>

                            </li>
                            <li>

                                <label for="drop-1" class="toggle">About ESS <i className="fa-solid fa-angle-down"></i></label>
                                <Link href="">About ESS <i className="fa-solid fa-angle-down"></i></Link>
                                <input type="checkbox" id="drop-1" />
                                <ul className='unorder_sublinks'>
                                    <li><Link href="/company-profile/" onClick={closeMobileMenu}>Company Profile</Link></li>
                                    <li><Link href="/global-presence/" onClick={closeMobileMenu}>Global FootPrint</Link></li>
                                    <li ><Link href="/our-team/" onClick={closeMobileMenu}>Our Team</Link></li>
                                    <li ><Link href="/client-testimonial/" onClick={closeMobileMenu}>Client TestiMonial</Link></li>
                                </ul>

                            </li>
                            <li>

                                <label for="drop-2" class="toggle">Exhibtion Stand <i className="fa-solid fa-angle-down"></i></label>
                                <Link href="">Exhibition Stand <i className="fa-solid fa-angle-down"></i></Link>
                                <input type="checkbox" id="drop-2" />
                                <ul className="unorder_sublinks">
                                    <li className='exhbdrop_links'><Link href="/custom-exhibition-stand/" onClick={closeMobileMenu}>Custom Exhibition Stand</Link></li>
                                    <li className='exhbdrop_links'><Link href="/double-decker-exhibition-stands/" onClick={closeMobileMenu}>Double Decker Exhibition Stands</Link></li>
                                    <li className='exhbdrop_links'><Link href="/country-pavilion-exhibition-design/" onClick={closeMobileMenu}>Country Pavilion Exhibition Design</Link></li>
                                    <li className='exhbdrop_links'><Link href="/portable-modular-exhibition-stand/" onClick={closeMobileMenu}>Modular Portbal Exhibition Stand</Link></li>

                                </ul>
                            </li>
                            <li  >
                                <Link href="/portfolios/" onClick={closeMobileMenu}>Portfolio</Link>
                            </li>
                            <li  >
                                <Link href="/trade-shows-calendar/" onClick={closeMobileMenu}>Show Calendar</Link>
                            </li>
                            <li  >
                                <Link href="/major-exhibiting-cities/" onClick={closeMobileMenu}> Exhibition Cities</Link>
                            </li>
                            <li></li>
                            <li>

                                <label for="drop-3" class="toggle">Global Presence <i className="fa-solid fa-angle-down"></i></label>

                                <Link href="">Global Presence <i className="fa-solid fa-angle-down"></i></Link>

                                <input type="checkbox" id="drop-3" />

                                <ul className='unorder_sublinks'>
                                    <li className='global_links'><Link href='/exhibition-stand-designs-in-germany/' onClick={closeMobileMenu}>Germany Exhibition</Link></li>

                                    <li className='global_links'><Link href='/exhibition-stand-design-in-netherlands/' onClick={closeMobileMenu} >Netherlands Exhibition</Link></li>

                                    <li className='global_links'><Link href='/exhibition-stand-design-company-in-italy/' onClick={closeMobileMenu}>Italy Exhibition</Link></li>
                                    <li className='global_links'><Link href='/booth-stand-design-company-in-france/' onClick={closeMobileMenu} >France Exhibition</Link></li>
                                    <li className='global_links'><Link href='/exhibition-design-company-in-switzerland/' onClick={closeMobileMenu}>Switzerland Exhibition</Link></li>



                                    <li className='global_links'><Link href='/exhibition-stand-contractor-in-uk/' onClick={closeMobileMenu}>UK Exhibition</Link></li>





                                    <li className='global_links'><Link href='https://www.expostandservice.us/trade-show-booth-design/' onClick={closeMobileMenu} >USA Trade Show</Link></li>

                                    <li className='global_links'><Link href='/exhibition-stand-builders-in-uae/' onClick={closeMobileMenu} >UAE Exhibition</Link></li>



                                    <li className='global_links'><Link href='/exhibition-stall-design-company-in-india/' onClick={closeMobileMenu}>India Exhibition</Link></li>

                                    <li className='global_links'><Link href='/exhibition-stand-design-in-china/' onClick={closeMobileMenu}>China Exhibition</Link></li>






                                    <li className='global_links'><Link href='/exhibition-design-company-in-spain/' onClick={closeMobileMenu}>Spain Exhibition</Link></li>


                                    <li className='global_links'><Link href='/exhibition-stand-design-in-thailand/' onClick={closeMobileMenu}>Thailand Exhibition</Link></li>

                                </ul>

                            </li>
                            <li>

                                <label for="drop-4" class="toggle">Content Hub <i class="fa-solid fa-angle-down"></i>
                                </label>
                                <Link href="">Content Hub <i className="fa-solid fa-angle-down"></i></Link>
                                <input type="checkbox" id="drop-4" />
                                <ul className='unorder_sublinks'>
                                    <li className='content_links'><Link href='/blog/' onClick={closeMobileMenu}>Blog</Link></li>
                                    <li className='content_links'><Link href='/case-study/' onClick={closeMobileMenu}>Case Study</Link></li>

                                    <li className='content_links'><Link href='/exhibition-stand-builder/' onClick={closeMobileMenu}>Exhibition Stand Builder</Link></li>
                                    <li className='content_links'><Link href='/exhibition-stand-design/' onClick={closeMobileMenu}>Exhibition Stand Design</Link></li>
                                    <li className='content_links'><Link href='/exhibition-stand-construction/' onClick={closeMobileMenu}>Exhibition Stand Construction</Link></li>
                                    <li className='content_links'><Link href='/exhibition-graphic-designing-and-production/' onClick={closeMobileMenu}>Graphic Production</Link></li>
                                    <li className='content_links'><Link href='/exhibition-stand-management/' onClick={closeMobileMenu}>Exhibition Managment</Link></li>
                                    <li className='content_links'><Link href='/exhibition-stand-audio-visual/' onClick={closeMobileMenu}>Audio Visual</Link></li>
                                    <li className='content_links'><Link href='/exhibition-stand-installation-dismantling/' onClick={closeMobileMenu}>Installing & Dismantling</Link></li>

                                </ul>

                            </li>
                            <li><Link href="/contact-us/" onClick={closeMobileMenu}>Contact</Link></li>
                        </ul>


                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Navbar;  