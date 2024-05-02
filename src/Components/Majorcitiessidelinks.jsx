import React from 'react'
import Link from 'next/link'

const Majorcitiessidelinks = () => {
    return (
        <div>


            <div className="cities_box" >
                <div className="cities">
                    <div className="cities_head">
                        <h4 className="cities_hd">MAJOR EXHIBITING COUNTRY</h4>
                    </div>
                    <div className="cities_links">
                        <Link href='/exhibition-stand-contrachrefr-in-uk/' className="cities_item">UK</Link>
                        <Link href='/exhibition-stand-designs-in-germany/' className="cities_item">Germany</Link>
                        <Link href='/exhibition-stand-design-in-netherlands/' className="cities_item">Netherlands</Link>
                        <Link href='https://www.expostandservice.us/trade-show-booth-design/' className="cities_item">USA</Link>
                        <Link href='/exhibition-stand-contrachrefr-in-dubai/' className="cities_item">UAE</Link>
                        <Link href='/exhibition-design-company-in-switzerland/' className="cities_item">Switzerland</Link>
                        <Link href='/exhibition-design-company-in-spain/' className="cities_item">Spain</Link>
                        <Link href='/exhibition-stall-design-company-in-india/' className="cities_item">India</Link>
                        <Link href='/exhibition-stand-design-in-china/' className="cities_item">China</Link>
                        <Link href='/exhibition-stand-design-company-in-italy/' className="cities_item">Italy</Link>
                        <Link href='/booth-stand-design-company-in-france/' className="cities_item">France</Link>
                        <Link href='/exhibition-stand-design-in-thailand/' className="cities_item">Thailand</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Majorcitiessidelinks