import React from "react";
import "./Footer.css";
import { SiLitecoin, SiBitcoin } from "react-icons/si";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from 'react-router-dom';



function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
      <div className='footer'>
            <div className='container'>
                <div className='col'>
                    <h3>{t("AboutUs")}</h3>
                    <p>{t("News_Events")}</p>
                    <p>{t("Blog")}</p>
                    <p>{t("Delivery_info")}</p>
                    <p>{t("Support_info")}</p>
                </div>
                <div className='col'>
                    <h3>{t("Strategic_Part")}</h3>
                    <p>ANTPOOL</p>
                    <p>BITFUFU</p>
                    <p>ANTALPHA</p>
                    <p>LALLALA</p>
                </div>
                <div className='col'>
                    <h3>{t("prodUS")}</h3>
                    <Link onClick={scrollToTop} to="/videocards"><p>{t("C_Videocards")}</p></Link>
                    <Link onClick={scrollToTop} to="/asic"><p>ASIC</p></Link>
                    <Link onClick={scrollToTop} to="/ant-miner"><p>ANT MINER</p></Link>
                    <Link onClick={scrollToTop} to="/mining-farms"><p>{t("C_MiningFarms")}</p></Link>
                </div>
                <div className='col'>
                    <h3>{t("Payment_M")}</h3>
                    <div className="FooterPay">
                    <div className="FooterCoin">
                    <SiLitecoin className="litecoin"/><p> LITECOIN</p>
                    </div>
                    <div className="FooterCoin">
                    <SiBitcoin className="bitcoin"/><p> BITCOIN</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="FooterRow">
              <a className="FooterCopy">
               &copy;{new Date().getFullYear()} {t("Copyright_R")}
              </a>
            </div>
        </div>
  );
}

export default Footer;