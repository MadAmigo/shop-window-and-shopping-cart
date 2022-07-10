import React from 'react'
import style from './ActiveFilters.module.css'

const ActiveFilters = ({item,deactivateFilter}) => {
return (
	<div className={style.activeFilters_item}>
					<div className={style.activeFilters_item_arrayName} >{item.arrayName}:</div>
					<div className={style.activeFilters_item_name}>{item.name}</div>
					<span className={style.deactivateFilter} onClick={()=>deactivateFilter(item)}>X</span>	
	</div>
	)	
}
export default ActiveFilters
