import React from 'react'
import { useForm } from "react-hook-form"
import apicallfunction from '../apicallfunction'
import { useNavigate } from 'react-router-dom'



export default function Add() {

    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        apicallfunction('http://localhost:4000/userinfo',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-type':'application/json'}
        })
        .then(result=>{
            console.log(result)  
            navigate('/Show')          
        })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Add Record</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" className='form-control' placeholder='Enter Your name' /><br />  
                <input {...register("Place")} type="text" className='form-control' placeholder='Enter Your Place' /><br />
                <input {...register("email")} type="text" className='form-control' placeholder='Enter Your Email' /><br />
                <input {...register("password")} type="text" className='form-control' placeholder='Enter Your Password' /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}