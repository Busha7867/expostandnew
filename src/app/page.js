import React from 'react'

import HomeContent from '@/Components/HomeContent'
import Counterup from '@/Components/Counterup';
import Mainform from '@/Components/Mainform';
import Footer from '@/Components/Footer';
import Universe from '@/Components/Universe';


const page = () => {
  return (
    <div>
     <HomeContent/>
     <Counterup/>
     <Mainform/>
     <Footer/>
     <Universe/>
   
    </div>
  )
}

export default page;