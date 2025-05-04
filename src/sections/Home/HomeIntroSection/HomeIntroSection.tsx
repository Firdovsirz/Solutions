"use client";

import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import IntroImage from "@/../public/assets/intro.png";

export default function HomeIntroSection() {
  return (
    <section className='flex justify-evenly items-center px-[250px] py-[50px]'>
      <div>
        <h1 className='w-[100px] text-[65px]' style={{ color: "rgb(48, 84, 135)", fontWeight: 700 }}>
          <Typewriter
            words={[' Society Solutions']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className='text-[25px]' style={{ color: "rgba(48, 84, 135, 0.5)", fontWeight: 700 }}>Rəqəmsal Uğura Aparan Yol!</p>
        <p className='w-[500px] mt-[20px]' style={{ color: "rgb(48, 84, 135)"}}>
          “Society Solutions” olaraq biz biznesinizi gələcəyə daşıyan 
          innovativ proqram təminatı və texnoloji həllər təqdim edirik. 
          İstər veb sayt, istər mobil tətbiq, istərsə də daxili idarəetmə 
          sistemləri olsun — ehtiyaclarınıza uyğun sürətli, təhlükəsiz və 
          effektiv həllər yaradırıq.
        </p>
      </div>
      <div>
        <Image src={IntroImage} alt='intro' className='w-[700px]' />
      </div>
    </section>
  )
}
