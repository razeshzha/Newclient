/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@/schemas/login.schema"
import { LuAsterisk } from "react-icons/lu"
import toast from 'react-hot-toast'
import { ILogin } from "@/interface/auth/auth.interface"
import { useMutation } from '@tanstack/react-query'
import { login } from "@/api/auth"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'

import { useAuth } from '@/context/auth.context'
import { AxiosError } from 'axios'

interface AxiosResponseData {
    message: string;
}

const LoginForm = () => {
    const router = useRouter()
    const { setUser } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema),
        mode: 'all'
    })

    const { mutate, error, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            Cookies.set('access_token', response.token, { expires: 1 });
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
            toast.success(response?.message ?? 'Login successful');
            router.replace('/');
        },
        onError: (error: AxiosError<AxiosResponseData>) => {
            const errorMessage = error.response?.data?.message ?? 'Login failed';
            toast.error(errorMessage);
        }
    })

    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg">
            <div className="flex flex-col gap-4 md:gap-6 w-full">
                {/* Email Field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='flex items-center gap-1 text-base font-semibold text-gray-800'>
                        Email <LuAsterisk className='text-xs text-red-500' />
                    </label>
                    <input
                        {...register('email')}
                        type='text'
                        name='email'
                        id='email'
                        placeholder="johndoe@gmail.com"
                        className={`text-base border ${errors.email ? 'border-red-500 text-red-500' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                    />
                    {errors?.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='flex items-center gap-1 text-base font-semibold text-gray-800'>
                        Password <LuAsterisk className='text-xs text-red-500' />
                    </label>
                    <input
                        {...register('password')}
                        type='password'
                        name='password'
                        id='password'
                        placeholder="password"
                        className={`text-base border ${errors.password ? 'border-red-500 text-red-500' : 'border-gray-300'} p-2 rounded-md placeholder:text-gray-500`}
                    />
                    {errors?.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    disabled={isPending}
                    type="submit"
                    className='w-full text-base md:text-lg font-semibold px-4 py-2 md:py-3 bg-blue-600 rounded-xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300'
                >
                    {isPending ? 'Logging in...' : 'Login'}
                </button>
            </div>
        </form>
    )
}

export default LoginForm
