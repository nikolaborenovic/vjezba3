import { create } from 'zustand'

export const useOrderStore = create((set, get) => ({
    orderList: [],
    dialogContent: {
        isVisible: false,
        message: '',
        severity: 'info'
    },
    setDialogContent: (dialogContent) => set({ dialogContent }),
    addItemToCart: (newItem) => {
        const allItems = get().orderList;
        //Variable for checking do we already have item in cart
        const existingItem = allItems.find((item) => item.id === newItem.id);
        //Updating orders in cart if item exists we update quantity and if it doesnt we add it to cart
        const updateOrders = existingItem ? allItems.map((item) => 
            item.id === existingItem.id ? {...item, quantity: item.quantity + 1, totalPrice: item.price * (item.quantity + 1)} : item
        ) : [...allItems, {...newItem, quantity: 1, totalPrice: newItem.price}]
        //Dialog message when item is added to cart
        const dialogMessage = existingItem ? `${newItem.name} headphones quantity increased!` : `${newItem.name} headphones added to cart!`;
        set({ orderList: updateOrders, dialogContent: {isVisible: true, message: dialogMessage, severity: 'success'} })
    },
    removeItemFromCart: (removeItem) => {
        const allItems = get().orderList;
        //Filtering which item needs to be removed from cart
        const allItemsAfterDelete = allItems.filter((item) => item.id != removeItem.id);
        
        set({orderList: allItemsAfterDelete, dialogContent: {isVisible: true, message: `${removeItem.name} headphones removed from cart!`, severity: 'success'}})
    },
    clearCart: () => set({orderList: [], dialogContent: {isVisible: true, message: 'Cart cleared!', severity: 'success'}}),
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