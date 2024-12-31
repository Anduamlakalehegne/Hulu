"use client"
import React, { useState } from 'react'

import styles from './page.module.css'


// For Components
import { InputBox } from '../Components/InputBox/InputBox'
import { BackButton } from '../Components/BackButton/BackButton'

const LoginPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [varient, setVarient] = useState('Login')

    const ToggleVarient = () => {
        setVarient(varient === 'Login' ? "Register" : "Login")
    }

    return (
        <>

            <div className={styles.AuthBg}>
                <BackButton
                    LinkText='Back To Home'
                    LinkTo='/'
                />

                <div className={styles.AuthBgRow}>
                    <form>
                        <div className={styles.CustomDetails}>
                            <img src="/assets/logo.svg" alt="" />

                            <h6>
                                {
                                    varient === 'Login' ? 'Login Now' : 'Register Now'
                                }
                            </h6>

                        </div>

                        {
                            varient === 'Register' && (
                                <InputBox
                                    labelText='Your Name'
                                    id='name'
                                    type='text'
                                    required={true}
                                    value={name}
                                    onchange={(e: any) => setName(e.target.value)}
                                />
                            )
                        }


                        <InputBox
                            labelText='Your Email'
                            id='email'
                            type='email'
                            required={true}
                            value={email}
                            onchange={(e: any) => setEmail(e.target.value)}
                        />


                        <InputBox
                            labelText='Your Password'
                            id='password'
                            type='password'
                            required={true}
                            value={password}
                            onchange={(e: any) => setPassword(e.target.value)}
                        />


                        <button type='submit' className={styles.btn}>
                            {varient === 'Login' ? "Login  Now" : "Register Now"}
                        </button>

                        <div className={styles.CustomMessage}>
                            <p>

                                {varient === 'Login' ? "Don't have an account?" : "Already have an account?"}

                                <span onClick={ToggleVarient}>
                                    {varient === 'Login' ? "Register Now" : "Login Now"}
                                </span>
                            </p>
                        </div>



                    </form>
                </div>


            </div>
        </>
    )
}

export default LoginPage