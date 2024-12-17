import { create } from 'zustand'


export const useOrderStore = create((set, get) => ({
    orderList: [],

    addItemToCart: (newItem) => {
        const allItems = get().orderList;

        set({
            orderList: [...allItems, {...newItem, quantity: 1, totalPrice: newItem.price}],
        })
        
    },

    removeItemFromCart: (removeItem) => {
        const allItems = get().orderList;
        const allItemsAfterDelete = allItems.filter((item) => item.id != removeItem.id);
        
        set({orderList: allItemsAfterDelete})
        
    },

    clearCart: () => set({orderList: []}),

    increaseItemQuantity: (itemId) => {
        const allItems = get().orderList;

        const itemAddQuantity = allItems.map((item) => 
            item.id === itemId ? {...item, quantity: item.quantity +1, totalPrice: item.price * Math.max(item.quantity + 1, 1)} : item
        );

        set({orderList: itemAddQuantity});

    },

    decreaseItemQuantity: (itemId) => {
        const allItems = get().orderList;
        
        const itemDecreaseQuantity = allItems.map((item) =>
            item.id === itemId && item.quantity > 1 ? {...item, quantity: item.quantity - 1, totalPrice: item.price * Math.max(item.quantity - 1, 1)} : item
        );

        set({orderList: itemDecreaseQuantity});
    }

}))