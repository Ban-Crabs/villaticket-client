import styles from './LoadingSpinner.module.scss';
import { useConfigContext } from '../../contexts/ConfigContext';

const LoadingSpinner = () => {

    const configState = useConfigContext();
    return(
        <div className={styles["container"]}>
            {configState.loading ? "Loading" : "Not Loading "}
            <div className={styles["lds-facebook"]}>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
    
}
export default LoadingSpinner;