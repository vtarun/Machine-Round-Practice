const SliderInput = ({id, label, onChange, state, min, max}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="range" min={min} max={max} id={id} value={state} onChange={onChange}/>
        <div>
            <label>{min}%</label>
            <label>{max}%</label>
        </div>
    </div>
  )
}

export default SliderInput
