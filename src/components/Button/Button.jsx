const Button = (props) => {
    return(
        <button className={style["button"]}>{props.message}</button>
    );
};

export default Button;