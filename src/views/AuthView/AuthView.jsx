import { Routes, Router } from "react-router-dom";

const AuthView = () => {
    return(
        <Routes>
            <Router path="/login" element={<Login/>}/>
            <Router path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default AuthView;