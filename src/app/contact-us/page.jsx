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
        description: "Exhibition stand design company in Germany, Exhibition stand contractor, tread show booth design company in USA",
        site_name: "Trade-Pros",
        publisher: "https://www.facebook.com/expostandservice",
        modified_time: "2023-09-12T06:27:37+00:00",
        image: {
            url: "https://www.expostandservice.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-03-at-8.48.16-PM.jpeg",
            width: 1280,
            height: 379,
            type: "image/jpeg"
        }
    },
    twitter: {
        card: "summary_large_image",
        site: "@expostandservic",
        label1: "Est. reading time",
        data1: "1 minute"
    }
};


export default function Cont() {
    return (
        <div><Contactus /></div>
    )
}

