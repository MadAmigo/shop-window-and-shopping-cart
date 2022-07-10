import React from 'react'
import Header from './Header.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import  {toggleVisibleBasket} from '../../redux/BasketReducer.js'
import {getSerchHeaderValue} from '../../redux/CardReducer.js'
const HeaderContainer = (props) => {

return (			
			<Header {...props}/>		
	)	
}

const mapStateToProps=(state) =>{
	return{		
		basketCount:state.basketPage.basketCount,
		serchHeaderValue:state.itemsPage.serchHeaderValue,
	}
}
export default compose (
connect(mapStateToProps,{toggleVisibleBasket,getSerchHeaderValue})
	) (HeaderContainer)
 