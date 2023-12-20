import React from 'react'
import { useTranslation } from 'react-i18next';

const DevicesHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="relative justify-center flex dark:border-y-teal-800 duration-1000 dark:border-y-4">
            <div className="opacity-100 text-black dark:text-white duration-300 z-10 absolute max-sm:top-14 top-32 text-center">
                <span className="block text-4xl font-bold">Devices</span>
                <span className="block text-xl max-md:text-lg">{t("devices.header.text.1")}</span>
                <span className="block text-xl max-md:text-lg">{t("devices.header.text.2")}</span>
            </div>
            <img src="/images/devices/desktop.jpg" alt="" className="opacity-30 h-72 max-sm:h-48 w-full object-cover"></img>
        </div>
    )
}

export default DevicesHeader;