export const initialState = {
    cart: [],
    user: null,
    address: {}
};

export const getCartTotal = (cart) => cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log("Action>>>>>", action);



    switch (action.type) {
        case "ADD_TO_CART":

            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART":

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(`
                Cannot Remove Product whose id is ${index}
                `);
            }

            return {
                ...state,
                cart: newCart,
            };

        case "SET_USER":
            return state;


        case "SET_ADDRESS":
            return{
                ...state,
                address:{...action.item},
            }


        default:
            return state;
    }
};

export default reducer;