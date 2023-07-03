import style from "./PermissionList.module.scss";

const PermissionList = (props) => {
    const { title, roles , onButton} = props;

    return (
        <ul>
            <li><h4>{title}</h4></li>
            {roles.map((role) => {
                <li>
                    <div className={style["card-item-btn"]}>
                        <button className={style["permission-btn"]} type="button" onClick={onButton(role)}>{role.name}</button>
                    </div>
                </li>    
            })}
        </ul>
    );
}

export default PermissionList;