'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Vide from '@/Components/videoplay/Video.mp4'
import Image from 'next/image';
import Cust from '@/Components/Portimage/Custom/Custom48.jpg';
import Img2 from '@/Components/Portimage/Decker/Decker4.jpg';
import Img4 from '@/Components/Portimage/Pavilon/Pavilion5.jpg';
import pav from '@/Components/Portimage/Pavilon/Pavilion1.jpg';
import cutmm from '@/Components/Portimage/Custom/Custom47.jpg';
import Flag1 from '@/Components/flags/china.jpg';
import Flag2 from '@/Components//flags/france.jpg';
import Flag3 from '@/Components/flags/germany.jpg';
import Flag4 from '@/Components/flags/india.jpg';
import Flag5 from '@/Components/flags/italy.jpg';
import Flag6 from '@/Components/flags/netherland.jpg';
// import Flag7 from '../Components/flags/spain.jpg';
import Flag8 from '@/Components/flags/switzerland.jpg';
import Flag9 from '@/Components/flags/thailand.jpg';
import Flag10 from '@/Components/flags/UAE.jpg';
import Flag11 from '@/Components/flags/Uk.jpg';
import Flag12 from '@/Components/flags/USA.jpg';
import TreeLogo from '@/Components/Images/Expo.webp';
import Datagathering from '@/Components/Images/data-gathering.png'
import Creative from '@/Components/Images/data-gathering.png';
import Feedback from '@/Components/Images/feed.png';
import Supervision from '@/Components/Images/supervised.png';
import Warehouse from '@/Components/Images/warehouse.png';
import Production from '@/Components/Images/production.png';


import Img3 from '@/Components/Portimage/Moular/Modular4.jpg';
import { FaRegHandPointRight } from "react-icons/fa6";
import Expandingcards from './Expandingcard';
import Ib from '@/Components/Logoslider/ibc-logo.png';
import Fruit from '@/Components/Logoslider/Fruit.jpg';
import Aa from '@/Components/Logoslider/aa.webp';
import Sea from '@/Components/Logoslider/seafood.jpg';
import Fib from '@/Components/Logoslider/FIBO.jpg';
import clas from '@/Components/Logoslider/Class.jpg';
import Zim from '@/Components/Logoslider/zim-trade.jpg';
import AA from '@/Components/Logoslider/NFSSP.jpg';
import FreshPerch from '@/Components/Logoslider/Fresh.webp';
import Neon from '@/Components/Logoslider/neonetic.jpg';
import ArticleBlog from '@/app/Article/ArticleBlog';
import LogoSLider from './LogoSLider';
import Counterup from './CounterUp';
import Mainform from './Mainform';
import Footer from './Footer';
const HomeContent = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://www.expostandservice.com/wp-json/wp/v2/posts', {
                    params: {
                        per_page: 3,
                        _embed: true
                    }
                });
                setPosts(result.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


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
            <div className="wrap-6">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-p-12">
                            <h2 className='expo-world'>Join Hands With Us For The Best ROI</h2>
                        </div>
                        <div className="col-2"></div>

                    </div>
                    <div className="contain_2 left-container" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" >

                        <div className="text-box">
                            <Image src={TreeLogo} alt="Expo stand logo" className='tree_logo' loading='lazy' />
                            <h3 className="tree-heading">Who We Are</h3>
                            <p>We are your reliable exhibition stand builder in Germany, working and successfully serving a variety of brands and clients worldwide. We understand your special needs & wishes and deliver the entire stand and exhibition services without problems.</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="contain_2 right-container" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000" >
                        <div className="text-box">
                            <Image src={TreeLogo} alt="Expo stand logo" className='tree_logo' loading='lazy' />

                            <h3 className="tree-heading">What Matters To Us The Most?</h3>
                            <p>You and your showcasing needs are our priority!
                                <br />
                                <br />

                                We know how important a well-built exhibition stand is! So, as a pioneer <b>exhibition stand builder in Germany,</b> we build and deliver stands of international quality with the highest precision and technical specifications. Our hardworking craftsmen carry out each exhibition stand construction and build a unique stand by paying attention to every detail customer’s mention.</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className="contain_2 left-container" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2200"  >
                        <div className="text-box">
                            <Image src={TreeLogo} alt="Expo stand logo" className='tree_logo' loading='lazy' />
                            <h3 className="tree-heading">What Do We Do For You?</h3>
                            <p>We offer <b>exhibition stand design & construction services in Germany </b> as per your requirements, including custom, modular, double-story, and pavilion stands. With us, all your questions about exhibition stand services get solved and served in one place. Be it a local or an international exhibition, we are experts in designing exhibition stands that work best in your favour when exhibiting in Germany or anywhere in Europe.</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="contain_2 right-container" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2500" >
                        <div className="text-box">
                            <Image src={TreeLogo} alt="Expo stand logo" className='tree_logo' loading='lazy' />
                            <h3 className="tree-heading">How Do We Work For You?</h3>
                            <p>Assessing your needs, goals, and vision is the first step of our procedure. We involve our clients at every stage of developing the perfect plan. We carry out the entire project taking into account the client’s assessment, design, and the smallest details, with our in-house production facility and warehouse across the globe.</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>


                </div>
            </div>
            <div className="grid-1">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-l-12 col-p-12">
                            <h2 className='expo-world'>Glimpse Of Our Work</h2>
                            <p className='glimpse-para'>Expo Stand Services believes in executing and delivering exceptional quality for the investment you put in trade show booth design and build. So if you are looking for an experienced exhibition stand contractor in Germany with their production unit, you have landed on the right page of an exhibition stand builder in Germany!</p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row">
                    </div>
                    <Expandingcards />


                    < button className="btn"><span> <Link href="" className='btn-link'>VIEW MORE SUCCESSFUL EXECUTION</Link></span></button>

                </div>

            </div>
            <div className="work-1">
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12 col-t-12">

                            <h2 className='expo-world'>OUR WORKFLOW</h2>
                            <p className='work_para'>
                                Being the leader in exhibition stand services, we start the work only after understanding your company’s vision, and objective. Our goal is to provide a remarkable experience throughout the entire process of stand designing and fabrication across the globe.
                            </p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            <div className="work-2">
                <div className="container">
                    <div className="row ">
                        <div className="col-4 col-m-12">
                            <div className="work-box feed_1">
                                <Image src={Datagathering} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>Brief Form</h3>
                                <p className='work-para'>We discuss and gather information from the client to provide design concepts.</p>
                            </div>
                        </div>
                        <div className="col-4 col-m-12">
                            <div className="work-box feed_1">
                                <Image src={Creative} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>Creative Design Options</h3>
                                <p className='work-para'>We create multiple 3D design concepts according to your brief requirements.</p>
                            </div>
                        </div>
                        <div className="col-4 col-m-12">
                            <div className="work-box feed_1">
                                <Image src={Feedback} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>Client Feedback</h3>
                                <p className='work-para'>We involve our clients throughout the process and take feedback to optimize the design as per their requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="work-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-m-12">
                            <div className="work-box-2 feed_1 ">
                                <Image src={Supervision} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>Showsite Supervision</h3>
                                <p className='work-para'> Our project manager will manage any unforeseen circumstances on-site & off-site.
                                </p>

                            </div>
                        </div>
                        <div className="col-4 col-m-12">
                            <div className="work-box-2  feed_1">
                                <Image src={Warehouse} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>Install, Dismantle & Warehouse</h3>
                                <p className='work-para'>We manage everything like manual chores to provide you with a seamless experience.
                                </p>

                            </div>
                        </div>
                        <div className="col-4 col-m-12">
                            <div className="work-box-2  feed_1">
                                <Image src={Production} alt="icon" className='data_icon' loading='lazy' />
                                <h3 className='workexp-heading'>In-House Production</h3>
                                <p className='work-para'>Our In-house saves you money & time with superior building techniques and seamless coordination. </p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <div className="work-4">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 col-m-12 col-t-12 col-d-12"><h2 className='client_say'>What Our Client Says</h2></div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12 col-d-12 ">

                            <div className="bloc-tabs">
                                <button
                                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(4)}
                                >
                                    <div className="clients_img">
                                        IBC <Image src={Ib} alt="client say tab logo" className='client_pic' loading='lazy' />
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    <div className="clients_img">
                                        Fruit Logistics <Image src={Fruit} alt="client say tab logo" className='client_pic' loading='lazy' />
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    <div className="clients_img">
                                        A+A <Image src={Aa} alt="client say tab logo" className='client_pic' loading='lazy' />
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(3)}
                                >
                                    <div className="clients_img">
                                        Sea Food <Image src={Sea} alt="client say tab logo" className='client_pic' loading='lazy' />
                                    </div>

                                </button>


                                <button
                                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(5)}
                                >
                                    <div className="clients_img">
                                        Fibo <Image src={Fib} alt="client say tab logo" className='client_pic' loading='lazy' />
                                    </div>

                                </button>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-12 col-m-12 col-t-12">

                            <div className="content-tabs">
                                <div className="row">
                                    <div className="col-6 col-m-12 col-t-12 ">


                                        <div
                                            className={toggleState === 4 ? "content  active-content" : "content"}
                                        >
                                            <Image src={clas} alt="class x logo" className='content-images' loading='lazy' />
                                            <p className='seeds'>Class X</p>
                                            <span className='seeds-span'>IBC</span>
                                            <p className='seeds-para'>
                                                This year, we had a beautiful stand made by Expo Stand Services, a Polish company that has done a great job. We had a big green wall that was a part of our technology, a tremendous futuristic screen, some lights, and studio lights. The paint they used was technological. We also had a great supporting structure and a cabin with a fancy round window in our stand. The stand was excellent, thanks to the Expo Stand Services.
                                            </p>

                                        </div>



                                        <div
                                            className={toggleState === 1 ? "content  active-content" : "content"}
                                        >
                                            <Image src={Zim} alt="zim trade logo" className='content-images' loading='lazy' />
                                            <p className='seeds'>Zim Trade</p>
                                            <span className='seeds-span'>Fruit Logistics</span>
                                            <p className='seeds-para'>
                                                Hello, my name is Sharon Chigonzo, and I'm from the Zim trade in Zimbabwe. We had our stand constructed by Expo Stand Services, and we would like to say that we're very happy with the job that was done. It was done to our specifications, and we had given them all the things we wanted, and they incorporated them steadily and were very efficient. We would like to thank you and especially Robert and Lucas for their attention to detail and for helping us with everything. We look forward to working with them more in the future.

                                            </p>

                                        </div>

                                        <div
                                            className={toggleState === 2 ? "content  active-content" : "content"}
                                        >
                                            <Image src={AA} alt="nfssp logo" className='content-images' loading='lazy' />
                                            <p className='seeds'>NFSSP</p>
                                            <span className='seeds-span'>A+A Dusseldorf</span>
                                            <p className='seeds-para'>
                                                Thank you to the Expo Stand Services, as usual, they did a great job and professional one. They give us a better stand with great condition and quality and on time. The quality of the material and the efforts they put in, we appreciate it all!
                                            </p>

                                        </div>

                                        <div
                                            className={toggleState === 3 ? "content  active-content" : "content"}
                                        >
                                            <Image src={FreshPerch} alt="fresh perch logo" className='content-images' loading='lazy' />
                                            <p className='seeds'>Fresh Perch</p>
                                            <span className='seeds-span'>Sea Food
                                            </span>
                                            <p className='seeds-para'>
                                                Hello, on behalf of Fresh Perch, we want to appreciate Expo Stand Services for constructing our stand for Barcelona Expo 2023. We gave them the contract very late, but they finished the job within a week and handed over the stand to us. The quality of the stand was up to our expectations, and next year we also look forward to giving them a contract.
                                            </p>
                                        </div>

                                        <div
                                            className={toggleState === 5 ? "content  active-content" : "content"}
                                        >
                                            <Image src={Neon} alt="neontech logo" className='content-images' loading='lazy' />
                                            <p className='seeds'>NEONTECH</p>
                                            <span className='seeds-span'>FIBO
                                            </span>
                                            <p className='seeds-para'>
                                                We had such a great experience at FIBO this year. Our stand was really well built for potential clients, and people tried out all the machines, and any adaptations we needed to make to the stands FIBO's team helped us out and made the changes necessary. We are so happy to be here.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-6 col-m-12  col-t-12">

                                        <div
                                            className={toggleState === 4 ? "content  active-content" : "content"}
                                        >
                                            <div className="iframe-video">

                                                <iframe width={560} height={315} loading='lazy' src="https://www.youtube.com/embed/BpcT12Zavac?si=7twG6EZ-gu6kbXle" title='Class X' ></iframe>
                                            </div>
                                        </div>
                                        <div
                                            className={toggleState === 1 ? "content  active-content" : "content"}
                                        >
                                            <div className="iframe-video">

                                                <iframe width={560} height={315} loading='lazy' src="https://www.youtube.com/embed/noejqUWglQI?si=bS9b2fVtDMdrZRme" title='Zim Trade' ></iframe>
                                            </div>
                                        </div>
                                        <div
                                            className={toggleState === 2 ? "content  active-content" : "content"}
                                        >

                                            <div className="iframe-video">
                                                <iframe width={560} height={315} loading='lazy' src="https://www.youtube.com/embed/Oi_U85waJLA?si=J2N4L20rUJAqX-vD" title='NFSSP' ></iframe>
                                            </div>

                                        </div>
                                        <div
                                            className={toggleState === 3 ? "content  active-content" : "content"}
                                        >
                                            <div className="iframe-video">
                                                <iframe width={560} height={315} loading='lazy' src="https://www.youtube.com/embed/9HVj4-mjfDM?si=N3Z_oIECjylE5uig" title='Fresh Perch'></iframe>
                                            </div>

                                        </div>

                                        <div
                                            className={toggleState === 5 ? "content  active-content" : "content"}
                                        >
                                            <div className="iframe-video">
                                                <iframe width={560} height={315} loading='lazy' src="https://www.youtube.com/embed/0IFQ-enCLf8?si=hNhWJyAbUhCSr0KN" title='NEONTECH' ></iframe>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="design_btn">
                                <Link href="/design/" className='des_btn second'>Explore Design</Link>


                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                </div>
            </div>
            <div className="work-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <h2 className='work-heading'>Blog Bank</h2>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <div className="row">
                        <ArticleBlog />

                    </div>
                </div>
            </div>
            <div className="logo-1">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-l-12"><h2 className='slider-heading'>OUR CLIENTS</h2></div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <LogoSLider />

                    </div>

                </div>
            </div>
            <Counterup />
            <Mainform/>
            <Footer/>
        </div>
    )
}

export default HomeContent