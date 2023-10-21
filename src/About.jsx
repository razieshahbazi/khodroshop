import React from 'react';
import {Navbar} from './Header/Navbar';
import about from './img/about.webp';
import { Footer } from './footer/Footer';
import { Slider } from './slider/Slider';


export const About = () => {
  return (
    <div className="text-center">
        <div className='bg-blue-950'>
           <Navbar/>
        </div>
        
        <div className='flex lg:flex-row' dir='rtl'>
            <div className='lg:p-20'><img src={about} alt="about"/></div>
            <div className='lg:m-24 text-right'>
                <h1 className='lg:text-3xl m-10'>به سایت آگهی وویچِر خوش آمدید</h1>
                <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
<button className='bg-amber-400 text-blue-950 w-48 p-3 rounded-xl mt-10'>مشاهده بیشتر</button>
            </div>
        </div> 
        <Slider/>
        <Footer/>   
    </div>
  )
}
 