import style from "./AnalyticsPage.module.scss";


const AnalyticsPage = () => {
    return (
        <>
            <div className={style["container"]}>
                {/* LEFT SECTION */}
                <div className={style["left-section"]}>
                    <h1>Yankees @ Mets</h1>
                    <p>Wed, Jul 5, 2023 • 7:00 - 9:00pm <br />Chase Center</p>
                    <div className={style["square"]}></div>
                    <div className={style["dropdown"]}>
                        <button className={style["drop-btn"]}>Dropdown</button>
                        <div className={style["dropdown-content"]}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className={style["right-section"]}>

                    <div className={style["data-info"]}>
                        <ul>
                            <li>Sold Tickets</li>
                            <li>Redeemed Tickets</li>
                            <li>Group Exhanges</li>
                            <li>Individual Exchanges</li>
                        </ul>

                        <ul>
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                        </ul>
                    </div>

                    <div className={style["locale-frequencies"]}>
                        <ul>
                            <li>Localidad A</li>
                            <li>Localidad B</li>
                            <li>Localidad C</li>
                        </ul>
                    </div>

                    <div className={style["schedule-frequencies"]}>
                        <ul>
                            <li>7:00pm - 7:15pm</li>
                            <li>7:15pm - 7:30pm</li>
                            <li>7:30pm - 7:45pm</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AnalyticsPage;