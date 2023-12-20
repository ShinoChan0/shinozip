import React from 'react'
import { useTranslation } from 'react-i18next';

const Info = () => {
    const { t } = useTranslation();
    return (
        <div className="mb-10">
            <span className="font-bold text-3xl max-md:text-2xl border-b-4 border-black dark:border-dark">
                {t("home.info.title")}
            </span>
            <div className="text-xl max-md:text-base ml-10 max-md:ml-5 leading-8 mt-3">
                <span className="font-bold">{t("home.info.age")}:</span> 17<br></br>
                <span className="font-bold">{t("home.info.birthday")}:</span> 2006/10/09<br></br>
                <span className="font-bold">{t("home.info.address")}:</span> {t("home.info.prefecture")}<br /><br />
                {t("home.info.text.1")}<br />
                {t("home.info.text.2")}<br />
                {t("home.info.text.3")}<a href="/devices/" className="text-blue-500 hover:underline">{t("home.info.text.4")}</a>{t("home.info.text.5")}
            </div>
        </div>
    )
}

export default Info