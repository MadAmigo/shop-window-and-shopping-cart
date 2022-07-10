import React, {useState,useEffect} from 'react'
import style from './Basket.module.css'

const Basket = (props) => {

const sum = props.basketItems.reduce((total,item)=>total+item.price*item.quantity,0 )

const handleCloseBasket=(e)=>{    //close Basket onClick outside Basket
	 if(e.target.className==='Basket_basket__ptkCN')  
	 	props.toggleVisibleBasket(false)		 
	}

const handleOpenBasket=(e)=>{    //open Basket onClick inside lableBasket
	 	props.toggleVisibleBasket(true)	 	
	 	} 

return (<div className={style.basket} onClick={handleCloseBasket}>
			  
		  <div className={style.basket_content}>
		    <span onClick={(e)=>props.toggleVisibleBasket(false)}	className={style.basket_close}>
		    	&times;
		    </span>

		     <h5 style={{color:'red'}}>Your basket</h5>
            {props.basketItems.length ? (
            <table className={style.basket_table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Summ</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody >
                        {props.basketItems.map(item =>
                            <BasketItem key={item.id} item={item} addBasketItem={props.addBasketItem}/>
                        )}
                        <tr>
                            <th style={{color:'red'}}>Итого</th>
                            <th>{sum}</th>
                            <th>eur.</th>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Your basket is empty</p>
            )}
        </div>
	</div>
	)
}

const BasketItem=({item,addBasketItem})=> {
	const [quantityToBasket, setQuantityToBasket]=useState(0)
	const [toggleSendBasketItem, setToggleSendBasketItem]=useState(true)

	const increment=()=>{						
		setQuantityToBasket(1)
		setToggleSendBasketItem(!toggleSendBasketItem)
	}

	const dicrement=()=>{		
		setQuantityToBasket(-1)
		setToggleSendBasketItem(!toggleSendBasketItem)
	}

	const deleteItemFromBasket=()=>{		
		setQuantityToBasket('del')
		setToggleSendBasketItem(!toggleSendBasketItem)
	}

	useEffect(()=>{addBasketItem({...item,quantity:quantityToBasket})},[toggleSendBasketItem])			
				 		
	return (
	        <tr>
	            <td>{item.booksName}</td>
	            <td>{item.quantity}</td>
	            <td>{item.price}</td>
	            <td>{Number(item.price) * Number(item.quantity)}</td>
	            <td className={style.basket_table_change}>
	            	<div className={style.basket_button_change} onClick={()=>increment()}>+</div>
	            	<div className={style.basket_button_change} onClick={()=>dicrement()}>-</div>
	            	<div className={style.basket_button_change} onClick={()=>deleteItemFromBasket()}>del</div>
	            </td>
	        </tr>
	    );
}
export default Basket

