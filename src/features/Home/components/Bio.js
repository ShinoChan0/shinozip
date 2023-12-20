import React from 'react'
import { useTranslation } from 'react-i18next';

const Bio = () => {
    const { t } = useTranslation();
    return (
        <div className="mb-10">
            <span className="font-bold text-3xl max-md:text-2xl border-b-4 border-black dark:border-dark">
                {t("home.bio.title")}
            </span>

            <div className="ml-6 max-md:ml-2">
                <div className="text-xl max-md:text-base -indent-16 pl-16 mt-4">
                    <span className="pr-4 max-md:pr-7 font-bold">
                        2006
                    </span>
                    {t("home.bio.text.1")}
                </div>
                <div className="text-xl max-md:text-base -indent-16 pl-16 mt-4">
                    <span className="pr-4 max-md:pr-7 font-bold">
                        0000
                    </span>
                    {t("home.bio.text.2")}
                </div>
            </div>
        </div>
    )
}

export default Bio