import produce from 'immer';

export default function cart(state = [], action) {
  // esse switch garante que o reducer só ouça a ação ADD_TO_CART, já que todos os reducers são ativados no dispatch
  switch (action.type) {
    case '@cart/SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}