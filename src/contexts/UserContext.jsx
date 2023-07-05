import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useConfigContext } from './ConfigContext';
import axios from "axios";

const TOKEN_KEY = "token_wdyt";
const UserContext = React.createContext();

export const UserContextProvider = (props) => {
  //Estado para el token
  //Estado para los datos del usuario
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  const { startLoading, stopLoading } = useConfigContext();

  //Efecto para verificar la existencia del token
  useEffect(() => {
    const _token = getTokenLS();

    if (_token !== null) {
      setToken(_token);
    }
  }, []);

  //Efecto para verificar el usuario
  useEffect(() => {
    //Obtener la info del usuario
    const _user = getUserLS();

    if (_user !== null) {
      setUser(_user);
    }
  }, [token])

  useEffect(() => {
    //Obtener los roles del usuario
    const _roles = getRolesLS();

    if (_roles !== null) {
      setRoles(_roles);
    }
  }, [user])

  const fetchUserInfo = async () => {
    const _token = getTokenLS();

    if (!_token) return;

    //startLoading();
    try {
      const head = { headers: { 'Authorization': `Bearer ${_token}` } }
      const { data } = await axios.get("/user/whoami", head);
      setUser(data);
      setUserLS(data);
    } catch (error) {
      logout();
    } /* finally {
      //stopLoading();
    } */
  }

  const fetchRoles = async () => {
    const _token = getTokenLS();
    const _user = getUserLS();

    if (!_user || !_token) return;

    //startLoading();
    try {
      const head = { headers: { 'Authorization': `Bearer ${_token}` } }
      const { data } = await axios.get(`/user/privilege`, head);
      setRoles(data);
      setRolesLS(data);
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
    startLoading();
    try {
      const { data } = await axios.post("/user/login", { id, password }, { headers: { 'Content-Type': 'multipart/form-data' } });
      console.log(data);
      const _token = data.token;

      setToken(_token);
      setTokenLS(_token);
      axios.defaults.headers.common = { "Authorization": `Bearer: ${_token}` }
      await fetchUserInfo();
      await fetchRoles();
      //Guardar el LS nuestro token
    } catch (error) {
      const { status } = error.response || { status: 500 };
      const msgs = {
        "404": "User not found",
        "401": "Unauthorized",
        "500": "Unexpected error"
      };

      logout();
      console.error(msgs[String(status)]);
    } finally {
      stopLoading();
    }
  }

  const tokenLogin = async (googleData) => {
    //startLoading();
    try {
      console.log(googleData);
      const namePath = 'https://www.googleapis.com/auth/userinfo.profile'
      const user = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleData.access_token}&scope=${namePath}`).then(res => res.json())
      console.log(user);

      await register(user.name, user.email);
      //Guardar el LS nuestro token
    } catch (error) {
      const { status } = error.response || { status: 500 };
      const msgs = {
        "404": "User not found",
        "401": "Unauthorized",
        "500": "Unexpected error"
      };

      logout();
      console.error(msgs[String(status)]);
    } finally {
      //stopLoading();
    }
  }

  const logout = () => {
    removeTokenLS();
    removeUserLS();
    removeRolesLS();
    removeActivationCodeLS();
    delete axios.defaults.headers.common["Authorization"];
  }

  const register = async (username, email) => {
    //startLoading();
    try {

      const {data} = await axios.post("/user/google", { username, email }, {headers: {'Content-Type': 'multipart/form-data'}});
      if(data.code !== undefined && data.code !== null) setActivationCodeLS(data.code);
      else {
        const _token = data.token;

        setToken(_token);
        setTokenLS(_token);
        axios.defaults.headers.common = { "Authorization": `Bearer: ${_token}`}
        await fetchUserInfo();
        await fetchRoles();
      }
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

  const traditionalRegister = async (username, email, password) => {
    //startLoading();
    try {
      const {data} = await axios.post("/user/traditionalRegister", { username, email, password }, {headers: {'Content-Type': 'multipart/form-data'}});
      setActivationCodeLS(data.code);
    } catch (error) {

      const { status } = error.response || { status: 500 };
      const msgs = {  
        "400": "Wrong Fields",
        "409": "User already exists",
        "500": "Unexpected error"
      }

      console.error(msgs[String(status)]);

    } // finally {stopLoading();} 
  }

  const state = {
    token,
    user,
    roles,
    login,
    tokenLogin,
    logout,
    register,
    traditionalRegister
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
export const getTokenLS = () => localStorage.getItem(TOKEN_KEY);
const removeTokenLS = () => localStorage.removeItem(TOKEN_KEY);
const setUserLS = (user) => localStorage.setItem("user", JSON.stringify(user));
export const getUserLS = () => JSON.parse(localStorage.getItem("user"));
const removeUserLS = () => localStorage.removeItem("user");
const setRolesLS = (roles) => localStorage.setItem("roles", JSON.stringify(roles));
export const getRolesLS = () => JSON.parse(localStorage.getItem("roles"));
const removeRolesLS = () => localStorage.removeItem("roles");

export const getActivationCodeLS = () => localStorage.getItem("activationCode");
const setActivationCodeLS = (code) => localStorage.setItem("activationCode", code);
const removeActivationCodeLS = () => localStorage.removeItem("activationCode");