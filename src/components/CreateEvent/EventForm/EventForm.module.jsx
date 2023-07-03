import {useState} from "react";

const EventForm = ({ onCreateEvent = () => { } }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [status, setStatus] = useState("");
    const [visible, setVisible] = useState("");

    const hasErrors = () => {
        return Object.values(errors).some(error => error);
    }

    const errors = {
        "title": !titleField,
        "typeId": !typeField,
        "locationId": !locationField,
        "categoryId": !categoryField,
        "date": !dateField,
        "startTime": !startField,
        "endTime": !endField, 
        "status": !statusField,
        "isVisible": !visibleField
        //"description": !descriptionField || descriptionField.length > 280,
        //"image": imageField.length > 0 && !(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi).test(imageField)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (hasErrors()) {
            //toast.warn("Your fields are wrong!")
            console.warm("Your fields are wrong")
            return;
        }

        onCreateEvent(title, type, location, category, date, start, end, status, visible)

        setTitle("")
        setType("")
        setLocation("")
        setCategory("")
        setDate("")
        setStart("")
        setEnd("")
        setStatus("")
        setVisible("")
    }

    return(
        <div className={style["event-details"]}>

        <h2> Event Details</h2>
        <form onSubmit={onSubmitHandler}>
            <label>
                Title
                <input
                name="title"
                value={titleField}
                placeholder="Enter the Event's Title"
                onChange={(e) => { setTitle(e.target.value) }}
                />
            </label>
            

            <label>
                Type
                <input
                name="type"
                value={typeField}
                placeholder="Enter the Event's Type ID"
                onChange={(e) => { setType(e.target.value) }}
                />
            </label>
            <label>
                Location
                <input
                name="location"
                value={locationField}
                placeholder="Enter the Event's Location ID"
                onChange={(e) => { setLocation(e.target.value) }}
                />
            </label>
            <label>
                Category
                <input
                name="category"
                value={categoryField}
                placeholder="Enter the Event's Category ID"
                onChange={(e) => { setCategory(e.target.value) }}
                />
            </label>

            <label>
                Date
                <input
                name="date"
                value={dateField}
                placeholder="Enter the Event's Date"
                onChange={(e) => { setDate(e.target.value) }}
                />
            </label>

            <label>
                Start Time
                <input
                name="start"
                value={startField}
                placeholder="Enter the Event's Start Time"
                onChange={(e) => { setStart(e.target.value) }}
                />
            </label>

            <label>
                End Time
                <input
                name="end"
                value={endField}
                placeholder="Enter the Event's End Time"
                onChange={(e) => { setEnd(e.target.value) }}
                />
            </label>


            <label>
                Status
                <input
                name="status"
                value={statusField}
                placeholder="Enter the Event's Status"
                onChange={(e) => { setStatus(e.target.value) }}
                />
            </label>

            <label>
                Visibility
                <input
                name="visible"
                value={visibleField}
                placeholder="Enter the Event's Visibility"
                onChange={(e) => { setVisible(e.target.value) }}
                />
            </label>

            <Button type="submit" disabled={hasErrors()}>
                Save Post
            </Button>
        </form>
    </div>
    )
}
export default EventForm;