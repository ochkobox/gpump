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
	const { t } = useTranslation();
    const {countCartItems,onAdd, onRemove, cartItems} = props;
	let[cartOpen, setCartOpen] = useState(false);
	


	return (
		<div>
		<header>
		    <Link to="/"><h3>MINERSTORE</h3></Link>
			<div>
			<nav ref={navRef}>
				<Link to="/asic">ASIC</Link>
				<Link to="/ant-miner">ANT MINER</Link>
				<Link to="/videocards">{t("C_Videocards")}</Link>
				<Link to="/mining-farms">{t("C_MiningFarms")}</Link>
				
				<button className="nav-btn nav-close-btn">
					<FaTimes />
				</button>
                <LanguageSwitcher />
			</nav>
			<button className="nav-btn">
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