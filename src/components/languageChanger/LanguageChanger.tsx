"use client";

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import "./LanguageChanger.scss";
import AzFlag from "@/../public/assets/flags/az-flag.png";
import RuFlag from "@/../public/assets/flags/ru-flag.png";
import EnFlag from "@/../public/assets/flags/en-flag.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const flagMap: Record<string, StaticImageData> = {
    Az: AzFlag,
    En: EnFlag,
    Ru: RuFlag,
};

export default function LanguageChanger() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Az");
    const availableLanguages = ["Az", "En", "Ru"];
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <div className="relative w-[fit-content] rounded cursor-pointer">
            <div
                className="flex items-center gap-2 border border-gray-300 p-[5px] rounded"
                onClick={() => setDropdown(!dropdown)}
            >
                <Image
                    src={flagMap[selectedLanguage]}
                    alt={`${selectedLanguage} Flag`}
                    width={50}
                    height={16}
                />
                <span style={{ fontSize: 20, fontWeight: 600 }}>{selectedLanguage}</span>
                <ArrowDropDownIcon
                    style={{ transition: 'all 400ms', fontSize: 30 }}
                    className={`text-gray-600 transform transition-transform duration-200 ${dropdown ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            {dropdown && (
                <div className={`dropdown-menu open`}>
                    <ul>
                        {availableLanguages
                            .filter(lang => lang !== selectedLanguage)
                            .map((lang) => (
                                <li
                                    key={lang}
                                    className="flex items-center gap-2 hover:bg-gray-100"
                                    onClick={() => {
                                        setSelectedLanguage(lang);
                                        setDropdown(false);
                                        console.log("Selected language:", lang);
                                    }}
                                >
                                    <Image
                                        src={flagMap[lang]}
                                        alt={`${lang} Flag`}
                                        width={24}
                                        height={16}
                                        className="rounded shadow"
                                    />
                                    <span>{lang}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}