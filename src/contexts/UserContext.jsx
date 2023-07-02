import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

// import { useConfigContext } from './ConfigContext';
import axios from "axios";

const TOKEN_KEY = "token_wdyt";
const UserContext = React.createContext();

export const UserContextProvider = (props) => {
  //Estado para el token
  //Estado para los datos del usuario
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

//const { startLoading, stopLoading } = useConfigContext();

  //Efecto para verificar la existencia del token
  useEffect(() => {
    const _token = getTokenLS();

    if (_token) {
      setToken(_token);
    }
  }, []);

  //Efecto para verificar el usuario
  useEffect(() => {
    //Obtener la info del usuario
    fetchUserInfo();
  }, [token])

  useEffect(() => {
    //Obtener los roles del usuario
    fetchRoles();
  }, [user])

  const fetchUserInfo = async () => {
    if (!token) {
      return;
    }

    //startLoading();
    try {
      const head = {headers: {'Authorization': `Bearer ${token}`}}
      const { data } = await axios.get("/user/whoami", head);
      setUser(data);

    } catch (error) {
      logout();
    } /* finally {
      //stopLoading();
    } */
  }

  const fetchRoles = async () => {
    if (!user) {
      return;
    }

    //startLoading();
    try {
      const head = {headers: {'Authorization': `Bearer ${token}`}}
      const { data } = await axios.get(`/user/${data.username}/privilege`, head);
      setRoles(data);
    } catch (error) {
      logout();
    } /* finally {
      //stopLoading();
    } */
  }

  //Función para login
  //Función para logout
  //Función para register
  const login = async (id, password) => {
    //startLoading();
    try {
      const { data } = await axios.post("/user/login", { id, password }, {headers: {'Content-Type': 'multipart/form-data'}});
      const _token = data.token;

      setToken(_token);
      setTokenLS(_token);
      //Guardar el LS nuestro token
    } catch (error) {
      const { status } = error.response || { status: 500 };
      const msgs = {
        "404": "User not found",
        "401": "Unauthorized",
        "500": "Unexpected error"
      };

      logout();
      toast.error(msgs[String(status)]);
    } finally {
      //stopLoading();
    }
  }

  const logout = () => {
    removeTokenLS();
    setToken(null);
    setUser(null);
  }

  const register = async (username, email, password) => {
    //startLoading();
    try {
      await axios.post("/user/traditionalRegister", { username, email, password }, {headers: {'Content-Type': 'multipart/form-data'}});
    } catch (error) {

      const { status } = error.response || { status: 500 };
      const msgs = {
        "400": "Wrong Fields",
        "409": "User already exists",
        "500": "Unexpected error"
      }

      toast.error(msgs[String(status)]);

    } // finally {stopLoading();} 
  }

  const state = {
    token,
    user,
    roles,
    login,
    logout,
    register
  }

  return <UserContext.Provider value={state} {...props} />
}

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be call inside of a UserContextProvider component");
  }

  return context;
}

const setTokenLS = (token) => localStorage.setItem(TOKEN_KEY, token);
const getTokenLS = () => localStorage.getItem(TOKEN_KEY);
const removeTokenLS = () => localStorage.removeItem(TOKEN_KEY);