import CartActionTypes from "./cart.type";
import { addItemToCart, removeItemFromCart } from "../cart/cart.utils";

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
	cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case "CART_TOTAL":
			return {
				...state,
				total: action.payload,
			};

		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
