import React from "react";

import { useTranslation } from "react-i18next";
import "../Styles/stylelang.css";



function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const changleLanguage = (lang) =>{
  i18n.changeLanguage(lang);
   };
  

  return (

    <div className="select">

      <select

        value={i18n.language}

        onChange={(e) =>

          i18n.changeLanguage(e.target.value)

        }

      >

        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="ko">KR</option>
        <option value="zh">CN</option>

      </select>
       
    
    </div>

  );

}

export default LanguageSwitcher;