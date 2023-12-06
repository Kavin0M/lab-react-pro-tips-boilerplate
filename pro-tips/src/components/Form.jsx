import { useState,useEffect } from 'react'
import "./Form.css"

function Form() {
    const [formValues,setFormValues] = useState({first_name:"",last_name:"",email:"",contact:""})
  const [formError,setFormError] = useState({})
  const [success,setSuccess] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = e =>{
    const {id,value} = e.target
    setFormValues({...formValues, [id]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    setFormError(checkError(formValues))
    setIsSubmit(true)
  }

  useEffect(() =>{
    if (isSubmit && Object.keys(formError).length == 0){
      setSuccess(true)
    }
  },[formError])

  const checkError = value => {
    let error = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(value.first_name.length == 0){
      error.first_name = "Please enter your first name"
    }

    if(value.last_name.length == 0){
      error.last_name = "Please enter your last name"
    }

    if(value.email.length == 0){
      error.email = "Please enter your email"
    }else if(!regex.test(value.email)){
      error.email = "Please enter a valid email"
    }

    if(value.contact.length == 0){
      error.contact = "Please enter your contact"
    }else if(value.contact.length<10 || value.contact.length>10){
      error.contact = "Please enter a valid contatc"
    }

    return error
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div id="items">
        {success?<p className='success'>Registration success</p>:<p></p>}
        <input type="text" id='first_name' value={formValues.first_name} onChange={handleChange} placeholder='First Name'/>
        <p className='error'>{formError.first_name}</p>
        <input type="text" id='last_name' value={formValues.last_name} onChange={handleChange} placeholder='Last Name'/>
        <p className="error">{formError.last_name}</p>
        <input type="text" id='email' value={formValues.email} onChange={handleChange} placeholder='Email'/>
        <p className="error">{formError.email}</p>
        <input type="number" id='contact'value={formValues.contact} onChange={handleChange} placeholder='Contact'/>
        <p className="error">{formError.contact}</p>
        <button type='submit'>Register</button>
      </div>
    </form>
    </>
  )
}

export default Form