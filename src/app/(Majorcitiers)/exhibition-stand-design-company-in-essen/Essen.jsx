'use client';


import React from "react";
import Link from "next/link";
import Majorleftcities from "@/Components/Majorleftcities";
import Stickform from "@/Components/stickform";




const Essen = () => {


    


    return (
        <div className="section">
           

            <div className="germany-1 essen-1">
                {/* <video src={GermanyVideo} autoPlay muted className="gervideo"></video> */}
                <div className="container">
                    <div className="row ">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12">
                            <div className="glassEffect">
                                <h1 className="glass_headinggermany">Exhibition Stand Design Company In Essen</h1>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>

            </div>
            <div className="germany-2">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head">
                                Expo Stand Service – Exhibition Stand Design Company In Essen<i class="fas fa-globe-europe"></i></h2>
                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-8 col-m-12 col-t-12">


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>
                                    Our global reputation as a leading trade show booth design and booth rental company knows no limitations. We serve our clients and customers in almost every corner of the world ranging from European countries to the Arabian Peninsula and American/Australian Continents. Essen is no exception. However, we hold a great deal of respect and admiration for Essen as a global hub for exhibitions and trade shows. Essen, located in the heart of Germany, is the second-most populous city and urban area in the country. This makes it a global platform for businesses, exhibitors, sponsors to unite and bring forth their creative ideas to explore new opportunities for expansion and exposure.



                                </p>

                            </div>
                            <h2 className="german_para" >Offering Turnkey Services</h2>

                            <div className="german_paragraph">

                                <div className="flex-container">


                                    <p className='intro-para3 germanpara'>
                                        Our experienced designers are always ready to create an eye-catching <Link href="/">trade show booth design </Link> and promise to present a stand that exceeds your expectations. With several, prominent and profitable companies flocking Essen to exhibit their products and services, we can provide limitless options to help make a standalone presence. Competition is stiff in Essen but that does not stop us from offering the most creative range of services to help create new opportunities and gain an edge in the competition. If you want to outclass other exhibitors in Essen, you don’t need to hire an expensive exhibition stand contractor in Essen or invest heavily to ensure great quality in your exhibition stands. You just need to have faith in us. As a leading exhibition booth builder in Essen, we are not just the best in services but our prices also suit every pocket.


                                    </p>
                                </div>
                                <div className="request_quote" >
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">
                                    Start the exhibition planning for your brand today!</p>

                            
                                <Link class="cta" href="/contact-us/">
                                    <span>Request a Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

                            </div>  

                            </div>

                           


                            <h3 className="german_para" >A Strong Presence In The European Market</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                We understand that every business is different in size and reputation, which is why we strive to figure out the needs and objectives of our clients and devise a strategy that performs well according to their business obligations.

                                    <br />
                                    <br />

                                    Ideally, we are a reliable exhibition stand design company in Essen that has been founded with the sole intention of creating an economical and reliable stage where businesses can find best-in-class services for all their exhibition needs. We have been serving our clients and partners in the European market for years now and are still growing stronger than ever. We have crafted well over hundreds of designs for our clients in Europe and all around the world.


                                </p>







                            </div>






                        </div>
                        <div className="col-4 col-m-12">
                   <Majorleftcities/>
                   <Stickform/>

                        </div>
                    </div>
                </div>
             








            </div>


        </div>
    )
}

export default Essen;