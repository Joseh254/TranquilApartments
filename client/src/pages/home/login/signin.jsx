import React from 'react';
import './signIn.css';
import { useFormik } from 'formik';
import { Link ,useNavigate } from 'react-router-dom';
import { url_api } from '../../../../utils/config';
import { useState } from 'react';

// import axios from 'axios';

function Signin() {
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");
const navigate=useNavigate();

const  handleSubmit =async(values)=>{
  try{
    setLoading(true);
    setError(false)
const response =await fetch (`${url_api}/api/users/register`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
  }, 
  body: JSON.stringify(values)
})
// const response=await axios.post('${apiBase}/api/users/register',values);

const data=await response.json();
if (data.success  ===true){
  navigate("/Signup")
}else{
  setError(data.message)
}
  }catch(e){
    setError(e.message)
  }
    finally{
      setLoading(false);
   
  }
}
    const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          emailaddress: "",
          password: "",         
        },
        onSubmit: handleSubmit,
        validate: (values) => {
          let errors = {};
          if (values.firstname === "") {
            errors.firstname = "First Name required..";
          } else if (values.firstname.length < 3) {
            errors.firstname = "Must have 3 characters or more...";
          }

          if (values.lastname === "") {
            errors.lastname = "Last name required...";
          } else if (values.lastname.length < 3) {
            errors.lastname = "Must have 3 characters or more";
          }

          if (values.emailaddress === "") {
            errors.emailaddress = "Email address required"; 
          } else if (!values.emailaddress.includes('@')) {
            errors.emailaddress = "Enter a valid email...";
          }

          if (values.password === "") {
            errors.password = "password required";
          }

        

          return errors;
        }
      });

  return (
   <>
    <section className='schedule_a_visit'>
      <h2>Sign In</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='formfield'>
          <input
            type='text'
            name="firstname"
            id="firstname"
            placeholder="First name eg.vee...."
            value={formik.values.firstname} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}required
          />
          {formik.touched.firstname && formik.errors.firstname && <p className="errorp">{formik.errors.firstname}</p>} 
        </div>
        
        <div className='formfield'>
          <input 
            type='text' 
            name="lastname" 
            id="lastname"  
            placeholder='Last name eg.njeri...' 
            value={formik.values.lastname}  
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}required
          />              
          {formik.touched.lastname && formik.errors.lastname && <p className="errorp">{formik.errors.lastname}</p>} 
        </div>

        <div className='formfield'>
          <input 
            type='text'  
            name="emailaddress" 
            id="emailaddress" 
            placeholder='Email address...'
            value={formik.values.emailaddress}  
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}required
          />           
          {formik.touched.emailaddress && formik.errors.emailaddress && <p className="errorp">{formik.errors.emailaddress}</p>} 
        </div>
        
        <div className='formfield'>
          <input
            type='password' 
            name="password" 
            id="password" 
            placeholder='password...'
            value={formik.values.password}  
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}required
          />                 
          {formik.touched.password && formik.errors.password && <p className="errorp">{formik.errors.password}</p>} 
        </div>

     
        
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ?"Please wait...":"Submit"}</button>
          
          <p>Already have an account?<Link to="/Signup">Sign Up here</Link></p>
          {error && <p className='error'>{error}</p>}
      </form>
    </section>
   </>
  );
}

export default Signin;
