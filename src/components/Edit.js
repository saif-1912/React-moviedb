import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import apicallfunction from '../apicallfunction'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const navigate = useNavigate()

    var [msg, Setmsg] = useState({})

    const params = useParams()
    console.log(params)

    useEffect(() => {
        apicallfunction('http://localhost:4000/userinfo/' + params.userid)
            .then(result => {
                console.log(result)
                Setmsg(result)

            })
    }, [params.userid])

    

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        apicallfunction('http://localhost:4000/userinfo/'+ params.userid,{
            method:'put',
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
            <h2 className='text-center'>Update Record</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={msg.name} {...register("name")} type="text" className='form-control' placeholder='Enter Your name' /><br />

                <input defaultValue={msg.Place}  {...register("Place")} type="text" className='form-control' placeholder='Enter Your Place' /><br />

                <input defaultValue={msg.email} {...register("email")} type="text" className='form-control' placeholder='Enter Your Email' /><br />

                <input defaultValue={msg.password} {...register("password")} type="text" className='form-control' placeholder='Enter Your Password' /><br />

                <button>Update</button>
            </form>
        </div>
    )
}
