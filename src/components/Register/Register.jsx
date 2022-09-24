import { Formik, Field, Form, FormikProps, validateYupSchema, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const Register = () => {
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
            ({touched, errors, isSubmitting}) =>(
              <Form>
                <div className='form-control'>
                  <label htmlFor='email'>Email</label>
                  <Field 
                    type='email'
                    name='email'
                    placeholder='enter email.'

                  />
                  {errors.email && <div>{errors.email}</div>}
                </div>
                <div className='form-control'>
                  <label htmlFor='password'>Password</label>
                  <Field 
                    type='password'
                    name='password'
                    placeholder='what? A register with no pw?.'
                  />
                  {errors.password && <div>{errors.password}</div>}
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
    );
  };