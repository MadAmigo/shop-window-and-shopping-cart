import React from 'react'
import style from './Header.module.css'
import Logo from '../../Images/logo_1.jpg'
import loupe from '../../Images/loupe.png'
import verification from '../../Images/verification.png'
import wishes from '../../Images/wishes.png'
import basket from '../../Images/basket.png'

const Header = (props) => {
	 
	return (
		<div className={style.header}>
			<div className={style.logotype}> <img src={Logo} alt=""/> </div>
			<div className={style.serch}> 
 				<input type="text"  placeholder="       Input your search query or URL" />
 				<img className={style.loupe} src={loupe} alt=""/> 				
 			</div>
			<button className={style.button_lang}> En </button>
			<button className={style.button_sign}><img src={verification} alt="verification"/> </button>
			<button className={style.button_wishes}> <img src={wishes} alt="wishes"/> </button>
			<div onClick={()=>props.setIsVisibleBasket(true)} className={style.basket}>
				 <img src={basket} alt=""/> 
				 	<div className={style.basket_count}>{props.basketCount} </div>
			</div>
		</div>
		)
}
export default Header
