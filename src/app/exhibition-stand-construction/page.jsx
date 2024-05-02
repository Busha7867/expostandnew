'use client';

import React, { useState } from "react";
import '@/app/design.css';
import Link from "next/link";
import Image from "next/image";
import DesigVideo from '@/Components/Images/Video/boothconclusion.gif';
import Constructimg from '@/Components/Images/constructio.webp';
import Stickform from "@/Components/stickform";








export default function ExhibitionConstruction() {
    const [show, toggleShow] = useState(false);

 


    return (
        <div className="construction_section">
         

            <div className="construction-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 standConstruction col-m-12">
                            <h1 className="construction_head">Exhibition Stand Construction </h1>
                        </div>
                        <div className="col-6 col-m-12">
                            <div className="construction_img">
                                <Image src={DesigVideo} alt="exhibition stand construction" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="construction-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="construction_head2">Exhibition Stand Construction Company in Germany
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <p className="intro-para3 germanpara">

                                Expo Stand Services is a leading Exhibition Booth Designing &amp; Construction Company that
                                understands the fact that every brand has a unique requirement. Therefore, as a custom exhibition
                                stand construction company in Germany, we can help in making a personalized design that appraises
                                your stand space and meets all your brand requirements. We are always working closely with our
                                clients as a competent<Link href="/exhibition-stand-builder/"> exhibition stand builder </Link> across the globe.




                                <br />
                                <br />
                                We have a manufacturing setup and competencies that are required to create an impactful
                                exhibition stand construction company in Germany that’ll blend perfectly with your corporate goals.
                                Choose us for an enticing experience as we serve all your exhibition needs with the expertise that
                                helps us become the best exhibition stand builder. We’ve operated in the exhibition stand design
                                industry for long enough to know that while preparing for an upcoming exhibition, every exhibitor
                                wants their stand to look fabulous and be installed in the venue in due time. We take care of the
                                same by assisting our clients in every way possible. Our company comprises of not only a team of
                                trained professionals for designing a visually stunning booth, but also a dedicated team for installing
                                it professionally. Every stand we design, is made to fit our clients’ requirements, so that they get a
                                unique design. Not only that, but you can also choose from a range of stands as per your needs.
                                From a lightweight portable stand, to an elegant double decker design or a country pavilion stand,
                                you can choose anything.


                            </p>
                            <p className="para_expertize germanyparastand">No matter what the scale of your exhibition stand is, we have the bandwidth for its construction. We
                                are available 24x7 to deliver the best exhibition services, both in Germany and around the world.</p>
                            <div className="request_quote" >
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">Perfect place to transform your vision into reality </p>


                                <Link className="cta" href="/contact-us/">
                                    <span>Request A Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

                            </div>

                            <div className="row gifrow">
                                <div className="col-6 col-m-12">
                                    <Image src={Constructimg} alt="exhibition stand construction" className="constimg" />
                                </div>
                                <div className="col-6 col-m-12">
                                    <p className="gif_para">You can select the <a href="https://www.expostandservice.us/">trade show booth </a> building material, exhibition stand specifications, or the type of
                                        exhibition stands; and we will develop the design as you want. We aim at providing you the perfect
                                        experience so that our associating is a lasting one. This is what makes us the best choice for all your
                                        needs. To get free design proposal, WhatsApp us at… <a href="https://api.whatsapp.com/send?phone=48616255500">+48-616255500</a>or email at  <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></p>
                                </div>

                            </div>



                        </div>

                        <div className="col-4 col-m-12">




                            <div className="audiohide">
                                <div className="baudio">
                                    <button className="button_audio" onClick={() => toggleShow(!show)}>{show ? "Our Services" : "Our Services"}</button>
                                </div>

                                {show && <div className="AudioList">
                                    <ul>

                                        <li><Link href="/exhibition-stand-consultation/">Consultation</Link></li>
                                        <li><Link href="/exhibition-stand-design/">Exhibition Stand Design</Link></li>
                                        <li><Link href="/exhibition-stand-construction/">Stand Construction</Link></li>
                                        <li><Link href="/exhibition-graphic-designing-and-production/">Graphic Production</Link></li>
                                        <li><Link href="/exhibition-stand-management/">Exhibition Stand Management</Link></li>
                                        <li><Link href="/exhibition-stand-audio-visual/">Audio & Visual</Link></li>
                                        <li><Link href="/exhibition-stand-installation-dismantling/">Installing & Dismantling</Link></li>
                                    </ul>




                                </div>}
                            </div>





                          <Stickform/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )


}

