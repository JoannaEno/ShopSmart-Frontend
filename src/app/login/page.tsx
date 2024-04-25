"use client"
import { Button, Input, LoadingIndicator, Text } from '@/components/elements'
import { useLoginMutation } from '@/services/auth/auth';
import { useAppDispatch } from '@/utils/hooks/reduxHooks';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCredentials } from '@/services/auth/authSlice'

const Login = () => {
    const dispatch = useAppDispatch();
    const [login, { isLoading }] = useLoginMutation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState<any>("")

    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setErrorMsg("")
        try {
            const response = await login({ email, password }).unwrap();
            console.log(response);
            dispatch(setCredentials({ user: response.user, token: response.token }))
            router.push('/')
        } catch (error: any) {
            // Handle sign-in error
            console.error(error);
            if (error) {
                console.log(error)
                // alert(JSON.stringify(error));
                // setErrorMsg(error.data.detail ? JSON.stringify(error.data.detail) : "Oops! something went wrong, try again soon")
            }

        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <div className="flex flex-col justify-center items-center p-8 lg:p-16 shadow-lg shadow-black/10 lg:w-[30%]">
                    <Text level='h1' className='text-black font-black text-3xl pb-6'>Login</Text>
                    <Input name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} label={'Email'} className='py-2' />
                    <Input name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} label={'Password'} className='py-2' />
                    {isLoading ? <LoadingIndicator /> : <Button type='submit' label={'Login'} className='bg-blue text-white rounded-full w-full font-medium py-4 mt-6' />}
                    {errorMsg && <Text className='text-red-600 text-md py-2'>{errorMsg}</Text>}

                    <div className="flex justify-between w-full">
                        <Text className='text-black font-medium text-md py-4'>Not Registered?</Text>
                        <Button href='/register' label={'Register'} className='text-blue font-medium py-4 text-md' />
                    </div>
                </div>



            </div>
        </form>

    )
}

export default Login