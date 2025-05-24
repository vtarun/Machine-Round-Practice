const TextInput = ({label, setState, state}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: "20px"}}>
        <span className="label">{label}</span>
        <input type="number" value={state} onChange={(e) => setState(e.target.value)} placeholder={label}/>
    </div>
  )
}

export default TextInput;
