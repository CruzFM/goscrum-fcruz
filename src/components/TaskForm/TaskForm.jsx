import './TaskForm.styles.css'

import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup';



export const TaskForm = () => {

    const taskFormSchema = () => Yup.object().shape( {
        title: Yup.string()
            .required("*Required field.")
            .min(3, "*Title is too short."),
        status: Yup.string()
            .required("*Status is required"),
        priority: Yup.string()
            .required("*Priority is required"),
    })
    return(
        <section className="taskForm">
            <h2>Create task</h2>
            <p>Here you can create new tasks</p>
            <Formik
                initialValues={{
                    title: '',
                    status: '',
                    priority: '',
                    description: '',
                }}
                validationSchema={taskFormSchema}
                onSubmit={ (values) => alert(values.description)}
            >
                { ({touched, errors, handleBlur}) => (
                    <Form>
                        {/* <label htmlFor='title'>Title</label> */}
                        <Field 
                            type='input' 
                            placeholder='Title' 
                            name='title' 
                            className={errors.title ? 'error-field' : ''}
                            onBlur={handleBlur}
                        />
                        {touched.title && errors.title && <div className='errors'>{errors.title}</div>}
                        {/* <label htmlFor='status'>Status</label> */}
                        <Field 
                            as='select' 
                            name='status' 
                            className={errors.status ? 'error-field' : ''}
                            onBlur={handleBlur}
                        >
                            <option value="">Select Status</option>
                            <option value="new">New</option>
                            <option value="inProcess">inProcess</option>
                            <option value="finished">finished</option>
                        </Field>
                        {touched.status && errors.status && <div className='errors'>{errors.status}</div>}
                        <Field 
                            as='select' 
                            name='priority' 
                            className={errors.priority ? 'error-field' : ''}
                            onBlur={handleBlur}
                            >
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Field>
                        {touched.priority && errors.priority && <div className='errors'>{errors.priority}</div>}
                        {/* <label htmlFor='description'>Description</label> */}
                        <Field  as='textarea' placeholder='Description...' name='description' className='description' />
                        <button type='submit'>Create task</button>
                    </Form>
                    )
                }
            </Formik>
        </section>
    
    )
}