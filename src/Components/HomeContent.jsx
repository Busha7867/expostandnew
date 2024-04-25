import React from 'react';
import vide from '@/Components/Videoplay/videohome.webm';
const HomeContent = () => {
    return (
        <div>

            <div className="video_content">
                <video src={vide} autoPlay loop muted className='home_video'></video>


                <div className="expo-video">


                    <div className="quote">

                        <div className="button-quote">

                            <button type='submit' id='submit-btn' className='get-free btn-quote'>Get A Free Quote</button>




                        </div>
                    </div>

                    <div class="marquee">
                        <div>
                            <span>Transforming Great Design Into World-Class Exhibits</span>
                            <span>We Don't Make It Possible-We Make It Happen</span>
                            <span>Individually We Are unique, Together-We Are ExtraOrdinary</span>
                            <span>Transforming Great Design Ideas InTo World-Class Exhibits</span>
                            <span>A Team Of Specialists, With a Goal To Dominate The Exhibition Space Worldwide</span>
                            <span>Ambitious Leaders Connected By The Power of Infectious Creativity</span>

                        </div>
                    </div>




                </div>


            </div>
            
        </div>
    )
}

export default HomeContent