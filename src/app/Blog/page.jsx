
'use client';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Image from 'next/image';

const PageB = () => {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://www.expostandservice.com/wp-json/wp/v2/posts', {
                    params: {
                        per_page: 3,
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
    <div>
            <div className="work-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <h2 className='work-heading'>Blog Bank</h2>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <div className="row">
                        <div className="article_grid">
                            <div className="article-box">
                            {posts.map(post => (
                                    <div key={post.id}>
                                        <div className='article-img'>{post._embedded['wp:featuredmedia'] && (<img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} loading='lazy' />
                                        )}</div>

                                        <div className="article-blog">
                                            <h5 className='article-head'>{post.title.rendered}  </h5>

                                            <Link href={post.link} className='readmore'> ReadMore   <i class="fas fa-blog"></i>
                                            </Link>


                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>


                </div>
            </div>

    </div>
  )
}

export default PageB