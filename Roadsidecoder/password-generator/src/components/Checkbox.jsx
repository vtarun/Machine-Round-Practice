import React from 'react'

const Checkbox = ({title, state, onChange}) => {
  return (
    <div style={{"display": "flex"}}>  
        <input id={title} type="checkbox" checked={state} onChange={onChange}/>
        <label htmlFor={title}>{title}</label>
    </div>
  )
}

export default Checkbox
