import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "../../components/AuthForm/SignIn/SignIn";
import Register from "../../components/AuthForm/Register/Register";
import { useUserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

const AuthView = () => {
    const { user } = useUserContext();
    const nav = useNavigate();

    useEffect(() => {
        if (user !== null) {
            nav("/");
        }
    }, [user])

    return (
        <>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default AuthView;