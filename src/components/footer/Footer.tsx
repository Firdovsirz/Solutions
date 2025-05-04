"use client";

import "./Footer.scss";
import React from 'react';
import Image from 'next/image';
import Logo from "@/../public/assets/logo.png";
import { Typewriter } from 'react-simple-typewriter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className='py-[20px] px-[100px] flex justify-between items-start' style={{ background: "rgb(48, 84, 135)" }}>
      <div className=''>
        <div>
          <h2 className='text-white text-[20px]'>
            <Typewriter
              words={[' Society Solutions']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className='text-white mt-[20px]'>Rəqəmsal Uğura Aparan Yol!</p>
          <p className='text-white w-[400px] mt-[20px]'>“Society Solutions” olaraq biz biznesinizi gələcəyə daşıyan innovativ proqram təminatı və texnoloji həllər təqdim edirik.</p>
        </div>
        <div className='mt-[40px]'>
          <ul className='w-[300px] flex justify-between items-center'>
            <li>
              <LinkedInIcon className='text-white' style={{ fontSize: 30, cursor: "pointer" }} />
            </li>
            <li>
              <InstagramIcon className='text-white' style={{ fontSize: 30, cursor: "pointer" }} />
            </li>
            <li>
              <WhatsAppIcon className='text-white' style={{ fontSize: 30, cursor: "pointer" }} />
            </li>
            <li>
              <TelegramIcon className='text-white' style={{ fontSize: 30, cursor: "pointer" }} />
            </li>
          </ul>
        </div>
      </div>
      <div className='w-[50%] flex justify-between items-center quick-links-container'>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          Send Message
          <input type="text" placeholder='Send Message' />
          <button>Send</button>
        </div>
      </div>
    </footer>
  )
}
