const SliderInput = ({id, label, onChange, state, min, max=100, total, displayTotal}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor={id}>{label}</label>
        {displayTotal && <p>Total loan Amount {total}</p>}
        <input type="range" min={min} max={max} id={id} value={state} onChange={onChange}/>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <label>{min}</label>
            <span>{state}</span>
            <label>{max}</label>
        </div>
    </div>
  )
}

export default SliderInput
