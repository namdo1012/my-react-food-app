import React from 'react';
import SignInForm from './components/SignInForm';
import backgroundImg from './img/sign-in-background.jpg';
import './SignIn.css';

function SignIn() {
    return (
        <div>
            <div className="background">
                <img src={backgroundImg} alt="background-img" />
            </div>
            <h1 className="logo">Maola</h1>
            <SignInForm ></SignInForm>
      </div>
    )
}

export default SignIn;