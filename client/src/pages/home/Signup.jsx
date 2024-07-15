import React, { useState } from 'react';
import './Signup.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { url_api } from '../../../utils/config';
// import useUserStore from '../../../useUserStore'; 

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const changeUserInformation = useUserStore((state) => state.changeUserInformation);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${url_api}/api/users/Signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        // changeUserInformation(data.data);
        navigate("/Properties");
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      emailaddress: '',
      password: ''
    },
    onSubmit: handleSubmit,
    validate: (formValues) => {
      let errors = {};
      if (formValues.firstname === "") {
        errors.firstname = "First Name required..";
      } else if (formValues.firstname.length < 3) {
        errors.firstname = "Must have 3 characters or more...";
      }

      if (formValues.emailaddress === "") {
        errors.emailaddress = "Email address required"; 
      } else if (!formValues.emailaddress.includes('@')) {
        errors.emailaddress = "Enter a valid email...";
      }

      if (formValues.password === "") {
        errors.password = "Password required..."; 
      }

      return errors;
    }
  });

  return (
    <>
      <section className='schedule_a_visit'>
        <h2>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='firstname'>
            <input
              type='text'
              name='firstname'
              id='firstname'
              placeholder='First name eg. vee....'
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname && <p className='errorp'>{formik.errors.firstname}</p>}
          </div>

          <div className='formfield'>
            <input
              type='text'
              name='emailaddress'
              id='emailaddress'
              placeholder='Email address...'
              value={formik.values.emailaddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailaddress && formik.errors.emailaddress && <p className='errorp'>{formik.errors.emailaddress}</p>}
          </div>

          <div className='formfield'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password..'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && <p className='errorp'>{formik.errors.password}</p>}
          </div>

          <button type='submit'disabled={loading}>
            {
              loading? 'loading...':"login"
            }
          </button>
        </form>
      </section>
    </>
  );
}

export default Signup;
