import React, {useEffect} from 'react'
import Header from './Header.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import  {toggleVisibleBasket} from '../../redux/BasketReducer.js'
const HeaderContainer = (props) => {

return (			
			<Header {...props}/>		
	)	
}

const mapStateToProps=(state) =>{
	return{
		
		basketCount:state.basketPage.basketCount,
		
	}
}
export default compose (
connect(mapStateToProps,{toggleVisibleBasket})
	) (HeaderContainer)
 