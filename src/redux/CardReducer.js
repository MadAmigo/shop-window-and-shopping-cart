import {itemsAPI} from '../API/API.js';
import logo from '../Images/logo_2.png'

const SET_ITEMS='SET_ITEMS';
const SET_IS_LOADING_ITEMS='SET_IS_LOADING_ITEMS'
const SET_TOTAL_PAGE_COUNT='SET_TOTAL_PAGE_COUNT'

const   initialState={
		isLoadingItems:false,
		totalCount:44,
		pageSize: 10,
		currentPage:1,
		items:[],

		}

const cardReducer=(state=initialState, action)=>{
	
	switch(action.type) {

		case SET_ITEMS:
			return {...state, items:[...action.items]}
		case SET_IS_LOADING_ITEMS:
			return {...state, isLoadingItems:action.isLoadingItems}
		case SET_TOTAL_PAGE_COUNT:
			return {...state, totalCount:action.totalCount}
		
		
		default:return state
	}
}

export const setItems = (items)=>({type:SET_ITEMS, items })
export const setIsLoadingItems = (isLoadingItems)=>({type:SET_IS_LOADING_ITEMS, isLoadingItems })
export const setTotalPageCount = (totalCount)=>({type:SET_TOTAL_PAGE_COUNT, totalCount })


export const getItems = ()=>async (dispatch)=>{	
	 dispatch(setIsLoadingItems(true))
	 const response= await  itemsAPI.getItems();
	
	 if(response.data.result)	{
	 let itemsList=[]
	 response.data.items.slice(0,10).map((el)=>{
	   let item={}
	   item.id= el.id
	   item.booksName = el.name
	   item.price = el.price
	   item.stock = +(Math.random()*Math.random()*100).toFixed(0)	
	   item.image = el.images.icon	  
	   item.autor = el.description	
	   itemsList=[...itemsList,item]
	 })
	 
	
	 dispatch(setItems(itemsList))
   	 dispatch(setTotalPageCount(5))
   	 dispatch(setIsLoadingItems(false))
  	 }
 }

export default cardReducer;