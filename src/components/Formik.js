import React from 'react'
import { useFormik } from 'formik';
import Formik2 from './Formik2';

export default function Formik() {

    const validate = values => {
        const errors = {}
        if (!values.name) {
            errors.name = 'Name is Required'
        }
        else if (values.name.length < 2) {
            errors.name = 'Must be 2 characters or more';
        }

        if (!values.email) {
            errors.email = 'email is Required'
        }

        if (!values.password) {
            errors.password = 'password is Required'
        }

        return errors
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    })


    return (
        <div className='container' >
            <h2>Formik form Validation</h2>
            <form action="" onSubmit={formik.handleSubmit}>
                <input type="text"
                    placeholder='enter your name'
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <br />
                <input type="text"
                    placeholder='enter your email'
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <br />
                <input type="text"
                    placeholder='enter your password'
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <Formik2/>
        </div>        
    )
}
