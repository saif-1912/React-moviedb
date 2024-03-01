import React from 'react'
import { useForm } from "react-hook-form"

export default function Form1() {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm()

    var myfun = (values) => {
        console.log(values)
    }

    return (
        <div className="container">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit(myfun)}>
                <div class="mb-3">
                    <input {...register("username", { required: true })} class="form-control" placeholder='Enter Your Name' type='text' />
                </div>
 
                {errors.username?.type === "required" && (
                    <p role="alert">Username is required</p>
                )}

                <div class="mb-3">
                    <input {...register("useremail", { required: true })} class="form-control" placeholder='Enter Your D.O.B' type='text' />
                </div>


                <div class="mb-3">
                    <input class="form-control" {...register("usemobile", { required: true })} placeholder='Enter Your Mobile-No' type='number' />
                </div>

                {errors.usemobile?.type === "required" && (
                    <p role="alert">Atleast 10 Digit Required</p>
                )}


                <div class="mb-3">
                    <input {...register("useremail", { required: true })} class="form-control" placeholder='Enter Your email' type='text' />
                </div>

                {errors.useremail?.type === "required" && (
                    <p role="alert">Email-id is Required</p>
                )}


                <div class="mb-3">
                    <input {...register("userpass", { required: true })} class="form-control" placeholder='Enter Your Password' type='text' />
                </div>


                <div class="mb-3">
                    <input {...register("usercpass", { validate: value => value === getValues("userpass") })} class="form-control" placeholder='Confirm Password' type='text' />
                </div>

                {errors.usercpass?.type === "validate" && (
                    <p role="alert">Password Mismatch</p>
                )}


                <select class="form-control" {...register("usercountry")}>
                    <option value="">India</option>
                    <option value="">America</option>
                    <option value="">Canada</option>
                </select>


                <div class="mb-3 ">
                    <input {...register("usergender")} type='radio' value='m' />Male
                    <input {...register("usergender")} type='radio' value='f' />Female
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}