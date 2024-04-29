'use client';

import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Lub from '@/Components/Logoslider/Secutech.png';
import anuga from '@/Components/Logoslider/anuga2023.png';
import Info from '@/Components/Logoslider/infocom2023.png';
import Cb from '@/Components/Logoslider/cbme.png';
import Mon from '@/Components/Logoslider/medica.png';
import Fs from '@/Components/Logoslider/fsb.png';
import Ib from '@/Components/Logoslider/ibc.png';
import CWM from '@/Components/Logoslider/cwieme.png';
import { IoStarSharp, IoStarHalf } from "react-icons/io5";

const Testimonial = () => {
    return (
        <>
            <div className="swiperTest">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation

                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Lub} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>The design and Quality materials used are really good. Appreciate all the efforts and hard work done by your team to build up the stall. We got a timely handover of the stall. Looking forward to working with you on other projects as well. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name"> KSHITIZ PANDYA</span>
                                                    <span className="job">Exhibition - Lubi Industries
                                                        Exhibition - Secutech3-2023</span>
                                                    <div className="flex1">

                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={anuga} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>The services from Expo Stand services for Cambodia Rice Federation for Anuga Food Fair 2023 in Cologne, Germany excellent performance. The design and construction of the stand are high-quality in both material and design printing. We highly recommend Expo Stand Services for Construction for any international Expo and Trade Fair. Thank you</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name"> Lun Yeng</span>
                                                    <span className="job">Exhibition -Cambodia Rice Federation
                                                        Exhibition -  Anuga -2023</span>
                                                    <div className="flex1">

                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Info} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>Expo Stand provided us in the last minute with a 20x20 booth for the InfoComm 2023 in Orlando. Everything from a great design with a banner and frame displaying our new products to the service on site was superb and we are definitely going to continue working with them for the future trade shows. Thanks a lot for your great job! </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name"> Maggie Schaefer</span>
                                                    <span className="job">Exhibition - CODA in InfoComm 2023 </span>
                                                    <div className="flex1">


                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />


                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Cb} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>Expo Stand Services were amazing. We just did the CBME fair with them in Shanghai, and we had a smooth fuss free experience right from the start to the end.
                                                    <br />

                                                    Anna, Wictor & Fenny- they were all amazing and we would love to work with them again. Attaching some pictures of our booth, which got a lot of positive attention from every passer by</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Tanvi Garg</span>
                                                    <span className="job">Exhibition - Citron Client in CBME Exhibition 2023</span>
                                                    <div className="flex1">


                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />

                                                        <IoStarHalf className='star' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Mon} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>Very Helpful Team, happy to help at all times.We are very happy with the work Helen and her team  have done for   us so far and we look forward to working  with  expostand services again in the future 5 star. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Rachel Tobin</span>
                                                    <span className="job">Exhibition -Precision UK
                                                        Exhibition - Medica</span>
                                                    <div className="flex1">


                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarHalf className='star' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Fs} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>They are the best! Our stand  was perfect! All Expo Stand Services staff (offices,construction team) is the best!Polite & Professional...to trust them, it was the best choice we could make. Thanks a lot for all!!! Biotrohos SA Greece.</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Georgia Stavrou</span>
                                                    <span className="job">Exhibition - Biotrohos
                                                        Exhibition - FSB
                                                    </span>
                                                    <div className="flex1">


                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarHalf className='star' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={Ib} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>It Was a great experience with this company to cooperate for our exhibition which was in Amesterdam.it was our first cooperation and all went very well.Their team was so helpful and they tried their best to meet the expectations.We will consider to cooperate again for future exhibition. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Pinar Tunali</span>
                                                    <span className="job">Exhibition - Fortinge Client in IBC Exhibition 2023</span>
                                                    <div className="flex1">

                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarHalf className='star' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <Image src={CWM} alt="client testimonial logo" className="testi-image" />
                                                </div>
                                                <p>Expo Stand Services designed and installed our stand at CWIEME Berlin 2023. They professionally managed the whole process from start to finish. Our questions were answered completely and our expectations were fulfilled on time. Thank you to all team for their friendly approach and support. We will meet again next year.</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Şef Sarım</span>
                                                    <span className="job">Exhibition - SefSarim in CWIEME Berlin 2023 </span>
                                                    <div className="flex1">


                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarSharp className='star' />
                                                        <IoStarHalf className='star' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Testimonial;