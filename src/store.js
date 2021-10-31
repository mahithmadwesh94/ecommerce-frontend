import * as redux from "redux";

export const addToCart = 'addToCart';
export const removeFromCart = 'removeFromCart';
export const login = 'login';
export const logout = 'logout';
export const emptyCart = 'emptyCart';


export const initialState = {
    user: {},
    cart: [],
    total: 0,
    quantity: 0
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addToCart': {

            return {
                ...state,
                cart: [...state.cart, action.payload],
                quantity: state.quantity + 1,
                total: state.total + action.payload.price
            }
        }

        case 'removeFromCart': {
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload._id),
                quantity: state.quantity > 0 ? state.quantity - 1 : 0,
                total: state.total > 0 ? (parseInt(state.total) - parseInt(action.payload.price)) : 0,
            }
        }

        case 'login': {
            return {
                ...state,
                user: action.payload
            }
        }

        case 'logout': {
            return {
                ...state,
                user: {},
                cart: [],
                quantity: 0,
                total: 0
            }
        }

        case 'emptyCart': {
            return {
                ...state,
                cart: [],
                quantity: 0,
                total: 0
            }
        }

        default: return state
    }
}


export const store = redux.createStore(shopReducer)