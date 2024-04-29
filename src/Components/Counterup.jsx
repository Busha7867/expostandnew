'use client';
import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaUsersCog } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";


const Counterup = () => {
 
    const [counterOn, setCounterOn] = useState(false);


    return (
        
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className="count-flex grid">
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={750} duration={5} delay={1} />}
                    <div class="counter-icon">
                        <span><FaUserCheck/></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Clients</span>




                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={3950} duration={8} delay={1} />}
                    <div class="counter-icon">
                        <span><i class="fas fa-project-diagram"></i></span>
                    </div>


                    +
                    <br />
                    <span className='counter-span'>Projects</span>





                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={5} duration={9} delay={2} />}

                    <div class="counter-icon">
                        <span><i class="fas fa-globe-europe"></i></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Continents</span>






                </div>
                <div className='counter'>

                    {counterOn && <CountUp start={0} end={320} duration={9} delay={1} />}
                    <div class="counter-icon">
                        <span><i class="fas fa-store-alt"></i></span>
                    </div>
                    +
                    <br />
                    <span className='counter-span'>Exhibitions</span>




                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Counterup