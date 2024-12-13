import { useEffect, useState } from "react";
import Item from "./components/Item";
import { getAllItems } from "../../data/itemsdata";
import { useOrderStore } from "../../store/order.store";

const Offer = () => {
    const {addItemToCart} = useOrderStore();
    const [items, setItems] = useState([])

    const addItem = (item) => {
        addItemToCart(item)
    }

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
                    handleAdd={addItem}
                    item={item}
                />
            ))}
        </div>
    )
}

export default Offer;