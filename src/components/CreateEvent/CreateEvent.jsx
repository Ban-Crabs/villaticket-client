// CreateEvent
import style from "./CreateEvent.module.scss";


const CreateEvent = () => {
    return (
        <>
            {/* HEADING */}
            <header>
                <h1>Event Editor</h1>
                <button>Save</button>
            </header>

            <div className={style["container"]}>

                {/* LEFT SECTION */}
                <div className={style["left-section"]}>

                    <div className={style["change-image-container"]}>
                        <div className={style["image-container"]}></div>
                        <button>Change Image</button>
                    </div>

                    <div className={style["change-image-container"]}>
                        <div className={style["image-container"]}></div>
                        <button>Change Image</button>
                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={style["right-section"]}>
                    {/* EVENT DETAILS */}
                    <div className={style["event-details"]}>
                        <h2>Details</h2>
                        <form>
                            <label for="site">Site</label>
                            <input type="text" id="site" name="site" placeholder="Enter site's name" />

                            <label for="date">Date</label>
                            <input type="date" id="date" name="date" placeholder="YYYY/MM/DD" />

                            <label for="start-time">Start</label>
                            <input type="text" id="start-time" name="start-time" placeholder="HH:MM" />

                            <label for="end-time">End</label>
                            <input type="text" id="end-time" name="end-time" placeholder="HH:MM" />
                        </form>
                    </div>

                    {/* CATEGORY & TYPE */}
                    <div className={style["category-type"]}>
                        <h2>Category & Type</h2>
                        <div className={style["wrapper"]}>
                            <form>
                                <label for="event-type">Type</label>
                                <input type="text" id="event-type" name="event-type" placeholder="Enter type of event" />
                            </form>
                            <div className={style["dropdown-wrapper"]}>
                                <div className={style["dropdown"]}>
                                    <button className={style["drop-btn"]}>Select Option</button>
                                    <div className={style["dropdown-content"]}>
                                        <a href="#">Sports</a>
                                        <a href="#">Concerts</a>
                                        <a href="#">Theater</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLLABORATORS */}
                    <div className={style["event-edit"]}>
                        <h2>Collaborators</h2>
                        <div className={style["wrapper1"]}>
                            <div className={style["show-all"]}>
                                <h3>Showing </h3>
                                <ul>
                                    <li>Employee A</li>
                                    <li>Employee B</li>
                                    <li>Employee C</li>
                                </ul>
                            </div>
                            <div className={style["add-item"]}>
                                <form>
                                    <input type="text" id="collaborator" name="email" placeholder="Enter collaborator" />
                                    <button>Add Collaborator</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* LOCALES */}
                    <div className={style["event-edit"]}>
                        <h2>Locales</h2>
                        <div className={style["wrapper1"]}>
                            <div className={style["show-all"]}>
                                <h3>Showing </h3>
                                <ul>
                                    <li>Locale A</li>
                                    <li>Locale B</li>
                                    <li>Locale C</li>
                                </ul>
                            </div>
                            <div className={style["add-item"]}>
                                <form>
                                    <input type="text" id="locale" name="locale" placeholder="Enter a locale" />
                                    <button>Add New Locale</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* SPONSORS */}
                    <div className={style["event-edit"]}>
                        <h2>Sponsros</h2>
                        <div className={style["wrapper1"]}>
                            <div className={style["show-all"]}>
                                <h3>Showing </h3>
                                <ul>
                                    <li>Sponsor A</li>
                                    <li>Sponsor B</li>
                                    <li>Sponsor C</li>
                                </ul>
                            </div>
                            <div className={style["add-item"]}>
                                <form>
                                    <input type="text" id="sponsor" name="sponsor" placeholder="Enter sponsor" />
                                    <button>Add New Sponsor</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* TICKET TIERS */}
                    <div className={style["event-edit"]}>
                        <h2>Ticket Tiers</h2>
                        <div className={style["wrapper1"]}>
                            <div className={style["show-all"]}>
                                <h3>Showing </h3>
                                <ul>
                                    <li>Tier A</li>
                                    <li>Tier B</li>
                                    <li>Tier C</li>
                                </ul>
                            </div>
                            <div className={style["add-item"]}>
                                <form>
                                    <input type="text" id="tier" name="tier" placeholder="enter tier" />
                                    <button>Add New Tier</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* TICKET DETAILS */}
                    <div className={style["ticket-details"]}>
                        <h2>Ticket Details</h2>
                        <div className={style["ticket-detail-item"]}>
                            <h3>Locale A</h3>
                            <form>
                                <label for="site">Total</label>
                                <input type="text" id="total" name="total" placeholder="Enter total amount" />
                            </form>
                            <div className={style["ticket-tier-details"]}>
                                <h4>Tier A</h4>
                                <form>
                                    <label for="site">Amount</label>
                                    <input type="text" id="amount" name="amount" placeholder="Enter total amount for this tier" />
                                    <label for="site">Price</label>
                                    <input type="text" id="price" name="price" placeholder="Enter price for this tier" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEvent;