import React, {useState, useEffect}from 'react'
import style from './ActiveFilters.module.css'
import {connect} from 'react-redux'
import ActiveFilters from './ActiveFilters.js'
import {deactivateFilter} from '../../../redux/CardReducer.js'

const ActiveFiltersContainer = (props) => {
	
	return (
		<div className={style.activeFilters}>		
			<div style={{fontSize: '30px', }}>Selected:</div>
	{(props.activeFilters.length>0) && props.activeFilters.map(item=><ActiveFilters key={item.name} 
							 item={item}
							 deactivateFilter={props.deactivateFilter}
							 />)
				}			
		</div>
		)	
	}

	const mapStateToProps=(state) =>{
		return{
			items:state.itemsPage.items,
			activeFilters:state.itemsPage.activeFilters,
			}
	}
export default connect(mapStateToProps,{deactivateFilter}) (ActiveFiltersContainer)
