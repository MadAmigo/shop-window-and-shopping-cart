import React from 'react'
import style from './Header.module.css'
import Logo from '../../Images/logo_1.jpg'
import clear from '../../Images/clear.png'
import verification from '../../Images/verification.png'
import wishes from '../../Images/wishes.png'
import basket from '../../Images/basket.png'

const Header = (props) => {
	
	 const handleChange = (event) => {
	 	props.getSerchHeaderValue(event.target.value,)
	 }
	
	return (
		<div className={style.header}>
			<div className={style.logotype}> <img src={Logo} alt=""/> </div>
			<div className={style.serch}> 
 				<input className={style.serch_input}
	 				 type="text"
	 				 placeholder="Input your search query or URL"
	 				 value={props.serchHeaderValue}
	 				 onChange={handleChange}
 				    />
 				 <img onClick={()=>props.getSerchHeaderValue('')} className={style.clear} src={clear} alt=""/> 	

 			</div>
			<button className={style.button_lang}> En </button>
			<button className={style.button_sign}><img src={verification} alt="verification"/> </button>
			<button className={style.button_wishes}> <img src={wishes} alt="wishes"/> </button>
			<div onClick={()=>props.toggleVisibleBasket(true)} className={style.basket}>
				 <img src={basket} alt=""/> 
				 	<div className={style.basket_count}>{props.basketCount} </div>
			</div>
		</div>
		)
}
export default Header
