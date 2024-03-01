import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import dataprocess from '../Node_Function/dataprocess';


export default function Formik2() {

    const [data,setdata] = useState()

    const [filevalue, setfilevalue] = useState({})

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            filepath: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Must be 2 characters or more').required('Name is Required'),
            email: Yup.string().email('Invalid Email').required('Email Required'),
            password: Yup.string().min(4, 'Must be 4 characters or more').required('Password Required'),
        }),
        onSubmit: values => {
            values['filepath'] = filevalue
            console.log(values)
            setdata(values)
        }
    })

    const filedatapath = (value) => {
        console.log(value)
        setfilevalue(value)
    }




    return (
        <div className='container' >
            <h2>Formik form Validation with yup </h2>
            <form action="" onSubmit={formik.handleSubmit}>
                <input type="text"
                    placeholder='enter your name'
                    id="name"
                    {...formik.getFieldProps('name')}
                />

                {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}


                <br />


                <input type="file"
                    id="name"
                    type="file"
                    onChange={event => {
                        filedatapath(event.currentTarget.files[0])
                    }}
                />

                {formik.touched.filepath && formik.errors.filepath ? (<div>{formik.errors.filepath}</div>) : null}


                <br />

                <input type="text"
                    placeholder='enter your email'
                    id="email"
                    {...formik.getFieldProps('email')}
                />

                {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                <br />
                <input type="text"
                    placeholder='enter your password'
                    id="password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
