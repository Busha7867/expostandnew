'use client';
import React from "react";
import CVideo from '@/Components/Images/Video/vid.webm';
import Link from "next/link";
import Image from "next/image";
import Germany from '@/Components/majorcities/Muni.jpg';
import '@/app/casestudy.css';


const CaseStudy = () => {

  

    return (
        <div className="section">
            
           

            <div className="major-1 caseStudy">
                <div className="container">
                    <div className="row"  >

                        <div className="col-6 col-m-12">
                            <h1 className="major-head majors">Case Studies</h1>


                        </div>
                        <div className="col-6 col-m-12">
                            <div className="company_contentbox">

                                <Image src={CVideo} alt="" className='big-img' width={300} height={300}/>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
            <div className="casestudy1">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-m-12">
                            <h2 className="globalheading">OUR SUCCESS STORIES </h2>


                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                    With hundreds of trade fairs and exhibition shows to attend each and every year all across China to promote their brands and products, international companies may find themselves looking for the best exhibition stand builder in China in order to produce a stand-out booth to best represent their brands. With many experts in the field claiming to be the best in the industry, it is vital to recognize quality. Here at expo stand services, we serve our clients with complete honesty and transparency, which makes us the most trusted brand among our esteemed clients. Our satisfied clients have complete faith in us for delivering the best possible results at the best possible price.





                                </p>

                            </div>


                        </div>

                    </div>


                </div>
            </div>
            <div className="casestudy2">
                <div className="container">
                    <div className="row">
                        <div class="col-4 col-m-12 ">
                            <div class="serviceBox">
                                <div class="service-icon">
                                    <span> <Image src={Germany} alt="GermanyFlag" /></span>
                                </div>
                                <h3 class="title">Fair Name : IBA 2018</h3>
                                <p class="description">Stand Size : 817 SQMT</p>



                                <div className="case_btn">

                                    <div className="case-quote">

                                      <Link href
                                      ="/bole/">  <button type='submit' id='submit-btn' className='get-free  case_quot'>Read More</button>
                                      </Link>





                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4 col-m-12">
                        <div class="serviceBox">
                                <div class="service-icon">
                                    <span> <Image src={Germany} alt="GermanyFlag" /></span>
                                </div>
                                <h3 class="title">Fair Name : IBA 2018</h3>
                                <p class="description">Stand Size : 817 SQMT</p>



                                <div className="case_btn">

                                    <div className="case-quote">

                                       <Link href="/bole/"> <button type='submit' id='submit-btn' className='get-free  case_quot'>Read More</button></Link>





                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4 col-m-12 ">
                        <div class="serviceBox">
                                <div class="service-icon">
                                    <span> <Image src={Germany} alt="GermanyFlag" /></span>
                                </div>
                                <h3 class="title">Fair Name : IBA 2018</h3>
                                <p class="description">Stand Size : 817 SQMT</p>



                                <div className="case_btn">

                                    <div className="case-quote">

                                      <Link href="/bole/">  <button type='submit' id='submit-btn' className='get-free  case_quot'>Read More</button></Link>





                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default CaseStudy;