// SysadminPermit

import { useEffect } from "react";
import { useState } from "react";
import { getTokenLS } from "../../contexts/UserContext";
import style from "./SysadminPermit.module.scss";
import axios from "axios";
import PermissionList from "./PermissionList/PermissionList";

const SysadminPermit = props => {
    const {userId} = props;
    const token = getTokenLS();
    const [user, setUser] = useState(null);
    const [roles, setRoles] = useState([]);
    const [possibleRoles, setPossibleRoles] = useState([]);
    const [originalRoles, setOriginalRoles] = useState([]);

    useEffect(() => {
        setPossibleRoles([{"name":"admin", "userId":`${userId}`}, {"name":"analyst", "userId":`${userId}`}, {"name":"employee", "userId":`${userId}`}, {"name":"user", "userId":`${userId}`}])
    }, [])

    const fetchUserInfo = async () => {
        try {
            const { data1 } = await axios.get(`/user/${userId}`, {headers: { Authorization: `Bearer ${token}` }});
            setUser(data1);

            const { data2 } = await axios.get(`/user/${userId}/privilege`, {headers: { Authorization: `Bearer ${token}` }});
            setRoles(data2);
        } catch (error) {
            console.log(error);
        }
    }

    const compareRoles = () => {
        possibleRoles.forEach(pr => {
            roles.forEach(r => {
                if(r.name === pr.name) possibleRoles.splice(possibleRoles.indexOf(pr), 1);
            });
        });
    }

    const handleAssign = (role) => {
        let r = roles;
        r.push(role);
        setRoles(r);
        r = possibleRoles;
        r.splice(r.indexOf(role), 1);
        setPossibleRoles(r);
    }

    const handleUnassign = (role) => {
        let r = roles;
        r.splice(r.indexOf(role), 1);
        setRoles(r);
        r = possibleRoles;
        r.push(role);
        setPossibleRoles(r);
    }

    useEffect(() => {
        fetchUserInfo(userId);
    }, [])

    useEffect(() => {
        setOriginalRoles(roles);
        compareRoles();
    }, [roles])

    const onPersist = async () => {
        try {
            roles.forEach(async (role) => {
                if(!originalRoles.includes(role)) {
                    await axios.post(`/user/privilege`, {"userId":`${userId}`, "privName":`${role.name}`}, {headers: { Authorization: `Bearer ${token}` }});
                }
            });
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <div className={style["container"]}>

                <div className={style["heading"]}>
                    <h5>Showing:</h5>
                    <h1>${user.username}</h1>

                    <div className={style["divider"]}></div>
                </div>

                <div className={style["titles"]}>
                    <ul className={style["list"]}>
                        <li>Email</li>
                        <li>Username</li>
                    </ul>
                </div>

                <div className={style["cards-container"]}>
                    <div className={style["card-item"]}>
                        <div className={style["card-item-info"]}>
                            <ul className={style["list"]}>
                                <li>{user.email}</li>
                                <li>{user.username}</li>
                            </ul>
                        </div>

                        <div className={style["btn-container"]}>
                            <div className={style["card-item-btn"]}>
                                <button className={style["save"]} type="button" onClick={onPersist}>Save Changes</button>
                            </div>

                            <div className={style["card-item-btn"]}>
                                <button type="submit">Ban</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style["permissions"]}>
                    {/* ASSIGNED PERMISSIONS */}
                    <PermissionList title={"Assigned Permissions"} roles={roles} onButton={handleUnassign} />
                    {/* UNASSIGNED PERMISSIONS */}
                    <PermissionList title={"Available Permissions"} roles={roles} onButton={handleAssign} />
                </div>

            </div>

        </section>
    )
}

export default SysadminPermit;