// SignIn
import style from "./SignIn.module.scss";

import { useUserContext } from "../../../contexts/UserContext";
import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const {login, tokenLogin} = useUserContext();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log("Login/register attempt submitted");
        e.preventDefault();
        await login(identifier, password);
        navigate("/");
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        console.log("Google Login");
        googleLogin();
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async(tokenResponse)=> {
            console.log("tokenResponse: ", tokenResponse);
            await tokenLogin(tokenResponse);
        },
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
      });
    
    
    const handleRegister = (e) => {
      e.preventDefault();
      navigate("/auth/register");
    }
    return (
        <section>
            <div className={style["container"]}>
                <form className={style["form"]} >
                    <h1>Villa Ticket</h1>
                    <h3>SIGN IN</h3>
                    <p className={style["form-title"]}>Enter your credentials to access your account</p>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter username or email" type="text" value={identifier} onChange={({target}) => setIdentifier(target.value)}/>
                    </div>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                    </div>

                    <button className={style["submit"]} type="button" onClick={handleSubmit}>
                        Sign in
                    </button>

                    <button type="button" className={style["login-with-google-btn"]} onClick={handleGoogleLogin}>
                        Sign in with Google
                    </button>

                    <button className={style["submit"]} type="button" onClick={handleRegister}>
                        Register
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SignIn;