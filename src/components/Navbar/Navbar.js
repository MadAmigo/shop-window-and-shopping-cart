import React, {useState} from 'react'
import style from './Navbar.module.css'
import List from '../../Images/list.png'
import NavbarDropdown from './NavbarDropdown.js'

const Navbar = () => {
	
const categories =['brand new','dolls','present','drums','sale']
const [isVisibleDropdown, setIsVisibleDropdown] = useState(false) 

const choisCategory=(e)=>{console.log('e',e.value)
setIsVisibleDropdown(false)}
	
 return (
  <div className={style.navbar}> 	
     {isVisibleDropdown?<div className={style.dropdown_wrapper}>
       <NavbarDropdown  categories={categories}
       					choisCategory={choisCategory} />
       					</div>:
      		<div  className={style.dropdown_wrapper} onClick={()=>setIsVisibleDropdown(true)}>
      			<img className={style.navbar_img} src={List} alt=""/>Categories
      		</div>
  	 }
					          
						
			<div className={style.navbar_category} style={{ color: 'green'}}>{categories[0]}</div>
			<div className={style.navbar_category}>{categories[1]}</div>
			<div className={style.navbar_category}>{categories[2]}</div>
			<div className={style.navbar_category}>{categories[3]}</div>
			<div className={style.navbar_category} style={{ color: 'red'}}>{categories[4]}</div>
		</div>
		)
}
export default Navbar
