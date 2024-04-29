import React from 'react';
import UniverseVideo from '@/Components/Images/worldMap.mp4';
import '@/Components/footer.css';
const Universe = () => {
    return (
        <div>


            <div className="universe-1">
                <div className="universe-video">
                    <video src={UniverseVideo} autoPlay loop muted ></video>

                    <div className="overlay">
                        <ul className="universe-item">
                            <li className="universe-list">Poland <br /><a href="tel:+48616255500"><i class="fa-solid fa-phone"></i>+48-616255500</a></li>
                            <li className="universe-list">UK <br /> <a href="tel: +442032861646"><i class="fa-solid fa-phone"></i>
                                +44 20 3286 1646</a></li>
                            <li className="universe-list">USA <br /> <a href="tel:+1(702)6050607"><i class="fa-solid fa-phone"></i>+1(702) 605-0607</a></li>
                            <li className="universe-list">UAE <br /> <a href="tel:+971567383998"><i class="fa-solid fa-phone"></i>+971-567383998</a></li>
                            <li className="universe-list">India <br /> <a href="tel:+91203570565"><i class="fa-solid fa-phone"></i>+9120 3570565</a></li>
                        </ul>
                    </div>
                </div>
                <div className="reserved"><span>©  {new Date().getFullYear()}  Expo Stand Services. All rights reserved.</span></div>



            </div>

        </div>
    )
}

export default Universe;