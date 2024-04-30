import React from 'react';
import Contactus from './Contactus';

export const metadata = {
    title: "Exhibition stand design company in Germany | Expo stand service",
    description: "Exhibition stand design company in Germany, Exhibition stand contractor, tread show booth design company in USA.",
    alternates: {
        canonical: "https://www.expostandservice.com/contact-us/"
      },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Contact Us",
        description: "Contact us for the finest quality spices and rice for making the best tasting dishes.",
        url: "https://trade-pros.org/contact-us/",
        site_name: "Trade-Pros",
        publisher: "https://www.facebook.com/tradepross",
        modified_time: "2023-09-05T12:07:32+00:00",
        image: {
            url: "https://trade-pros.org/wp-content/uploads/2022/11/logo.png",
            width: 974,
            height: 750,
            type: "image/png"
        }
    },
    twitter: {
        card: "summary_large_image",
        site: "@trade_pross",
        label1: "Est. reading time",
        data1: "1 minute"
    }
};


export default function Cont () {
  return (
    <div><Contactus/></div>
  )
}

