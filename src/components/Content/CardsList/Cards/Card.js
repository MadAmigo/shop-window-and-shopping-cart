import React, {useState} from 'react'
import style from './Card.module.css'

const Card = (props) => {
return (<div className={style.wrapper}>
			{props.isLoadingItems&&<div style={{color:"red"}} className={style.preloader}><p>...Loading</p></div>}
			<div className={style.cards_wrapper}>
			{(props.filteredArray.length===0) && (!props.isLoadingItems) &&
			 <div style={{color:"red"}}>..Empty</div>	}
			{(props.filteredArray.length>0) && (props.filteredArray.map(item => <Item
						 key={item.id}
						 item={item}
						 addBasketItem={props.addBasketItem}
						 showAlert={props.showAlert}
						 />
						 )
				)	
			}						
			</div>
		</div>	
	)	
}

const Item=({item,addBasketItem,showAlert})=>{
	const [quantityToBasket, setQuantityToBasket]=useState(1)

const handleSubmit=(event)=>{
	event.preventDefault()
	item={...item,quantity:+quantityToBasket}
	const newMessage=`you add yo basket ${item.quantity}units`
    showAlert(item,newMessage,true)
	addBasketItem(item)	
	setQuantityToBasket(1)
}

const handleChange=(event)=>{
	setQuantityToBasket(event.target.value)
	
}
return(
		<div style={{background:'#FFFFF0	'}} className={style.card} >
			<div style={{background:'#F8F8FF'}} className={style.card_img}><img src={item.image} alt=' ' /></div>
			<div className={style.card_autor}>Tagline:  {item.autor}</div>
			<div className={style.card_book}>Name :  {item.booksName}</div>
			<div style={{color:"red"}}>Category : {item.category}</div>		
			<div style={{color:"red"}}>Brand :  {item.brand}</div>		
			<div className={style.card_price}>Price:  {item.price}</div>
			<div className={style.card_stock}>Stock:  {item.stock}</div>
												
			<form onSubmit={handleSubmit} className={style.card_input}>
				<label>
					quantity:
						<input
						style={{fontSize:"16px"}}
						type="number"
						className={style.quantity}
						min="1"
						max={item.stock}
						value={quantityToBasket}
						onChange={handleChange}
						/>
				</label>
				<input className={style.card_submit} type="submit"  value="Add to basket" />
			</form>
		 </div>
	)										 
}

export default Card
