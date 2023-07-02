import {useState} from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import style from "./Register.module.scss";

const Register = () => {
    const {register} = useUserContext();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(username, email);
        navigate("/login");
    }

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        flow: 'auth-code',
      });

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return(
        <section>
            <div className={style["container"]}>
                <form className={style["form"]}>
                    <h1>Villa Ticket</h1>
                    <h3>SIGN IN</h3>
                    <p className={style["form-title"]}>Enter your credentials to access your account</p>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter username" type="text" value={username} onChange={({target}) => setUsername(target.value)}/>
                    </div>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter email" type="email" value={email} onChange={({target}) => setEmail(target.value)}/>
                    </div>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                    </div>
                    <button className={style["submit"]} type="submit" onClick={() => handleSubmit}>
                        Sign up
                    </button>

                    <button type="button" className={style["login-with-google-btn"]} onClick={() => googleLogin}>
                        Sign in with Google
                    </button>

                    <button className={style["submit"]} type="submit" onClick={() => handleSignIn}>
                        Log in
                    </button>
                </form>

            </div>
        </section>
    );
}

export default Register;