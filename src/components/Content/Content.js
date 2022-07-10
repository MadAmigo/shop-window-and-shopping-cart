import React from 'react'
import style from './Content.module.css'
import FiltersContainer from './FiltersFields/FiltersContainer.js'
import CardsListContainer from './CardsList/CardsListContainer.js'
import ActiveFiltersContainer from './ActiveFiltersField/ActiveFiltersContainer.js'

const Content = () => {
return (
	<div className={style.content}>
		<ActiveFiltersContainer />
		<FiltersContainer />
		<CardsListContainer />
	</div>
	)	
}
export default Content
