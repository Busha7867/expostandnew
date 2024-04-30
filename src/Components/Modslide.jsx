import React from 'react'
import { useState } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import Mod7 from '@/Components/Portimage/Moular/Modular7.jpg';
import Mod8 from '@/Components/Portimage/Moular/Modular8.jpg';
import Mod9 from '@/Components/Portimage/Moular/Modular9.jpg';


const Exhibitionslider = () => {

    const images = [
        
    
        {
            src:'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular7.webp',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src:'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular8.webp',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
        {
            src:'http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular9.webp',
            alt: 'Mechanical keyboard with white, pastel pink, yellow and red keycaps.',
        },
      
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className='popslider'>
            <div className="container">
                <div className="row">
                    <div className="grids">
                   
                    <img src="http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular7.webp" alt="" onClick={()=> {setIsOpen(true)}}className='grid_image3'  loading='lazy'/>
                    <img src='http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular8.webp' alt="" onClick={()=> {setIsOpen(true)}}className='grid_image3' loading='lazy' />
                    <img src='http://localhost:5173/src/Components/Pages/Portimage/Moular/Modular9.webp' alt="" onClick={()=> {setIsOpen(true)}}className='grid_image3' loading='lazy'/>
                 
                    </div>
                    {/* <button onClick={() => { setIsOpen(true) }}>
                        <img src={image1} alt="" />
                    </button> */}
                    <SlideshowLightbox
                        images={images}
                        showThumbnails={true}
                        open={isOpen}
                        lightboxIdentifier="lbox1"
                        onClose={() => { setIsOpen(false) }}>
                    </SlideshowLightbox>
                </div>
            </div>
        </div>
    )
}
export default Exhibitionslider;