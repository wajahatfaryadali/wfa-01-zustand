import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (item) => set((state) => ({ cart: state.cart.filter(product => product.id !== item.id) })),
    clearCart: () => set((state) => ({ cart: [] })),
}))

export { useCartStore };