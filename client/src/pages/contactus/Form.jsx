import React from 'react';
import './Contact.css';
import { useFormik } from 'formik';

function Login() {
    const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          emailaddress: "",
          message: "" 
        },
        onSubmit: (formState) => {
          console.log("You Submitted:");
          console.log(formState);
        },
        validate: (formValues) => {
          let errors = {};
          if (formValues.firstname === "") {
            errors.firstname = "First Name required..";
          } else if (formValues.firstname.length < 3) {
            errors.firstname = "Must have 3 characters or more...";
          }

          if (formValues.lastname === "") {
            errors.lastname = "Last name required...";
          } else if (formValues.lastname.length < 3) {
            errors.lastname = "Must have 3 characters or more";
          }

          if (formValues.emailaddress === "") {
            errors.emailaddress = "Email address required"; 
          } else if (!formValues.emailaddress.includes('@')) {
            errors.emailaddress = "Enter a valid email...";
          }

       

          return errors;
        }
      });

  return (
   <>
    <section className='schedule_a_visit'>
      <div className='formcolor'>
      <h2>Book </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='firstname'>
          <input
            type='text'
            name="firstname"
            id="firstname"
            placeholder="First name eg.vee...."
            value={formik.values.firstname} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
          />           
          {formik.touched.emailaddress && formik.errors.emailaddress && <p className="errorp">{formik.errors.emailaddress}</p>} 
        </div>
        
        
        
        <div className='message'>
          <textarea 
            name="message" 
            cols="50" 
            rows="5" 
            placeholder='Space you want...'
            value={formik.values.message} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && <p className="errorp">{formik.errors.message}</p>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
   </>
  );
}

export default Login;
