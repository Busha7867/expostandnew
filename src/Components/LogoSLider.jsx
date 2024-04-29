
"use client";

import React ,{Component} from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Logo1 from '@/Components/Logoslider/img1.png';
import Logo2 from '@/Components/Logoslider/img5.png';
import Logo3 from '@/Components/Logoslider/img4.png';
import Logo4 from '@/Components/Logoslider/img6.png';
import Logo5 from '@/Components/Logoslider/img7.png';
import Logo6 from '@/Components/Logoslider/img8.png';
import Logo7 from '@/Components/Logoslider/img9.png';
import Logo8 from '@/Components/Logoslider/img10.png';
import Logo9 from '@/Components/Logoslider/img12.png';
import Logo10 from '@/Components/Logoslider/img13.png';


class LogoSLider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="bind">

                <div className="logo-1">
                    <div className="container">

                        <div className="mainContainer">
                            <Slider {...settings}>
                                <div className="container">
                                    <Image src={Logo1} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo2} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo3} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo4} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo5} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo6} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo7} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo8} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo8} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo9} alt='our clients logo' loading='lazy' />
                                </div>
                                <div className="container">
                                    <Image src={Logo10} alt='our clients logo' loading='lazy' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>



            </div>



        );
    }
}


export default LogoSLider;