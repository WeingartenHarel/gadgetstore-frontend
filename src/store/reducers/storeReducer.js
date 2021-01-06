const INITIAL_STATE = {
  stores: [],
  currStore: null
} 
export function storeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_STORES':
      return {
        ...state,
        stores: action.stores
      }
    case 'SET_STORE':
      return {
        ...state,
        currStore: action.store
      }
    case 'REMOVE_STORE':
      return {
        ...state,
        stores: state.stores.filter(store => store._id !== action.storeId)
      }
    case 'ADD_STORE':
      return {
        ...state,
        stores: [...state.stores, action.store]
      }
    case 'UPDATE_STORE':
      return {
        ...state,
        stores: state.stores.map(store => store._id === action.store._id ? action.store : store)
      }
    default:
      return state
  }
}