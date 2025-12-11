import { create } from "zustand";
import { createSelectors } from "./createSelector";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (item) => set((state) => ({ cart: state.cart.filter(product => product.id !== item.id) })),
    clearCart: () => set(() => ({ cart: [] })),
}))

export const useCartStoreSelectors = createSelectors(useCartStore)

export { useCartStore };