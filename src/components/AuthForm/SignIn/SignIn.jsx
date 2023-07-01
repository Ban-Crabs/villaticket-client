// SignIn
import style from "./SignIn.module.scss";

import { useUserContext } from "../../../contexts/UserContext";
import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const {login} = useUserContext();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(identifier, password);
        navigate(history.location.state?.from || "/");
    }

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        flow: 'auth-code',
      });

      const handleRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    }

    return (
        <section>
            <div className={style["container"]}>
                <form className={style["form"]}>
                    <h1>Villa Ticket</h1>
                    <h3>SIGN IN</h3>
                    <p className={style["form-title"]}>Enter your credentials to access your account</p>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter username or email" type="text" value={identifier} onChange={({target}) => setIdentifier(target.value)}/>
                    </div>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                    </div>
                    <button className={style["submit"]} type="submit" onClick={() => handleSubmit}>
                        Sign in
                    </button>

                    <button type="button" className={style["login-with-google-btn"]} onClick={() => googleLogin}>
                        Sign in with Google
                    </button>

                    <button className={style["submit"]} type="submit" onClick={() => handleRegister}>
                        Register
                    </button>
                </form>

            </div>
        </section>
    )
}

export default SignIn;