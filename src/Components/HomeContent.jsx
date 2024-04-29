import React from 'react';
import vide from '@/Components/Videoplay/Video.mp4';
import Link from 'next/link';
import Image from 'next/image';
import Cust from '../Components/Portimage/Custom/Custom48.jpg';
import Img2 from '../Components/Portimage/Decker/Decker4.jpg';
import Img4 from '../Components/Portimage/Pavilon/Pavilion5.jpg';
import pav from '../Components/Portimage/Pavilon/Pavilion1.jpg';
import cutmm from '../Components/Portimage/Custom/Custom47.jpg';


import Img3 from '../Components/Portimage/Moular/Modular4.jpg';
import { FaRegHandPointRight } from "react-icons/fa6";




const HomeContent = () => {
    return (
        <div>

            <div className="video_content">
                <video src={vide} autoPlay loop muted className='home_video'></video>


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
            
        </div>
    )
}

export default HomeContent