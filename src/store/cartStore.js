import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createSelectors } from "./createSelector";

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
            removeFromCart: (item) => set((state) => ({ cart: state.cart.filter(product => product.id !== item.id) })),
            clearCart: () => set(() => ({ cart: [] })),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ cart: state.cart })
        }
    )
)

export const useCartStoreSelectors = createSelectors(useCartStore)

export { useCartStore };