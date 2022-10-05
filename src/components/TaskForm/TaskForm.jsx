import './TaskForm.styles.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export const TaskForm = () => {
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
                onSubmit={ (values) => alert(values.description)}
            >
                { ({touched, errors}) => (
                    <Form>
                        {/* <label htmlFor='title'>Title</label> */}
                        <Field type='text' placeholder='Title' name='title' />
                        {/* <label htmlFor='status'>Status</label> */}
                        <Field as='select' name='status'>
                            <option value="">Select Status</option>
                            <option value="new">New</option>
                            <option value="inProcess">inProcess</option>
                            <option value="finished">finished</option>
                        </Field>
                        <Field as='select' name='priority'>
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Field>
                        {/* <label htmlFor='description'>Description</label> */}
                        <Field  type='text' placeholder='Description...' name='description'/>
                        <button type='submit'>Create task</button>
                    </Form>
                    )
                }
            </Formik>
        </section>
    
    )
}