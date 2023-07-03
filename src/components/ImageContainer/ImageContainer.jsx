import style from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
    return(
        <figure className={style["figure-section"]}>
            <img className={style["img-section"]}src={props.src} alt={props.alt}/>
        </figure>
    )

}

export default ImageContainer;