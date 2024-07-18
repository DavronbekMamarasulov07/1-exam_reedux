import { saveToLocalStorage } from "../../helpers";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let findItemIndex = state.findIndex(item => item.id === action.item.id);
            if (findItemIndex === -1) {
                const updatedState = [...state, action.item];
                saveToLocalStorage("cart", updatedState);
                return updatedState;
            } else {
                return state;
            }

        case "REMOVE_FROM_CART":
            const updatedState = state.filter(item => item.id !== action.item);
            saveToLocalStorage("cart", updatedState); 
            return updatedState;

    
        default:
            return state;
    }
};
