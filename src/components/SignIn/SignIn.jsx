// SignIn
import style from "./SignIn.module.scss";


const SignIn = () => {
    return (
        <>
            <div className={style["container"]}>
                <form className={style["form"]}>
                    <h1>Villa Ticket</h1>
                    <h3>SIGN IN</h3>
                    <p className={style["form-title"]}>Enter your credentials to access your account</p>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter email" type="email" />
                    </div>
                    <div className={style["input-container"]}>
                        <input placeholder="Enter password" type="password" />
                    </div>
                    <button className={style["submit"]} type="submit">
                        Sign in
                    </button>

                    <button type="button" className={style["login-with-google-btn"]} >
                        Sign in with Google
                    </button>
                </form>

            </div>
        </>
    )
}

export default SignIn;