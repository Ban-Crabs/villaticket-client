import { Routes, Route } from "react-router-dom";

const AuthView = () => {
    return(
        <>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </>
    );
}

export default AuthView;