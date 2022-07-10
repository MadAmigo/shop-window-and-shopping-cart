import React from 'react'
import style from './FiltersField.module.css'
import Check from './Check/Check.js'
import PriceFilter from './PriceFilter/PriceFilter.js'
const Filters = ({updataActiveFilters, fakeArray, getValueRadio}) => {

	const showFilter=(arr)=>arr.map(item=><Check key={item.name} 
												 item={item}
												 updataActiveFilters={updataActiveFilters}/>)
	return (
		<div className={style.filters}>

			<div className={style.wrapper_filters}>
				<p style={{fontSize: '20px'}}>FiltersField</p>			
				  {fakeArray.map(el=><div key={el[0].arrayName} ><p>{el[0].arrayName}:</p><div key={el[0].arrayName}>{showFilter(el)}</div></div>)}			 
			</div>
		<PriceFilter getValueRadio={getValueRadio}/>
		</div>
		)	
}
export default Filters
 