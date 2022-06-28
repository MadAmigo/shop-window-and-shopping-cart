const SET_IS_VISIBLE_BASKET='SET_IS_VISIBLE_BASKET'
const SET_BASKET_ITEMS='SET_BASKET_ITEMS'
const SET_ALERT='SET_ALERT'

const   initialState={
			basketItems:[],
			isVisibleBasket:false,
			basketCount:0,
			message:' ',
			isVisibleAlert:false,
			}

const basketReducer=(state=initialState, action)=>{	
	switch(action.type) {
		case SET_IS_VISIBLE_BASKET:
			return {...state, isVisibleBasket:action.isVisibleBasket}
		case SET_ALERT:
			return {...state, isVisibleAlert:action.isVisibleAlert,message:action.newMessage}			
		case SET_BASKET_ITEMS:{
		
 	const getTotalQuantity=(Items)=> Items.reduce((total,item)=>total+item.quantity,0 )//TotalQuantity

	if(action.item.quantity==='del'){		
		const newBasketItems=state.basketItems.filter(item =>item.id != action.item.id)
		const totalQuantity=getTotalQuantity(newBasketItems)
			return {...state,basketItems:newBasketItems,basketCount:totalQuantity}
	}	

 	const isItemInBasket=state.basketItems.findIndex(value =>value.id == action.item.id)
		
 	if(isItemInBasket<0) {
 		const newBasketItems=state.basketItems.concat(action.item)
		const totalQuantity=getTotalQuantity(newBasketItems)		
 			return {...state,basketItems:newBasketItems,basketCount:totalQuantity}
 }
 	else {			
 		let newQantity=state.basketItems[isItemInBasket].quantity + action.item.quantity	
 			if(newQantity>action.item.stock || newQantity<0){ //check mistake in quantity
 			const newMessage='mistake in quantity'
 				return {...state,isVisibleAlert:true,message:newMessage}
 			}

 		const newItem={...state.basketItems[isItemInBasket], quantity: newQantity}
 		const newBasketItems=state.basketItems.slice()	//copy [basketItems]
 		newBasketItems.splice(isItemInBasket,1,newItem)  //new [basketItems]
  		const totalQuantity=getTotalQuantity(newBasketItems)										  						 						 		
 			 return  {...state,basketCount:totalQuantity, basketItems:newBasketItems,}						 							 									
 				}								
 			}
		default:return state
	}
}
const setBasketItem = (item)=>({type:SET_BASKET_ITEMS,item})
const setIsVisibleBasket = (isVisibleBasket)=>({type:SET_IS_VISIBLE_BASKET, isVisibleBasket })
const setAlert = (item,newMessage,isVisibleAlert) => ({type:SET_ALERT,item,newMessage,isVisibleAlert })

export const showAlert=(item,newMessage,isVisibleAlert) =>(dispatch)=>{
	dispatch(setAlert(item,newMessage,isVisibleAlert))
}
export const addBasketItem = (item)=>(dispatch)=>{
	dispatch(setBasketItem(item))
 }
 export const toggleVisibleBasket = (isVisibleBasket)=>(dispatch)=>{
	dispatch(setIsVisibleBasket(isVisibleBasket))
 }

export default basketReducer;
