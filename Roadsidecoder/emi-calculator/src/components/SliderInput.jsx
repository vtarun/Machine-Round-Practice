import { numberWithCommas } from '../utils/config'; 

const SliderInput = ({label, onChange, state, min, max, showTotal, labelMin, labelMax}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: "20px"}}>
        <span className="label">{label}</span>
        <span className="label text-center"><b>{showTotal}</b></span>
        <div>
          <input type="range" className='slider' min={min} max={max} value={state} onChange={onChange} />
        </div>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <label>{labelMin ?? numberWithCommas(min)}</label>
            <span><b>{numberWithCommas(state)}</b></span>
            <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
    </div>
  )
}

export default SliderInput
