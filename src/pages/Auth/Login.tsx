import React, { useState } from 'react';
import { signin } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addAccessToken, addUserData } from '../../store/user.slice';
import { SigninResDTO } from '../../DTOs/responses/signin.res.dto';
import { SigninReqDTO } from '../../DTOs/requests/signin.dto';

type LoginInputs = {
    username: string,
    password: string
};

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>();



    const onSubmit: SubmitHandler<LoginInputs> = async (inputs) => {
        try {
            const { data } = await signin(inputs)
            dispatch(addUserData(data.userData))
            dispatch(addAccessToken(data.token))
            localStorage.setItem('access_token', data.token)
            navigate('/dashboard')

        } catch (error) {
            alert(error)
        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-40 h-40 mr-2" src="/login.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Connecter a votre boutique
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom du boutique</label>
                                <input defaultValue={""}  {...register("username")} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="goodgoro" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input defaultValue={""} {...register("password")} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button type="submit" className="w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
