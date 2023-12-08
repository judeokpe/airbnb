'use client'
import axios from 'axios'
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'
import {
    FieldValues, SubmitHandler, useForm
} from 'react-hook-form'
import { useState } from 'react';

import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
const RegisterModal = () => {

    const [isLoading, setIsLoading] = useState(false)

const registerModal = useRegisterModal()

const {
     register, handleSubmit, formState:{errors}
} = useForm <FieldValues>({defaultValues:{name: "", email: '', password: ''}})


const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);


    axios.post('/api/register', data)
    .then(()=>{
        registerModal.onClose();
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        setIsLoading(false)
    })
}


const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading subtitle='Create an account' title='Welcome to Airbnb' />
        <Input
        id = "email"
        disabled = {isLoading}
        label = "Email"
        register = {register}
        required
        errors={errors}
        />
        <Input
        id = "name"
        disabled = {isLoading}
        label = "Name"
        register = {register}
        required
        errors={errors}
        />
        <Input
        id = "password"
        disabled = {isLoading}
        label = "Password"
        register = {register}
        required
        errors={errors}
        type='password'
        />
    </div>
)
    return ( 
        <Modal 
        disabled = {isLoading}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        isOpen = {registerModal.isOpen}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}

        />
     );
}
 
export default RegisterModal;