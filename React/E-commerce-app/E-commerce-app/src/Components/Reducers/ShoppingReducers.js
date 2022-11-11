
import { TYPES } from "../Actions/ShoppingActions";
import { productos } from "../Assets/Productosjson";

export const shoppingcartInitialState = {
  products: productos,
  cart: []
}

console.log(shoppingcartInitialState);

//Funcion pura
export function shoppingreducer(state, action) {
  switch (action.type) {
    
    case TYPES.ADD_TO_CART: {
      let newItem = productos.find((x) => x.id === action.product.id);

      //reviso en mi carrito si ya no tengo ese item
      let itemCart = state.cart.find((x) => x.id === action.product.id);
     
      console.log(state.cart);
      // console.log(action.product.id);
      // console.log(state);
      // console.log(itemCart);
      // newItem.id === 

      return itemCart
        ? {
            // si lo tengo entonces sumar la cantidad y CALCULAR EL VALOR DEL TOTAL
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: item.price * item.quantity,
                  }
                : item
            ),
          }
        : {
            // si NO lo tengo entonces EL TOTAL ES EL PRECIO Y LA CANTIDAD 1
            ...state,
            cart: [
              ...state.cart,
              { newItem, quantity: 1, total: newItem.price },
            ],
          };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemDelete = productos.find(x => x.id === action.productId);

      return itemDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.productId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    total: item.price * item.quantity,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
      return shoppingcartInitialState;
    }

    default:
      return state;
  }
}
