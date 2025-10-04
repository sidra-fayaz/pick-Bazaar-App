import Card from '@mui/material/Card'
import React, { useState } from 'react'
import LogoImg from "../../assets/products/Logo.webp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { greenBTN } from '../../assets/style';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
const initialRegisterFormValues= {
    name:"",
    email:"",
    Password:"",
};

    const registerSchema = yup.object({
        name: yup.string().required("Name is a Required"),
        email: yup.string().required("Email is a Required"),
        password: yup.string().required("Password is a Required"),
    });    

    const Register=() => {
        const {control,
            handleSubmit,
            formState: {errors},
        }= useForm({
            defaultValues: initialRegisterFormValues,
            resolver : yupResolver(registerSchema),
    });

    const registerSubmit =(data) => {
        console.log(data); 
    };

    console.log(errors);
    
  return (
    <>
        <Card>
            <div className='flex justify-center'>
                <div>
                    <img src={LogoImg} alt='Logo' />
                    <p>Register New Account</p>
                </div>
            </div>
            
            <form className='' onSubmit={handleSubmit(registerSubmit)}>
                <div className='flex justify-center'>
                    <div>
                        <label>Name</label><br />
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <TextField {... field}/>}
                        />
                        <p className='text-red-500 italic' >{errors ?.name?.message}</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div>
                        <label>Email</label><br />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField {... field}/>}
                        />
                        <p className='text-red-500 italic' >{errors ?.email?.message}</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div>
                        <label>Password</label><br />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <TextField {... field}/>}
                        />
                        <p className='text-red-500 italic'>{errors ?.password?.message}</p>
                    </div>
                </div>

                <div className='text-center mt-3'>
                    <Button type='submit' style={greenBTN}>
                        Register
                    </Button>
                </div>
            </form>
        </Card>
    </>
  );
}; 

export default Register
