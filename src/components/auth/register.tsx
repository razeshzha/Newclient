 
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { IRegister } from "@/interface/auth/auth.interface"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LuAsterisk } from "react-icons/lu";
import GenderInput from "./gender-input"
import { registerSchema } from "@/schemas/register.schema"
import {
    useMutation
} from '@tanstack/react-query'
import toast from 'react-hot-toast';

import { register as registerUser } from "@/api/auth"
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
const Register = () => {
const router = useRouter()

    const { control, register, handleSubmit, formState: { errors } } = useForm<IRegister>({
        defaultValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            confirm_password: '',
            gender: {},
            phoneNumber: ''
        },
        resolver: yupResolver(registerSchema),
        mode: 'all'
    })

    console.log(errors)
    // Mutations
    const { mutate, error, isPending } = useMutation({
        mutationFn: registerUser,
        onSuccess: (response) => {
            console.log('response', response)
            toast.success('Register successful')
            router.replace('/login')
        },

        onError: (error) => {
            console.log('register', error)
            toast.error(error.message ?? 'Register failed')
        }

    })

    const onSubmit: SubmitHandler<IRegister> = (data) => {
        console.log(data)
        const { confirm_password, gender, ...others } = data
        mutate({ ...others, gender: gender?.value })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex flex-col gap-3 md:gap-8 p-2 md:p-4 w-full md:min-w-[500px]'}>
                <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex '>
                            <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="email" >First Name </label>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>
                        <input
                            {...register('firstName')}
                            type='text'
                            name='firstName'
                            placeholder="John"
                            className={`text-lg border ${errors.firstName ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                        />
                        {errors?.firstName && <p className='text-xs text-red-500'>{errors.firstName.message}</p>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex '>
                            <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="email" >Last Name </label>
                            <LuAsterisk className='text-xs text-red-500' />
                        </div>
                        <input
                            {...register('lastName')}
                            type='text'
                            name='lastName'
                            placeholder="Doe"
                            className={`text-lg border ${errors.lastName ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                        />
                        {errors?.lastName && <p className='text-xs text-red-500'>{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex '>
                        <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="email" >Phone Number </label>
                        <LuAsterisk className='text-xs text-red-500' />
                    </div>
                    <input
                        {...register('phoneNumber')}
                        type='text'
                        name='phoneNumber'
                        placeholder="986538767"
                        className={`text-lg border ${errors.phoneNumber ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                    />
                    {errors?.phoneNumber && <p className='text-xs text-red-500'>{errors.phoneNumber.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex '>
                        <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="email" >Email </label>
                        <LuAsterisk className='text-xs text-red-500' />
                    </div>
                    <input
                        {...register('email')}
                        type='text'
                        name='email'
                        placeholder="johndoe@gmail.com"
                        className={`text-lg border ${errors.password ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                    />
                    {errors?.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="password" >Password</label>
                        <LuAsterisk className='text-xs text-red-500' />
                    </div>


                    <input
                        {...register('password')}
                        type="password"
                        name='password'
                        placeholder="password"
                        className={`text-lg border ${errors.password ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}

                    />
                    {errors?.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}

                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='text-base tracking-wide font-semibold text-gray-800' htmlFor="password" >Confirm Password</label>
                        <LuAsterisk className='text-xs text-red-500' />
                    </div>


                    <input
                        {...register('confirm_password')}
                        type="password"
                        name='confirm_password'
                        placeholder="password"
                        className={`text-lg border ${errors.confirm_password ? 'border-red-500 text-red-500 ' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}

                    />
                    {errors?.confirm_password && <p className='text-xs text-red-500'>{errors.confirm_password.message}</p>}

                </div>

                <div>
                    <GenderInput control={control} />
                </div>

                <button disabled={isPending} className='text-lg font-semibold px-4 py-3 bg-blue-500 rounded-md text-white cursor-pointer disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300' type='submit'>
                    {isPending ? ' Signing Up..' : ' Sign Up'}
                </button>
            </div>
        </form>

    )
}

export default Register