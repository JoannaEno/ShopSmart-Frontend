"use client"
import React, { useState } from 'react'
import { Button, Input, LoadingIndicator, Text } from '@/components/elements'
import { useAppDispatch } from '@/utils/hooks/reduxHooks'
import { useRegisterMutation } from '@/services/auth/auth'
import { useRouter } from 'next/navigation'

const Register = () => {
    const dispatch = useAppDispatch();
    const [register, { isLoading }] = useRegisterMutation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState<any>("")
   

    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
              e.preventDefault();
              setErrorMsg("")
              try {
                const response = await register({ email, password, name }).unwrap();
                console.log(response);
                router.push('/login')
              } catch (error:any) {
                // Handle sign-in error
                console.error(error);
                if (error){
                    setErrorMsg(JSON.stringify(error.data.detail))
                }
                
              }
            };
    return (
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center min-h-screen '>
             
            <div className="flex flex-col justify-center items-center p-8 lg:p-16 shadow-lg shadow-black/10 lg:w-[30%]">
               
                <Text level='h1' className='text-black font-black text-3xl pb-6'>Register</Text>
                <Input name={'name'} value={name} onChange={(e)=> setName(e.target.value)} label={'Fullname'} className='py-2' />
                <Input name={'email'} value={email} onChange={(e)=> setEmail(e.target.value)} label={'Email'} className='py-2' />
                <Input name={'password'} value={password} onChange={(e)=> setPassword(e.target.value)} label={'Password'} className='py-2' />
                {isLoading ? <LoadingIndicator/> : <Button type='submit' label={'Register'} className='bg-blue text-white rounded-full w-full font-medium py-4 mt-6' />}
                { errorMsg && <Text className='text-red-600 text-md py-2'>{errorMsg}</Text>}

                <div className="flex justify-between w-full">
                    <Text className='text-black font-medium text-md py-4'>Already Registered?</Text>
                   <Button  href='/login' label={'Login'} className='text-blue font-medium py-4 text-md' />
                </div>
                
               
            </div>

            

        </div>
        </form>
    )
}

export default Register
