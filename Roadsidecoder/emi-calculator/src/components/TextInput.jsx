const TextInput = ({id, label, onChange, state}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="number" id={id} value={state} onChange={onChange}/>
    </div>
  )
}

export default TextInput;
