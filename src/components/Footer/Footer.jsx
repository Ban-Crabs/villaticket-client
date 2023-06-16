import style from "./Footer.module.scss";

const Footer = () => {
    return(
        <div className={style["footer"]}>
                <div className={style["footer-container"]}>
                    <div className={style["footer-title"]}> <b>villaticket</b> </div>
                    <div className={style["footer-description"]}>

                        <div className={style["footer-desctiption-links"]}>
                            {/* Helpful Links */}
                            <div className={style["list-container"]}>
                                <h4>Helpful Links</h4>
                                <ul>
                                    <li>FAQ</li>
                                    <li>My account</li>
                                    <li>Contact Us</li>
                                    <li>Refunds</li>
                                </ul>
                            </div>

                            {/* About Us Links */}
                            <div className={style["list-container"]}>
                                <h4>About Us</h4>
                                <ul>
                                    <li>Who are we</li>
                                    <li>Privacy Policy</li>
                                    <li>Careers</li>
                                    <li>Ticket Your Event</li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className={style["list-container"]}>
                                <h4>Social</h4>
                                <ul>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Email Us</li>
                                </ul>
                            </div>
                        </div>

                        <p className={style["copyright"]}> © 2023 Villa Ticket LLC. All Rights Reserved     Privacy   Accessibility   Terms   Site Map</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer;