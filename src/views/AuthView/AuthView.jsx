import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "../../components/AuthForm/SignIn/SignIn";
import Register from "../../components/AuthForm/Register/Register";
import { getRolesLS, getTokenLS, getUserLS } from "../../contexts/UserContext";
import { useEffect } from "react";

const AuthView = () => {
    const token = getTokenLS();
    const user = getUserLS();
    const roles = getRolesLS();
    const nav = useNavigate();

    useEffect(() => {
        if (token !== null && user !== null && roles.length > 0) {
            nav("/");
        }
    }, [token, user, roles])

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