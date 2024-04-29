'use client';

import React from 'react';
import './Expanding.css';
import { useEffect } from 'react';
import $ from 'jquery';
import { IoIosFlower } from "react-icons/io";


const Expandingcard = () => {

    
    useEffect(() => {
        $(".option").click(function(){
            $(".option").removeClass("active");
            $(this).addClass("active");
            
         });
         
      }, []);
    return (
        <div>



            <div class="options">
                <div class="option active opti1" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Double Decker</div>
                           
                        </div>
                    </div>
                </div>
                <div class="option opti2" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Custom Stand</div>
                            
                        </div>
                    </div>
                </div>
                <div class="option opti3" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                      <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Country Pavilion</div>
                            
                        </div>
                    </div>
                </div>
                <div class="option opti4" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                           <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Modular Stand</div>
                          
                        </div>
                    </div>
                </div>
                <div class="option opti5" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                         <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Double Decker</div>
                         
                        </div>
                    </div>
                </div>
                <div class="option opti5" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                         <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Inatethi</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option opti5" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                         <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Custom Pavilion</div>
                            
                        </div>
                    </div>
                </div>
                <div class="option opti5" >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                         <IoIosFlower/>
                        </div>
                        <div class="info">
                            <div class="main">Modualar Stand</div>
                           
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Expandingcard;