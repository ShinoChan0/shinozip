import React from 'react'
import { useTranslation } from 'react-i18next';

const Favorite = () => {
    const { t } = useTranslation();
    return (
        <div className="mb-10">
            <span className="font-bold text-3xl max-md:text-2xl border-b-4 border-black dark:border-dark">
                {t("home.favorite.title")}
            </span>
            <div className="ml-10">
                <div className="text-xl max-md:text-base mt-4 leading-8">
                    <span className="font-bold">Game:</span> <a href="https://www.minecraft.net/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">Minecraft</a>, <a href="https://playvalorant.com/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">Valorant</a>, etc...<br></br>
                    <span className="font-bold">Programing:</span> Java, react, next.js, html, css, php, etc...
                </div>
            </div>
        </div>
    )
}

export default Favorite