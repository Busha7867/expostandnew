import React from 'react';
import Link from 'next/link';
import Vide from '@/Components/videoplay/Video.mp4'
import Image from 'next/image';
import Cust from '@/Components/Portimage/Custom/Custom48.jpg';
import Img2 from '@/Components/Portimage/Decker/Decker4.jpg';
import Img4 from '@/Components/Portimage/Pavilon/Pavilion5.jpg';
import pav from '@/Components/Portimage/Pavilon/Pavilion1.jpg';
import cutmm from '@/Components/Portimage/Custom/Custom47.jpg';
import Flag1 from '../Components/flags/china.jpg';
import Flag2 from '../Components/flags/france.jpg';
import Flag3 from '../Components/flags/germany.jpg';
import Flag4 from '../Components/flags/india.jpg';
import Flag5 from '../Components/flags/italy.jpg';
import Flag6 from '../Components/flags/netherland.jpg';
import Flag7 from '../Components/flags/spain.jpg';
import Flag8 from '../Components/flags/switzerland.jpg';
import Flag9 from '../Components/flags/thailand.jpg';
import Flag10 from '../Components/flags/UAE.jpg';
import Flag11 from '../Components/flags/Uk.jpg';
import Flag12 from '../Components/flags/USA.jpg';

import Img3 from '@/Components/Portimage/Moular/Modular4.jpg';
import { FaRegHandPointRight } from "react-icons/fa6";




const HomeContent = () => {
    return (
        <div>

            <div className="video_content">
                <video src={Vide} autoPlay loop muted className='home_video'></video>


                <div className="expo-video">


                    <div className="quote">

                        <div className="button-quote">

                            <button type='submit' id='submit-btn' className='get-free btn-quote'>Get A Free Quote</button>




                        </div>
                    </div>

                    <div class="marquee">
                        <div>
                            <span>Transforming Great Design Into World-Class Exhibits</span>
                            <span>We Don't Make It Possible-We Make It Happen</span>
                            <span>Individually We Are unique, Together-We Are ExtraOrdinary</span>
                            <span>Transforming Great Design Ideas InTo World-Class Exhibits</span>
                            <span>A Team Of Specialists, With a Goal To Dominate The Exhibition Space Worldwide</span>
                            <span>Ambitious Leaders Connected By The Power of Infectious Creativity</span>

                        </div>
                    </div>




                </div>


            </div>
            <div className="wrap-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <div className="introduction-page">
                                <p className='intro-para2' >Meet The Best Exhibition Stand Builders in Europe | GLOBAL EXHIBITION Experts
                                </p>
                                <p className='intro-para1'>Ensures of be the best exhibition stand builder in Europe for you </p>
                            </div>
                        </div>

                    </div>
                    <div className="row germany">

                        <div className="col-8 col-m-12 col-t-12 ">
                            <div className="flex-container">

                                <p className='intro-para3'>Expo Stand Services is a top-leading professional <Link href="/exhibition-stand-builder/">exhibition stand builder</Link> and we take care of your showcase appearance from A to Z. Visiting exhibitions in Germany requires specialist knowledge because here one of the largest and most visited exhibitions in Europe takes place. As a leading <Link href="/exhibition-stand-designs-in-germany/"> exhibition stand builder in Germany, </Link>we have an innovative and competent production team consisting of all expert designers and adept builders. This team of ESS is ready to meet all the requirements of our customers.
                                </p>
                                <div className="exhibition-hand">
                                    <p className='intro-para4'>We are a team of experienced professional printing technicians, stand designers, and qualified exhibition stand builders specializing in project visualization and construction services. With our compelling exhibition stand construction service, we guarantee a smooth process. Our spectrum of exhibition stands includes:</p>
                                    <ul className='intro-lists'>
                                        <li className='intro-links'><FaRegHandPointRight /> Custom exhibition stands </li>
                                        <li className='intro-links'> <FaRegHandPointRight /> Modular exhibition stands </li>
                                        <li className='intro-links'> <FaRegHandPointRight /> Double-decker exhibition stands </li>
                                        <li className='intro-links'> <FaRegHandPointRight /> Country pavilions and others. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-m-12 col-t-8">


                            <div className="double_image">


                                <Image src={pav} alt="meet the exhibiton" className='big-img' loading='lazy' />
                                <div className="white-back">
                                    <Image src={cutmm} alt="meet the exhibiton" className='whiteback-img' loading='lazy' />

                                </div>
                            </div>




                        </div>

                    </div>

                </div>
            </div>
            <div className="wrap-2">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-m-12 col-t-12">
                            <div className="wrk-excel">

                                <h2 className='excel-workhead'>
                                    How do we excel at our work?</h2>
                                <p className='excel-para'>Depending on your business goal, we create a project that fits your needs and budget. We successfully deliver the highest quality services globally with our manufacturing facilities and the vast experience of our experienced engineers, managers, and technicians. We produce the highest quality <span> exhibition stand design & construction </span> in our manufacturing facility.</p>
                            </div>

                        </div>

                    </div>

                    <div className="row exclerow">
                        <div className="col-4 col-m-12 ">
                            <div className="service-1">
                                <Link href="/custom-exhibition-stand/">
                                    <Image src={Cust} alt="custom exhibition stand" loading='lazy' /></Link>
                                <div className="service-head">
                                    <h4>CUSTOM STANDS</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 col-m-12 ">
                            <div className="service-2">
                                <Link href="/portable-modular-exhibition-stand/"><Image src={Img2} alt="modular exhibition stand" loading='lazy' /></Link>
                                <div className="service-head">
                                    <h4>MODULAR STANDS</h4>
                                </div>

                            </div>
                            <div className="service-22">
                                <Link href="/country-pavilion-exhibition-design/"><Image src={Img4} alt="pavilion exhibition design" loading='lazy' /></Link>
                                <div className="service-head">
                                    <h4>COUNTRY PAVILION</h4>
                                </div>

                            </div>
                        </div>
                        <div className="col-4  secondextracol ">
                            <div className="service-3">
                                <Link href="/double-decker-exhibition-stands/"><Image src={Img3} alt="double-decker exhibition stand" loading='lazy' /></Link>
                                <div className="service-head">
                                    <h4>DOUBLE DECKER</h4>
                                </div>
                            </div>
                        </div>
                    </div>









                </div>


            </div>
            <div className="wrap-3">
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12 col-ml-12 col-ip-12 col-l-12 col-p-12 col-t-12">
                            <h3 className='experience-head'>Get The Best With Our Years Of Experience And Showcase Expertise</h3>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12 col-ip-12  col-l-12 col-p-12 col-t-12">
                            <div className="expe-standpara">
                                <p className='intro-para3'>

                                    The exhibition stands designs we produce, are exclusively based on your requirements. We have been in the industry of designing and building exhibition stands for years. Expo Stand Services has positive customer relationships because we have completed & delivered thousands of projects without any room for error. We have an experienced in-house team ofb
                                    <b> exhibition stand builders and designers in Germany </b>and a local production unit in Germany to build your stand. Expo Stand Services is providing comprehensive services throughout the UAE (our manufacturing facility), Europe, the USA, and across the globe. The worldwide availability enables us to become the most trusted and leading brand in this highly competitive industry.
                                </p>
                                <span className='arrow_stand'></span>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            <div className="wrap-4">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-ml-12 col-l-12 col-p-12 col-t-12">
                            <h2 className='expo-world'>Expo Stand Services Around The World</h2>
                        </div>
                        <div className="col-2 "></div>
                    </div>
                    <div className="row">
                        <div className="box">
                            <Link href="/exhibition-stand-designs-in-germany" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag3} alt="GermanyFlag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>Germany</p>
                            </Link>

                        </div>

                        <div className="box">

                            <Link href="/exhibition-stand-design-in-netherlands" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag6} alt="netherlandflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>Netherland</p>
                            </Link>

                        </div>
                        <div className="box">
                            <Link href="/exhibition-stand-design-company-in-italy" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag5} alt="italyflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>Italy</p>
                            </Link>

                        </div>

                        <div className="box">

                            <Link href="/booth-stand-design-company-in-france" className='box-link' target='blank'>
                                <div className="world-img">

                                    <Image src={Flag2} alt="franceflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>France</p>
                            </Link>

                        </div>

                        <div className="box">
                            <Link href="/exhibition-design-company-in-switzerland" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag8} alt="switzerland" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>Switzerland</p>
                            </Link>

                        </div>
                        <div className="box">
                            <Link href="/exhibition-stand-contractor-in-uk" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag11} alt="UKflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>UK</p>
                            </Link>

                        </div>
                        <div className="box">
                            <Link href="https://www.expostandservice.us/trade-show-booth-design/" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag12} alt="usaflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>USA</p>
                            </Link>

                        </div>
                        <div className="box">
                            <Link href="/exhibition-stand-contractor-in-dubai" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag10} alt="uaeflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>UAE</p>
                            </Link>

                        </div>
                        <div className="box">
                            <Link href="/exhibition-stand-design-in-china" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag1} alt="chinaflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>China</p>
                            </Link>
                        </div>


                        <div className="box">
                            <Link href="/exhibition-stall-design-company-in-india" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag4} alt="indianflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>India</p>
                            </Link>

                        </div>


                        <div className="box">
                            <Link href="/booth-stand-design-company-in-france" className='box-link' target='blank'>
                                <div className="world-img">

                                    <Image src={Flag8} alt="franceflag" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>France</p>
                            </Link>

                        </div>


                        <div className="box">
                            <Link href="/exhibition-stand-design-in-thailand" className='box-link' target='blank'>
                                <div className="world-img">
                                    <Image src={Flag9} alt="thailand" className='indianflag' loading='lazy' />
                                </div>

                                <p className='world-para'>Thailand</p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
            <div className="wrap-5 ">
                <div className="container contain">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-p-12">
                            <h2 className='expo-world'>Client Satisfaction Is What We Work For!</h2>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row sketch-back">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-l-12 col-p-12 col-t-12">
                            <div className="years-experience">
                                <p className='yearexp-para'>We give our customers a 100% client satisfaction guarantee. With our range of unique exhibition stands and solutions to choose from in Germany, you don’t even have to step outside. You can connect with us for an exclusive offer regarding exhibition stand design and its specific size because we are among the elite <b> exhibition stand builders and contractors  in Germany </b>. In addition, we take care of everything from the 3D design of exhibition stands to graphic printing to the assembly and disassembly of individual stands.</p>

                                <p className='yearexp-para paraexp para'>With each project, we push the boundaries of innovation, delivering the best and most unique display designs to help clients promote their brands as widely as possible.
                                </p>


                            </div>
                        </div>
                        <div className="col-2"></div>

                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default HomeContent