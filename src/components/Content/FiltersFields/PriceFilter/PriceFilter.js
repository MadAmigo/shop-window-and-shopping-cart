import React, { useState } from 'react'
import style from '../FiltersField.module.css'

const PriceFilter=({getValueRadio}) =>{
   const [valueRadio, setValueRadio] = useState(0)
  
   const chengeValueRadio = (event) => {
      setValueRadio(event.target.value)
      getValueRadio(event.target.value)
   }

   return <div className={style.filters}>
            <p>Price</p>
            <div>
               <input style={{width:'15px'}} type="radio" name="radio" value={"0"}
                  checked={valueRadio ==='0' ? true : false}
                  onChange={chengeValueRadio} />
               <span>0 ...  </span>
            </div>   
         <div>
               <input style={{width:'15px'}} type="radio" name="radio" value={"1"}
                  checked={valueRadio === '1' ? true : false}
                  onChange={chengeValueRadio} />
               <span>1 ... 1000 tugrik</span>
            </div>   
            <div>
               <input style={{width:'15px'}} type="radio" name="radio" value={"2"}
                  checked={valueRadio === '2' ? true : false}
                  onChange={chengeValueRadio} />
               <span>1001 ... 2000 tugrik</span>   
            </div>   
            <div>
               <input style={{width:'15px'}} type="radio" name="radio" value={"3"}
                  checked={valueRadio === '3' ? true : false}
                  onChange={chengeValueRadio} />
               <span>2001 ... 3000 tugrik</span>
            </div>               
   </div>
}
export default PriceFilter