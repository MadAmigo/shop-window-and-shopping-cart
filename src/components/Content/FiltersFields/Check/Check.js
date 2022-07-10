import React from 'react'                                                             

const Check = ({item,updataActiveFilters}) => {
  return (
    <div >
      <Checkbox   
        label={item.name}    
        value={item.checked}
        onChange={()=>updataActiveFilters(item)}
        item={item}
      />
   </div>
  )
}

const Checkbox = ({label, value, onChange, item }) => {
  return (
    <div >
      <label>
        <input style={{ width: "12px", height: "12px"}} type="checkbox" checked={value} onChange={onChange} />
      {label}
      </label>
    </div>
  )
}

export default Check