import { React, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const { i18n } = useTranslation();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const currentLanguage = localStorage.getItem('i18nextLng');
        i18n.changeLanguage(currentLanguage);
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [i18n]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        setIsOpen(false);
    };
    return (
        <div ref={ref}>
            <div className="w-full ml-4 max-sm:ml-2">
                <div className="flex items-center cursor-pointer" onClick={toggleAccordion}>
                    <svg className="w-10 h-10 max-sm:w-8 max-sm:h-8 stroke-black dark:stroke-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 12C21 10.3431 16.9706 9 12 9C7.02944 9 3 10.3431 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                {isOpen && (
                    <div className="bg-white absolute flex max-sm:right-2 max-sm:top-14 flex-col rounded-lg text-black z-10">
                        <button onClick={() => changeLanguage('en')} className="px-4 py-2 hover:underline">
                            English
                        </button>
                        <button onClick={() => changeLanguage('ja')} className="px-4 py-2 hover:underline">
                            日本語
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LanguageSwitcher