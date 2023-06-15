import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { Col, Container, Row } from 'react-bootstrap';
import MyButton from '../../Components/Button/Button';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import './Login.css';


function Login() {

    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const responseMessage = (response: any) => {
        console.log(jwtDecode(response.credential));
    };

    return (

        <div className='login-wrapper borderBasic'>
            <div className='login-title'>
                <FiLogIn />
                <h3 style={{ textAlign: "center" }}>ورود به حساب کاربری</h3>
            </div>
            <form className='login-form' action="">
                <label htmlFor="Name" >نام کاربری / ایمیل</label>
                <input className='login-name-input' type="text" id='Name' />
                <label htmlFor="Password">گذرواژه</label>
                <div className='login-password'>
                    <input type={showPass ? "text" : "password"} id='Password' />
                    <a onClick={toggleShowPass}>
                        {
                            showPass ?
                                <AiFillEyeInvisible />
                                :
                                <AiFillEye />
                        }
                    </a>
                </div>

                <MyButton variant='contained'>ورود</MyButton>
                <MyButton style={{ margin: "10px 0" }} variant='outlined' onClick={() => navigate("/Register")}>ثبت نام</MyButton>
                <div className='google-register'>

                    <GoogleOAuthProvider clientId="789241900390-a5e9djesllvktl407v4pha9t8hn8442s.apps.googleusercontent.com">

                        <GoogleLogin onSuccess={responseMessage} />
                    </GoogleOAuthProvider>
                </div>

            </form>
        </div>


    )
}

export default Login;