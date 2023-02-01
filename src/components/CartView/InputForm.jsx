import './inputForm.css'

function InputForm(props){

    return (
      <div className="divForm" style={{ display: "flex",   marginBottom: 8 }}>
          <label style={{  width: "100px",marginRight: 4 }}>{props.title}</label>
          <input className='inputForm'
            required={true} 
            value={props.value} 
            name={props.name} 
            type="text" 
            onChange={props.onInputChange} 
          />
      </div>
    )
  }
  
  export default InputForm;