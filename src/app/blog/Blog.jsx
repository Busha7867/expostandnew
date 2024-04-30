'use client';

import React from "react";
import Blogicon from '@/Components/Images/Buildinstall.webp';
import image2 from '@/Components/Images/KIVI.webp';
import image1 from '@/Components/Images/blogimgages.webp';
import image3 from '@/Components/Images/ASTRA.webp';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import '@/app/innerpages.css';

import axios from "axios";
import { FaMapPin } from "react-icons/fa6";




export default function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://www.expostandservice.com/wp-json/wp/v2/posts', {
          params: {
            per_page: 50,
            _embed: true
          }
        });
        setPosts(result.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="blog_section">


      <title>We are providing latest exhibition stand design &amp; builder services</title>
      <meta name="description" content="Expo stand is a platform where you can updated your self regarding exhibition stand design and exhibition stand building tips and tricks." />
      <meta name="keywords" content=" "></meta>
      <link rel="canonical" href="https://www.expostandservice.com/blog/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Blog" />
      <meta property="og:description" content="Expo stand is a platform where you can updated your self regarding exhibition stand design and exhibition stand building tips and tricks." />
      <meta property="og:url" content="https://www.expostandservice.com/blog/" />
      <meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
      <meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
      <meta property="article:modified_time" content="2023-06-12T05:19:28+00:00" />
      <meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2023/05/blog-archieve-header-image-min.webp" />
      <meta property="og:image:width" content="1395" />
      <meta property="og:image:height" content="720" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@expostandservic" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="3 minutes" />


      <div className="blog-1">
        <div className="container">
          <div className="row">
            <div className="col-6 col-m-12 ">
              <div className="blog-content">
                <h1>Blog <Image src={Blogicon} alt="" className="blogiconimg" /></h1>
                <p>Exhibitions allow exhibitors to sell their <br /> brands, products and services worldwide. <br /> proud to offer exciting new solutions</p>
              </div>
            </div>
            <div className="col-6 blogbanner col-m-12 ">
              <Image src={image2} alt="" className="blog_image" />

              <Image src={image1} alt="" className="blog_image4" />
              <Image src={image3} alt="" className="blog_image3" />

            </div>

          </div>
        </div>
      </div>
      <div className="blog-2">
        <div className="container">
          <div className="row">
            {/* <div className="blog_gallery"> */}
            <div className="blogbox">

              {posts.map(post => (
                <div key={post.id}>



                  <div className="blog_data">

                    <a href="">{new Date(post.date_gmt).toLocaleDateString()}</a>
                  </div>
                  <Link href={post.link}><div className="blog_content">

                    {/* <h2>{post.title.rendered}</h2> */}


                    <FaMapPin className="blogpin" />
                    <Link href="/best">  {post._embedded['wp:featuredmedia'] && (
                      <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} width={300} height={300} />
                    )}</Link>
                    <p className="blog_para">{post.title.rendered}</p>
                    <div className="para_blog" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 200) + '...' }} />


                  </div></Link>

                  {/* <div className="image_icon">
                                  <img src={Strategy} alt="" />
                              </div> */}
                </div>
              ))}


            </div>


            <button className="load-more">Load More</button>

          </div>
        </div>
      </div>

   


    </div>

  )


}
