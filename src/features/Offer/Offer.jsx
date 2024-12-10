import { useEffect, useState } from "react";
import Item from "./components/Item";
import { getAllItems } from "../../data/itemsdata";

const Offer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getAllItems().then((response) => {
            setItems(response)
        })
    }, [])
    
    return(
        <div className="offer_items_container">
            {items.map((item) => ( 
                <Item 
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </div>
    )
}

export default Offer;