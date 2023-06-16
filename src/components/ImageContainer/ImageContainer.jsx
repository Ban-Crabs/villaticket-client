import style from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
    return(
        <figure className={style[""]}>
            <img src={props.src} alt={props.alt}/>
        </figure>
    )

}

export default ImageContainer;