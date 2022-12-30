import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import Basket from '../Components/Basket';



function Navbar(props) {
	const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	}

	const { t } = useTranslation();
    const {countCartItems,onAdd, onRemove, cartItems} = props;
	let[cartOpen, setCartOpen] = useState(false);
	


	return (
		<div>
		<header>
		    <Link to="/"><h3>MINERSTORE</h3></Link>
			<div>
			<nav ref={navRef}>
				<Link className="navName" to="/asic">ASIC</Link>
				<Link className="navName" to="/ant-miner">ANT MINER</Link>
				<Link className="navName" to="/videocards">{t("C_Videocards")}</Link>
				<Link className="navName" to="/mining-farms">{t("C_MiningFarms")}</Link>
				
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
                <LanguageSwitcher />
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			<IoBagOutline className={`CartButton ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
			 {countCartItems?
			 <button className="badge">{countCartItems}</button> : ('')
			 }
			{cartOpen && (
				<div className="ShopCart">
                 <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
				</div>
			)}
			
			</div>
			
		</header>
		
		</div>
		
		
	);
}

export default Navbar;