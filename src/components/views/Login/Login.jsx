import { Formik, Field, Form, FormikProps, validateYupSchema, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const Login = () => {

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email addres format')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters at minimum')
      .required('Password is required, jerk')
  });

  return (
    <div className="container">
      <h1>Login here</h1>

      <Formik
        initialValues={ {email: '', password: ''} }
        validationSchema={LoginSchema}
        onSubmit={ (event, values) =>{ 
          event.preventDefault()
          console.log(values) }
        }
      >
        {
          ({touched, errors, isSubmitting}) =>(
            <Form>
              <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field 
                  type='email'
                  name='email'
                  placeholder='example@example.com'

                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <Field 
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
              </div>
              <button 
                type='submit'
                disabled={isSubmitting}
              >
                Submit
              </button>

            </Form>
          )
        }
      </Formik>
    </div>
  )
};