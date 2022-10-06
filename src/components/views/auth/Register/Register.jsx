import '../Auth.style.css';

import { Formik, Field, Form, FormikProps, validateYupSchema, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const Register = () => {
    const LoginSchema = Yup.object().shape({
      name: Yup.string()
        .required('*Name is required')
        .min(4,"Name must be 4 characters at minimum"),
      password: Yup.string()
        .min(3, 'Password must be 3 characters at minimum')
        .required('*Password is required'),
      email: Yup.string()
        .email('Invalid email address format')
        .required('*Email is required'),
      role: Yup.string()
        .required("*Role is required."),
      continent: Yup.string()
        .required('*Continent is required'),
      region: Yup.string()
        .required('*Your region is required'),
    });

    return (
      <div className="auth">
        <h1>Register here</h1>

        <Formik
          initialValues={ {email: '', password: ''} }
          validationSchema={LoginSchema}
          onSubmit={ (event, values) =>{ 
            event.preventDefault()
            console.log(values) }
          }
        >
          {
            ({touched, errors, isSubmitting, handleBlur}) =>(
              <Form>
                <div className='form-control'>
                  <label htmlFor='name'>User Name</label>
                  <Field 
                    type='input'
                    name='name'
                    placeholder='User Name.'
                    onBlur={handleBlur}
                    className={errors.name ? 'error-field' : ''}
                  />
                  {errors.name && touched.name && <div className='errors'>{errors.name}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='password'>Password</label>
                  <Field 
                    type='password'
                    name='password'
                    placeholder='Password.'
                    onBlur={handleBlur}
                    className={errors.password ? 'error-field' : ''}
                  />
                  {errors.password && touched.password && <div className='errors'>{errors.password}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='email'>Email</label>
                  <Field 
                    type='email'
                    name='email'
                    placeholder='Email.'
                    onBlur={handleBlur}
                    className={errors.email ? 'error-field' : ''}
                  />
                  {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='role'>Role</label>
                  <Field 
                    as='select'
                    name='role'
                    onBlur={handleBlur}
                    className={errors.role ? 'error-field' : ''}
                  >
                    <option value="">Select your option</option>
                    <option value="Team Member">Team member</option>
                    <option value="Team Leader">Team Leader</option>
                  </Field>
                  {errors.role && touched.role && <div className='errors'>{errors.role}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='continent'>Continent</label>
                  <Field 
                    as='select'
                    name='continent'
                    onBlur={handleBlur}
                    className={errors.continent ? 'error-field' : ''}
                  >
                    <option value="">Select your Continent</option>
                    <option value="America">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                  </Field>
                  {errors.continent && touched.continent && <div className='errors'>{errors.continent}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='region'>Region</label>
                  <Field 
                    as='select'
                    name='region'
                    onBlur={handleBlur}
                    className={errors.region ? 'error-field' : ''}
                  >
                    <option value="">Select your region</option>
                    <option value="Latam">Latam</option>
                    <option value="East Europe">East Europe</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Another">Another</option>
                  </Field>
                  {errors.region && touched.region && <div className='errors'>{errors.region}</div>}
                </div>
                
                <button 
                  type='submit'
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <div>
                  <h6>Already have an account? </h6>
                  <Link to='/login'>Login here.</Link>
                </div>
              </Form>
            )
          }


        </Formik>
      </div>
    );
  };