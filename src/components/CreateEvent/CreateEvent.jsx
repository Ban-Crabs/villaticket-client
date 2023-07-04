// CreateEvent
import style from "./CreateEvent.module.scss";
import EventForm from "./EventForm/EventForm";
import TierForm from "../CreateTier/TierForm/TierForm";
import { useState, useEffect } from "react"
import {toast} from "react-toastify"

const CreateEvent = () => {

    /* 
        <field> -> SON LOS QUE SE AGREGAN A LA LISTA
        <field>ITEMS -> SON LOS DEL DROPDOWN
        

        1. se fetchean las opciones con los ITEMS
        2. Luego se espera darle click a una opcion, pasarla a una funcion onAdd
        3. Luego se update mappeando las pendejadas
    */

    const [typeItems, setTypeItems] = useState([]);
    const [types, setTypes] = useState([]);

    const [categoryItems, setCategoryItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const [locationItems, setLocationItems] = useState([])
    const [locations, setLocations] = useState([]);

    const [employees, setEmployees] = useState([]);
    const [collaborators, setCollaborators] = useState([]);

    const [sponsorItems, setSponsorItems] = useState([]);
    const [sponsors, setSponsors] = useState([]);

    const [tierItems, setTierItems] = useState([]);
    const [tiers, setTiers] = useState([]);

    //1
    const fetchTypeItems = async () => {
        try {

          const { data } = await axios.get("/eventaux/type");
          setTypeItems(data.types);
    
        } catch (error) {
          //toast.error("Unexpected error!");
          console.log("Unexpected error")
        }
    }
    //2
    const mappedTypeItems = typeItems.map(type => {
        return (
          <li>{type.name}</li>
        );
    })

    //3
    const onAddType = async (t) => {

        // setTypes( types => [...types, t]);
        setTypes([...types, t]);
    }

    //4
    const mappedTypes = types.map(type => {
        return (
          <li>{type.name}</li>
        );
    })


    const fetchCategoryItems = async () =>{
        try {

            const { data } = await axios.get("/eventaux/category");
            setCategoryItems(data.categories);
      
        } catch (error) {
        //toast.error("Unexpected error!");
        console.log("Unexpected error")
        }
    }

    const mappedCategoryItems = categoryItems.map(category => {
        return (
          <li>{category.name}</li>
        );
    })

    const onAddCategory = async (c) => {
        setCategories([...categories, c])
    }

    const mappedCategories = categories.map(category => {
        return (
          <li>{category.name}</li>
        );
    })



    const fetchLocationItems = async () => {
        try {

            const { data } = await axios.get("/eventaux/location");
            setLocationItems(data.locations);
      
        } catch (error) {
        //toast.error("Unexpected error!");
        console.log("Unexpected error")
        }
    }

    const mappedLocationItems = locationItems.map(locations => {
        return (
          <li>{locations.name}</li>
        );
    })

    const onAddLocation = async (l) => {
        //setLocations( locations => [...locations, l])
        setLocations([...locations, l])
    }

    const mappedLocations = locations.map(locations => {
        return (
          <li>{locations.name}</li>
        );
    })


    const fetchEmployees = async () => {
        try {
            //TODO hacer en la api tambien
            const {data} = await axios.get("")
            setEmployees(data.employees)
        } catch (error) {
            //toast.error("Unexpected error!");
            console.log("Unexpected error")
        }
    }

    const mappedEmployees = employees.map(employees =>{
        return(
            <li>{employees.name}</li>
        );
    })

    const onAddCollaborators = (c) => {
        // setCollaborators(collaborators => [...collaborators, c])
        setCollaborators([...collaborators, c])
    }
    
    const mappedCollaborators = collaborators.map( collaborator =>{
        return(
            <li>{collaborator.name}</li>
        )
    })




    const fetchSponsorItems = async () => {
        try {
            const {data} = await axios.get("");
            setSponsorItems(data.sponsors)
        } catch (error) {
            //toast.error("Unexpected error!");
            console.log("Unexpected error") 
        }
    }

    const mappedSponsorItems = sponsorItems.map(sponsor => {
        return(
            <li>{sponsor.name}</li>
        );
    })

    const onAddSponsor = (s) => {
        //setSponsors( sponsors => [...sponsors, s])
        setSponsors([...sponsors, s])
    }

    const mappedSponsors = sponsors.map(sponsor => {
        return(
            <li>{sponsor.name}</li>
        )
    })



    const fetchTierItems = async () => {
        try {
            const {data} = await axios.get("");
            setTierItems(data.tiers)
        } catch (error) {
            //toast.error("Unexpected error!");
            console.log("Unexpected error") 
        }
    }

    const mappedTierItems =  tierItems.map(tier => {
        return(
            <li>{tier.name}</li>
        )
    })

    const onAddTier = (t) => {
        // setTiers(tiers => [...tiers, t])
        setTiers([...tiers, t])
    }

    const mappedTiers = tiers.map(tier => {
        return(
            <li>{tiers.name}</li>
        );
    })  


    const onCreateEventHandler = async (title, typeId, locationId, categoryId, date, startTime, endTime, status, isVisibles) => {
        try {
            await axios.post("/event", { title, typeId, locationId, categoryId, date, startTime, endTime, status, isVisibles });
            console.log("Event Created! @ Client");
        } catch (error) {
            const { status } = error.response || { status: 500 };
            const msg = {
                "400": "Wrong Fields!",
                "401": "Unauthorized!",
                "500": "Internal Server Error"
            }
            //toast.error(msg[status.toString()])
            console.log(msg[status.toString()])
        }
    }

    const onCreateTierHandler = async (name, price, quantity, localeId) => {
        try {
            await axios.post("/event", { name, price, quantity, localeId });
            console.log("Tier Created! @ Client");
        } catch (error) {
            const { status } = error.response || { status: 500 };
            const msg = {
                "400": "Wrong Fields!",
                "401": "Unauthorized!",
                "500": "Internal Server Error"
            }
            //toast.error(msg[status.toString()])
            console.log(msg[status.toString()])
        }
    }



    return (
        <>
            {/* HEADING */}

            <div className={style["container"]}>
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
                    {/* EVENT FORM */}
                    <EventForm onCreateEvent={onCreateEventHandler}/>
                    {/* TIER FORM */}
                    <TierForm onCreateTier={onCreateTierHandler}/>

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