export default function cart(state = [], action) {
  // esse switch garante que o reducer só ouça a ação ADD_TO_CART, já que todos os reducers são ativados no dispatch
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}