import React from 'react'
import Filters from './Filters.js'
import {connect} from 'react-redux'
import {addToActiveFilters,deactivateFilter,getValueRadio} from '../../../redux/CardReducer.js'


const FiltersContainer = (props) => {

	const updataActiveFilters=(item)=>item.checked?props.deactivateFilter(item):props.addToActiveFilters(item)	
		 						
	return (
		<div>
			{(props.fakeArray.length>0) && <Filters 							   
								fakeArray={props.fakeArray}
								updataActiveFilters={updataActiveFilters}
								getValueRadio={props.getValueRadio}								
						 />}								
		</div>
		)	
}

const mapStateToProps=(state) =>{
	return{		
		fakeArray:state.itemsPage.fakeArray,
		activeFilters:state.itemsPage.activeFilters,	
		}
	}
export default connect(mapStateToProps,{addToActiveFilters,deactivateFilter,getValueRadio}) (FiltersContainer)
