"use client";

import "./Header.scss";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Logo from "@/../public/assets/logo.png";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="border-b-1 border-b-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <nav className='flex justify-between items-center px-20'>
                <Link href={"/"}>
                    <div className='flex items-center'>
                        <Image src={Logo} alt='Logo' className='w-[100px]' />
                        <h2 style={{ fontSize: 25, fontWeight: 600, color: "rgb(48, 84, 135)" }}>Society Solutions</h2>
                    </div>
                </Link>
                <div>
                    <ul className='w-[600px] flex items-center justify-between'>
                        <li
                            className={pathname === "/" ? `text-[17px] navigation-list path-underline` : `text-[17px] navigation-list`}>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li
                            className={pathname === "/about" ? `text-[17px] navigation-list path-underline` : `text-[17px] navigation-list`}>
                            About
                        </li>
                        <li
                            className={pathname === "/services" ? `text-[17px] navigation-list path-underline` : `text-[17px] navigation-list`}>
                            <Link href={"/services"}>
                                Services
                            </Link>
                        </li>
                        <li className={pathname === "/works" ? `text-[17px] navigation-list path-underline` : `text-[17px] navigation-list`}>Works</li>
                        <li className='text-white p-2 rounded-[30px] header-contact-btn'>
                            <Link href={"/contact"}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Language changer maybe used */}
                {/* <div>
                    <LanguageChanger />
                </div> */}
            </nav>
        </header>
    )
}
