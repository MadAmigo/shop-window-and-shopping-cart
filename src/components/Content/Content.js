import React from 'react'
import style from './Content.module.css'
import FiltersField from './FiltersField/FiltersField.js'
import CardsListContainer from './CardsList/CardsListContainer.js'




const Content = () => {
return (
	<div className={style.content}>
		<FiltersField />
		<CardsListContainer />
	</div>
	)	


}
export default Content
