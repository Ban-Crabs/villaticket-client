import {useState} from "react"

const TierForm = ({ onCreatetier = () => { } }) => {
    const [nameField, setName] = useState("");
    const [priceField, setPrice] = useState(0);
    const [quantityField, setQuantity] = useState("");
    const [localeField, setLocale] = useState([]);


    const errors = {
        "name": !nameField,
        "price": !priceField || priceField <= 0,
        "quantity": !quantityField || quantityField <= 0,
        "localeId": !localeField,
        //"description": !descriptionField || descriptionField.length > 280,
        //"image": imageField.length > 0 && !(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi).test(imageField)
    }

    return(
        //className={style["tier-details"]}
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>
                    Name
                    <input
                    name="name"
                    value={nameField}
                    placeholder="Tier's Name"
                    onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>
                    Price
                    <input
                    name="price"
                    value={priceField}
                    placeholder="Tier's Price"
                    onChange={(e) => { setPrice(e.target.value) }}
                    />
                </label>
                <label>
                    Quantity
                    <input
                    name="quantity"
                    value={quantityField}
                    placeholder="Tier's Quantity"
                    onChange={(e) => { setQuantity(e.target.value) }}
                    />
                </label>
                <label>
                    Locale
                    <input
                    name="locale"
                    value={localeField}
                    placeholder="Tier's Locale"
                    onChange={(e) => { setLocale(e.target.value) }}
                    />
                </label>
                <Button type="submit" disabled={hasErrors()}>
                    Save Tier
                </Button>
            </form>
        </div>
    )
}

export default TierForm;