import { create } from 'zustand'

export const useOrderStore = create((set, get) => ({
    orderList: [],
    addItemToCart: (newItem) => {
        console.log(newItem)
        const allItems = get().orderList;
        set({orderList: [...allItems, newItem]})
    }
}))