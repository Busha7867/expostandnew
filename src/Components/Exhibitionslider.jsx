
import React from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css';


import '@/app/innerpages.css';
import Image from 'next/image';
import cust from '@/Components/Portimage/Custom/Custom1.jpg'



const Exhibitionslider = () => {
    return (
        <div className="popslider">
            <div className="container">
                <div className="row">
                    <SlideshowLightbox  theme="lightbox" showThumbnails={true} className='grids'>
                        <img onClick={() => { setIsOpen(true) }} className='grid_image1' loading='lazy' src='https://www.expostandservice.com/wp-content/uploads/2022/12/27-2-min-1024x658.jpg' alt='image' />
                        <img  onClick={() => { setIsOpen(true) }} className='grid_image1' loading='lazy' src='https://www.expostandservice.com/wp-content/uploads/2022/12/27-2-min-1024x658.jpg' alt='image' />
                        <img onClick={() => { setIsOpen(true) }} className='grid_image1' loading='lazy' src='https://www.expostandservice.com/wp-content/uploads/2022/12/25-2-min-1024x658.jpg' alt='image'/>

                    </SlideshowLightbox>
                    
                </div>
               
            </div>
        </div>
    )
}
export default Exhibitionslider;