import { useTranslation } from "react-i18next";
import Carousel from "../Components/Carousel";
import data from "../Components/data";
import GridForProd from '../Components/GridForProd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewsEvent from '../Components/NewsEvent'
import ProductSlider from '../Components/ProductSlider';
import "../i18n";


const Homepage = () => {
    const { t } = useTranslation();
    return (
      <div>
        
    <h1>Homepage</h1>
    <Carousel images={data} />
      
      <h2 class="block-title">
        <span class="text">{t('prodUS')}</span> 
      </h2>
      <GridForProd/>
      <div className='ProductHeadings'>
        <h2>{t("Top_Sell")}</h2>
        </div>
      <ProductSlider/>
      <div className='ProductHeadings'>
        <h2>{t("News_Events")}</h2>
        </div>
      <NewsEvent/>
    </div>
  )};
  
  export default Homepage;