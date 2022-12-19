import React from 'react';
import './GridForProd.css';
import { useTranslation } from "react-i18next";
import "../i18n";


function GridForProd() {

  const { t } = useTranslation();

  return (
        <div class="intermediate">
          
        <div class="box1" >
         <div class="hover-effect-btn-box">
         <a href='http://www.google.com'>
           <div class="text-name1">{t("C_Videocards")}</div>
           <div class="overlaybox"></div>
           <div class="buttonmore"><a>{t("More_d")}</a></div>
           </a>
         </div>
        </div>
        <div class="box2">
          <div class="hover-effect-btn-box">
          <a href='http://www.google.com'>
           <div class="text-name1">ASIC</div>
           <div class="overlaybox"></div>
           <div class="buttonmore"><a>{t("More_d")}</a></div>
           </a>
          </div>
        </div>
        <div class="box3">
           <div class="hover-effect-btn-box">
            <a href='http://www.google.com'>
             <div class="text-name1">ANT MINER</div>
             <div class="overlaybox"></div>
             <div class="buttonmore"><a>{t("More_d")}</a></div>
            </a>
          </div>
        </div>
        <div class="box4">
        <div class="hover-effect-btn-box">
           <a href='http://www.google.com'>
             <div class="text-name1">{t("C_MiningFarms")}</div>
             <div class="overlaybox"></div>
             <div class="buttonmore"><a>{t("More_d")}</a></div>
            </a>
        </div>

       
        </div>
        </div>     
  );
}

export default GridForProd;
