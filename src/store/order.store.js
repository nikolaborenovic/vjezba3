import { create } from 'zustand'


export const useOrderStore = create((set, get) => ({
    orderList: [],
    subtotalPrice: 0,
    discount: 0,
    tax: 0,
    total: 0,

    addItemToCart: (newItem) => {
        const allItems = get().orderList;
        const subtotal = get().subtotalPrice;
        
        const calculateSubtotal = subtotal + newItem.price;
        const calculateDiscount = (calculateSubtotal * 20) / 100;
        const calculateTax = (calculateSubtotal - calculateDiscount) * 0.1;
        const calculateTotal  = (calculateSubtotal - calculateDiscount + calculateTax);

        set({
            orderList: [...allItems, newItem], 
            subtotalPrice: calculateSubtotal, 
            discount: calculateDiscount, 
            tax: calculateTax,
            total: calculateTotal
        })
        
    },

    removeItemFromCart: (removeItem) => {
        const allItems = get().orderList;
        const subtotal = get().subtotalPrice;
        
        const calculateSubtotalRemove = subtotal - removeItem.price;
        const calculateDiscountRemove = (calculateSubtotalRemove * 20) / 100;
        const calculateTaxRemove = (calculateSubtotalRemove - calculateDiscountRemove) * 0.1;
        const calculateTotalRemove  = (calculateSubtotalRemove - calculateDiscountRemove + calculateTaxRemove);
        const allItemsAfterDelete = allItems.filter((item) => item.id != removeItem.id);
        
        set({
            orderList: allItemsAfterDelete, 
            subtotalPrice: calculateSubtotalRemove,
            discount: calculateDiscountRemove,
            tax: calculateTaxRemove,
            total: calculateTotalRemove
        })
        
    },

    clearCart: () => {
        set({orderList: [], 
            
        })
    }

}))