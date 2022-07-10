import React  from 'react'
import Card from './Cards/Card.js'
import style from './Cards/Card.module.css'

const FiltersCardsListContainer = (props) => {

let uniqueFilters=[] 							 //array of unique filter's names(Categories,Brands)
 const filters=props.activeFilters.map(el=> el.arrayName)
  uniqueFilters = [...new Set(filters)] 

const filterFunc=(arr,filterName)=>{       		//function for filter categoris and brands
	let newFilteredAffay=[]
 			for(let el in props.activeFilters){
				arr.map(i=>{if(props.activeFilters[el].name===i[filterName]){newFilteredAffay.push(i)}})
 			} 
	return newFilteredAffay
}

const filterRadioFunc=(arr,valueFrom,valueTo)=>	{	//function for filter price
 		let newFilteredAffay=[]
 		arr.map(el=>{if((el.price>=valueFrom) && (el.price<=valueTo))
 			{newFilteredAffay.push(el)}
  			}
 		) 		
	 return newFilteredAffay
 }
	
let filteredArray=props.items.concat()
 	if(uniqueFilters.includes('Categories')){      //filter categories 			
	 	filteredArray=filterFunc(filteredArray,'category')
 	}
 	if(uniqueFilters.includes('Brands')){  		    //filter brand 			
	 	filteredArray=filterFunc(filteredArray,'brand')
 	}
 	if(props.isActiveFilterPrice>0){  		    //filter price 
 		switch(props.isActiveFilterPrice){
 		 			case "1":
	 		 			filteredArray=filterRadioFunc(filteredArray,1,1000)
	 		 			break
 		 			case "2":
	 		 			filteredArray=filterRadioFunc(filteredArray,1001,2000)
	 		 			break 
 		 			case "3": 
 		 				filteredArray=filterRadioFunc(filteredArray,2001,3000)
 		}
 	}

 	if(props.serchHeaderValue.length>3){  	 		    //filter Header serch		
 		let newFilteredAffay=filteredArray.filter(item=>
 			(item.booksName.toString().toLowerCase().indexOf(props.serchHeaderValue.toLowerCase())>-1)
 		)			
	 		filteredArray=newFilteredAffay
 	}

return (<div className={style.wrapper}>
			<Card filteredArray={filteredArray}	{...props} />
		</div>	
	)	
}

export default FiltersCardsListContainer
