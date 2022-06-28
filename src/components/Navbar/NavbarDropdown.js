import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import List from '../../Images/list.png'
import style from './Navbar.module.css'

const NavbarDropdown = ({categories,choisCategory}) => {



return(

		  <Dropdown
		  className={style.dropdown}
    placeholder=" Categories:"
    fluid
    search
    selection
    options={categories}
    onChange={(e)=>choisCategory(e)} 
  />

	
		
		 
		
)
}
export default NavbarDropdown