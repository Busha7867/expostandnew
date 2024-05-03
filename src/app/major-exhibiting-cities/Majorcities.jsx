'use client';
 
import React from "react";


import Amsterdam from '@/Components/majorcities/Amsterdam.jpg';
import Bolgana from '@/Components/majorcities/bolgana.jpg';
import Atlanta from '@/Components/majorcities/atlanta.jpg';
import Anaheim from '@/Components/majorcities/anaheim.jpg';
import UAE from '@/Components/majorcities/UAE.jpg';

import India from '@/Components/majorcities/india.webp';
import UK from '@/Components/majorcities/uk.jpg';

import Italy from '@/Components/majorcities/italy.jpg';
import Germany from '@/Components/Images/abudhabi.jpg';

import Berlin from '@/Components/majorcities/Berlin.jpg';
import Bangkok from '@/Components/majorcities/bangkok.jpg';
import Barcelona from '@/Components/majorcities/Barcelona.jpg';
import Birmingham from '@/Components/majorcities/birmingham.jpg';
import Basel from '@/Components/majorcities/base.jpg';
import Brussels from '@/Components/majorcities/brussels.jpg';
import Milan from '@/Components/majorcities/milan.jpg';
import Munich from '@/Components/majorcities/munich.jpg';
import orealns from '@/Components/majorcities/orealns.jpeg';
import Newyork from '@/Components/majorcities/newyork.jpg';
import Orlando from '@/Components/majorcities/orlando.jpg';
import Poznan from '@/Components/majorcities/poznan.jpg';
import Sau from '@/Components/majorcities/sau.jpg';
import Satte from '@/Components/majorcities/satte.jpg';
import Stutt from '@/Components/majorcities/Stutt.jpg';
import Utrecht from '@/Components/majorcities/Utrecht.jpg';

import Beijing from '@/Components/majorcities/Beijing.jpeg';
import Bern from '@/Components/majorcities/Bern.jpg';
import Boston from '@/Components/majorcities/Boston.jpg';
import Cannes from '@/Components/majorcities/Cannes.jpg';
import Copenhagen from '@/Components/majorcities/Copenhagen.jpg';
import Cologne from '@/Components/majorcities/Cologne.webp';
import Dusseldorf from '@/Components/majorcities/Dusseldorf.jpg';
import Dort from '@/Components/majorcities/dortmund.jpg';
import Istanbul from '@/Components/majorcities/Istanbul.jpg';
import Lyon from '@/Components/majorcities/Lyon.jpg';
import LosAngles from '@/Components/majorcities/LosAngles.webp';
import Miami from '@/Components/majorcities/Miami.jpg';
import Paris from '@/Components/majorcities/Paris.jpg';
import Shanghai from '@/Components/majorcities/Shanghai.jpg';
import SanFransico from '@/Components/majorcities/SanFrancisco.jpg'

import Liepzig from '@/Components/majorcities/Liepzig.jpg';
import Hamburg from '@/Components/majorcities/Hamburg.jpg';
import Warsaw from '@/Components/majorcities/Waraw.jpg';
import Verona from '@/Components/majorcities/Verona.jpg';
import Zurich from '@/Components/majorcities/Zurich.webp';
import SanDiego from '@/Components/majorcities/SanDieago.jpg';
import Madrid from '@/Components/majorcities/Madrid.jpg';
import Capetown from '@/Components/majorcities/CapeTown.jpg';
import Essen from '@/Components/majorcities/essen.jpg';
import Frank from '@/Components/majorcities/frankfurt.jpg';
import Geneva from '@/Components/majorcities/geneva.jpg';
import Hann from '@/Components/majorcities/hannover.jpg';
import Johan from '@/Components/majorcities/johannesburg.jpg';
import Losvegas from '@/Components/majorcities/losvegas.jpg';
import Nurmberg from '@/Components/majorcities/Nuernberg.jpg';
import Rotterdam from '@/Components/majorcities/ratter.jpeg';
import Vienna from '@/Components/majorcities/Vienna.jpeg';
import Image from "next/image";
import Link from "next/link";


const Majorcities = () => {
    
const scrollTop=()=>{
    window.scrollTo(100,100)
}

    return (
        <div className="section">
        

            <div className="major-1">
                <div className="container">
                    <div className="row"  >
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12">
                            <h1 className="major-head">Major Exhibiting Cities Across The Globe</h1>
                            <p className="expe-standpara">Exhibiting at trade show provides various benefits to your business. Unlike other marketing activities, exhibition offers a wide platform for exhibitors to showcase their products, and services to a more receptive audience. Exhibition participation can help you find customers who are pro-actively looking for a deal. To help you find exhibition and trade shows for your specific domain, we have added the top global exhibition cities conducting biggest exhibitions in different industries. Being the leading exhibition stand design company in Europe, we have brought this page for you with upcoming exhibition to update and guide you in finding cities conducting major exhibitions and trade shows worldwide.</p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row"  >

                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-abu-dhabi/" className='box-link'onClick={scrollTop} target="blank">
                                <div className="world-img">
                                    <Image src={Germany} alt="GermanyFlag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Abu Dhabi</p>
                            </Link>
                        </div>
                       
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-amsterdam/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Amsterdam} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Amsterdam</p>
                            </Link>
                        </div>
                       
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-rental-in-atlanta/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Atlanta} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Atlanta</p>
                            </Link>
                        </div>
                       
                        
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-rentals-in-anaheim/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Anaheim} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Anaheim</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builders-in-barcelona/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Barcelona} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Barcelona</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-bangkok/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Bangkok} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Bangkok</p>
                            </Link>
                        </div>
                       
                        
                    
                  
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builders-in-beijing/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Beijing} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Beijing</p>
                            </Link>
                        </div>
                      
                        
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-berlin/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Berlin} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Berlin</p>
                            </Link>
                        </div>
                        
                       
                  
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-in-bern/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Bern} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Bern</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-rental-in-boston/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Boston} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Boston</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-bologna/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Bolgana} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Bologna </p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-birmingham/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Birmingham} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Birmingham</p>
                            </Link>
                        </div>

                        
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-basel/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Basel} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Basel</p>
                            </Link>
                        </div>
                        
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-brussels/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Brussels} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Brussels</p>
                            </Link>
                        </div>


                       
                       
                      
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-in-cannes/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Cannes} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Cannes</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-copenhage/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Copenhagen} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Copenhagen</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-cologne/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Cologne} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Cologne</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-cape-town/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Capetown} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Cape Town</p>
                            </Link>
                        </div>
                         
                        <div className="box mbox">
                            <Link href="/exhibition-booth-contractor-in-dortmund/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Dort} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Dortmund</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-dusseldorf/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Dusseldorf} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Dusseldorf</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-contractor-in-dubai/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={UAE} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Dubai</p>
                            </Link>
                        </div>
                        
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-essen/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Essen} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Essen</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-frankfurt/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Frank} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Frankfurt</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-geneva/" className='box-link' target="blank">
                                <div className="world-img">
                                    <Image src={Geneva} alt="uaeflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Geneva</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-hamburg/" className='box-link' target='_blank'>
                                <div className="world-img">
                                    <Image src={Hamburg} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Hamburg</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-hannover/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Hann} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Hannover</p>
                            </Link>
                        </div>


                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-istanbul/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Istanbul} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Istanbul</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-johannesburg/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Johan} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Johannesburg</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-contractor-in-leipzig/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Liepzig} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Leipzig</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-contractor-in-london" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={UK} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>London</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-lyon/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Lyon} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Lyon</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-rentals-in-las-vegas/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Losvegas} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Las Vegas</p>
                            </Link>
                        </div>
                        
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-displays-los-angeles/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={LosAngles} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Los Angles</p>
                            </Link>
                        </div>
                           
                        <div className="box mbox">
                            <Link href="/trade-show-booth-rentals-in-miami/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Miami} alt="italyflag" className='indianflag indianflags' />
                                </div>
        
                                <p className='world-para'>Miami</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-milan/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Milan} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Milan</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-munich/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Munich} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Munich</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-madrid/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Madrid} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Madrid</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stall-design-company-in-india/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={India} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>New Delhi</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-design-company-in-new-orleans/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={orealns} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>New Orleans</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/new-york-booth-rental/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={ Newyork} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>New York</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-nuremberg/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={ Nurmberg} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Nuremberg</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-rental-in-orlando/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={ Orlando} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Orlando</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="/exhibition-stand-builders-in-paris/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Paris} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Paris</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-poznan/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Poznan} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Poznan</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-rotterdam/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Rotterdam} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Rotterdam</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/trade-show-booth-builder-in-san-francisco/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={SanFransico} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>San Francisco</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-sao-paulo/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Sau} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Sao paulo</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="https://www.expostandservice.us/san-diego-trade-show/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={SanDiego} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>San Diego</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/trade-show-booth-display-company-in-seattle/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Satte} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Seattle</p>
                            </Link>
                        </div>
                          
                        <div className="box mbox">
                            <Link href="/booth-design-company-in-shanghai/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Shanghai} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Shanghai</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-stuttgart/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Stutt} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Stuttgart</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-builder-in-utrecht/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Utrecht} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Utrecht</p>
                            </Link>
                        </div>

                        <div className="box mbox">
                            <Link href="/exhibition-booth-builder-in-verona/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Verona} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Verona</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/stand-builders-in-vienna/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Vienna} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Veinna</p>
                            </Link>
                        </div>
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-in-warsaw/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Warsaw} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Warsaw</p>
                            </Link>
                        </div>
                     
                     
                        <div className="box mbox">
                            <Link href="/exhibition-stand-design-company-in-italy/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Italy} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Italy</p>
                            </Link>
                        </div>
                        
                        
                     
                      
                  
                        
                        <div className="box mbox">
                            <Link href="/" className='box-link'  target='_blank'>
                                <div className="world-img">
                                    <Image src={Zurich} alt="italyflag" className='indianflag indianflags' />
                                </div>

                                <p className='world-para'>Zurich</p>
                            </Link>
                        </div>
                      
                       
                        

                        


                    </div>

                </div>


            </div>

        </div>
    )
}
export default Majorcities;