import React, {useEffect} from 'react'
import style from './Cards/Card.module.css'
import FiltersCardsListContainer from './FiltersCardsListContainer.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {getItems} from '../../../redux/CardReducer.js'
import Basket from './Basket/Basket.js'
import {toggleVisibleBasket,addBasketItem,showAlert} from '../../../redux/BasketReducer.js'


const CardsListContainer = (props) => {
useEffect(()=>{props.getItems(props.currentPage,props.pageSize)},[])
useEffect(()=>{setTimeout(()=>props.showAlert(null,null,false), 2000)},[props.isVisibleAlert])

return (<>
			{props.isVisibleBasket&&<Basket {...props} />}			
			<FiltersCardsListContainer 	{...props} />
			{props.isVisibleAlert&&<div className={style.show_Alert}>{props.message}</div>}
		</>	
	)	
}

const mapStateToProps=(state) =>{
	return{
		isLoadingItems:state.itemsPage.isLoadingItems,
		totalCount:state.itemsPage.totalCount,
		pageSize: state.itemsPage.pageSize,
		currentPage:state.itemsPage.currentPage,
		items:state.itemsPage.items,
		activeFilters:state.itemsPage.activeFilters,
		isActiveFilterPrice:state.itemsPage.isActiveFilterPrice,
		serchHeaderValue:state.itemsPage.serchHeaderValue,
		isVisibleBasket:state.basketPage.isVisibleBasket,
		isVisibleAlert:state.basketPage.isVisibleAlert,
		message:state.basketPage.message,
		basketItems:state.basketPage.basketItems,

	}
}
export default compose (
connect(mapStateToProps,{getItems,showAlert,toggleVisibleBasket,addBasketItem})
	) (CardsListContainer)
 