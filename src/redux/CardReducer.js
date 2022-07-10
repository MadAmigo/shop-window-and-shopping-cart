import {itemsAPI} from '../API/API.js'


const SET_ITEMS='SET_ITEMS';
const SET_ACTIVE_FILTERS='SET_ACTIVE_FILTERS'
const SET_IS_LOADING_ITEMS='SET_IS_LOADING_ITEMS'
const SET_TOTAL_PAGE_COUNT='SET_TOTAL_PAGE_COUNT'
const REMOVE_FILTER='REMOVE_FILTER'
const SET_VALUE_FILTER_RADIO='SET_VALUE_FILTER_RADIO'
const SET_SERCH_HEADER_VALUE='SET_SERCH_HEADER_VALUE'

const fakeArray=[
	  [
		
        {id: 1, arrayName:'Categories', name: 'cool killers', checked:false},
        {id: 2, arrayName:'Categories', name: 'puppies', checked:false},
        {id: 3, arrayName:'Categories', name: 'honey', checked:false},
        {id: 4, arrayName:'Categories', name: 'mad dogs', checked:false},
    ],

     [	
    	{id: 0, arrayName:'Brands', name: 'unknown', checked:false},
        {id: 1, arrayName:'Brands', name: 'China factory', checked:false},
        {id: 2, arrayName:'Brands', name: 'Japan factory', checked:false},
        {id: 3, arrayName:'Brands', name: 'US factory', checked:false},
        {id: 4, arrayName:'Brands', name: 'UK factory', checked:false},
    ],
    //  [	
    // 	{id: 0, arrayName:'Price', name: ' 0 ... 1000 tugrik', checked:false},
    //     {id: 1, arrayName:'Price', name: ' 0 ... 2000 tugrik', checked:false},
    //     {id: 2, arrayName:'Price', name: ' 0 ... 3000 tugrik', checked:false},
        
    // ]
]    

const   initialState={
		isLoadingItems:false,
		totalCount:44,
		pageSize: 10,
		currentPage:1,
		items:[],
		fakeArray,
		activeFilters:[],
		isActiveFilterPrice:0,
		serchHeaderValue:'',

		}

const cardReducer=(state=initialState, action)=>{
	
	switch(action.type) {
		case SET_SERCH_HEADER_VALUE:
			return {...state, serchHeaderValue:action.value}
		case SET_ITEMS:
			return {...state, items:[...action.items]}
		case SET_VALUE_FILTER_RADIO:
			return {...state, isActiveFilterPrice:action.value}
		case SET_ACTIVE_FILTERS:
				let newFakeArrayToAdd=state.fakeArray.slice()
				for(let el of newFakeArrayToAdd)
						if (el[0].arrayName===action.item.arrayName){
							el.map(i=>{if(i.name===action.item.name ){ i.checked=true}return i}
								) 
						} 					
			return {...state, fakeArray:[...newFakeArrayToAdd], activeFilters:[...state.activeFilters, {...action.item}]}
		case REMOVE_FILTER:
			let newFakeArrayToDell=state.fakeArray.slice()
					for(let el of newFakeArrayToDell)
					if (el[0].arrayName===action.item.arrayName){
					 (el.map(i=>{if(i.name===action.item.name ){ i.checked=false}return i})
					 )  
				} 
			const newActiveFilters=state.activeFilters.filter(el=>el.name !== action.item.name)
			return {...state, fakeArray:[...newFakeArrayToDell],activeFilters:newActiveFilters}	
		case SET_IS_LOADING_ITEMS:
			return {...state, isLoadingItems:action.isLoadingItems}
		case SET_TOTAL_PAGE_COUNT:
			return {...state, totalCount:action.totalCount}
		
		
		default:return state
	}
}

export const setSerchHeaderValue = (value)=>({type:SET_SERCH_HEADER_VALUE, value })
export const setValueFilterRadio = (value)=>({type:SET_VALUE_FILTER_RADIO, value })
export const setActiveFilters = (item)=>({type:SET_ACTIVE_FILTERS, item })
export const setItems = (items)=>({type:SET_ITEMS, items })
export const setIsLoadingItems = (isLoadingItems)=>({type:SET_IS_LOADING_ITEMS, isLoadingItems })
export const setTotalPageCount = (totalCount)=>({type:SET_TOTAL_PAGE_COUNT, totalCount })
export const removeFilter = (item)=>({type:REMOVE_FILTER, item })


export const getSerchHeaderValue = (value)=>(dispatch)=>{	
	 dispatch (setSerchHeaderValue(value))}

export const addToActiveFilters = (item)=>(dispatch)=>{	
	 dispatch (setActiveFilters(item))}

export const getValueRadio = (value)=>(dispatch)=>{	
	
	 dispatch (setValueFilterRadio(value))}

export const deactivateFilter = (item)=>(dispatch)=>{	
	dispatch (removeFilter(item))}	

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
	   const fakeArrayCategories=fakeArray[0]
	   const fakeArrayBrands=fakeArray[1]
	   item.category =fakeArrayCategories[Math.ceil(Math.random()*3)].name
	   item.brand =	fakeArrayBrands[Math.ceil(Math.random()*4)].name
	   itemsList=[...itemsList,item]
	   return itemsList
	 }
	 )
	 dispatch(setItems(itemsList))
   	 dispatch(setTotalPageCount(5))
   	 dispatch(setIsLoadingItems(false))
  	 }
 }

 

export default cardReducer