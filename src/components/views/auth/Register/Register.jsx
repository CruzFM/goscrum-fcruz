import '../Auth.style.css';

import { useState, useEffect } from 'react';
import { Formik, Field, Form, FormikProps, validateYupSchema, ErrorMessage } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Switch, FormControlLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export const Register = () => {

    const navigate = useNavigate();

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

    const [data, setData] = useState();

    useEffect( ()=> {
      const endPoint = 'https://goscrum-api.alkemy.org/auth/data';
      fetch(endPoint)
        .then(res => res.json())
        .then(data => {
          setData(data.result);
        })
    }, []);
    
    const handleChangeContinent = (value, setValue) => {
      setValue('continent', value)
      console.log(value)
      if(value !== 'America'){
        setValue('region', 'otro')
      }
    }

    return (
      <div className="auth">
        <h1>Register here</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "",
            teamID: "",
            continent: "",
            region: "",
            switch: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            const teamID = !values.teamID ? uuidv4() : values.teamID;
            fetch('https://goscrum-api.alkemy.org/auth/data', {
              method: "POST",
              headers:{
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user:{
                  name: values.name,
                  password: values.password,
                  email: values.email,
                  teamID,
                  role: values.role,
                  continent: values.continent,
                  region: values.region,
                },
              }),
            })
              .then(res=> res.json() )
              .then(data=> navigate('/registered', {replace: true}) )
          }}
        >
          {({
            touched,
            errors,
            isSubmitting,
            handleBlur,
            values,
            handleChange,
            setFieldValue,
          }) => (
            <Form>
              <div className="form-control">
                <label htmlFor="name">User Name</label>
                <Field
                  type="input"
                  name="name"
                  placeholder="User Name."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  className={errors.name && touched.name ? "error-field" : ""}
                />
                {errors.name && touched.name && (
                  <div className="errors">{errors.name}</div>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password."
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "error-field" : ""
                  }
                />
                {errors.password && touched.password && (
                  <div className="errors">{errors.password}</div>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email."
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.email && touched.email ? "error-field" : ""}
                />
                {errors.email && touched.email && (
                  <div className="errors">{errors.email}</div>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="role">Role</label>
                <Field
                  as="select"
                  name="role"
                  value={values.role}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.role && touched.role ? "error-field" : ""}
                >
                  <option value="">Select your option</option>
                  {data?.Rol?.map((role) => (
                    <option value={role} key={role}>
                      {role}
                    </option>
                  ))}
                </Field>
                {errors.role && touched.role && (
                  <div className="errors">{errors.role}</div>
                )}
              </div>

              <FormControlLabel
                control={
                  <Switch
                    value={values.switch}
                    onChange={() =>
                      setFieldValue("switch", !values.switch)
                    }
                    name="switch"
                    color="secondary"
                    />
                }
                label="Already belong to a team."
              />
              {values.switch && 
              (<div className="form-control">
                <label htmlFor="teamID">Please, introduce your Team ID</label>
                <Field
                  type="text"
                  name="teamID"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.teamID}
                />
              </div>)}
              <div className="form-control">
                <label htmlFor="continent">Continent</label>
                <Field
                  as="select"
                  name="continent"
                  onBlur={handleBlur}
                  onChange={event => handleChangeContinent(event.currentTarget.value, setFieldValue)}
                  value={values.continent}
                  className={
                    errors.continent && touched.continent ? "error-field" : ""
                  }
                >
                  <option value="">Select your Continent</option>
                  {data?.continente?.map((continent) => (
                    <option value={continent} key={continent}>
                      {continent}
                    </option>
                  ))}
                </Field>
                {errors.continent && touched.continent && (
                  <div className="errors">{errors.continent}</div>
                )}
              </div>

              {values.continent === "America" && (
                <div className="form-control">
                  <label htmlFor="region">Region</label>
                  <Field
                    as="select"
                    name="region"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.region}
                    className={
                      errors.region && touched.region ? "error-field" : ""
                    }
                  >
                    <option value="">Select your region</option>
                    {data?.region?.map((place) => (
                      <option value={place} key={place}>
                        {place}
                      </option>
                    ))}
                  </Field>
                  {errors.region && touched.region && (
                    <div className="errors">{errors.region}</div>
                  )}
                </div>
              )}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <div>
                <h6>Already have an account? </h6>
                <Link to="/login">Login here.</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };