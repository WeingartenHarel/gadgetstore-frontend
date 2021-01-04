const INITIAL_STATE = {
  // user: { _id:'usern001', name: 'Popo', balance: 100 },
  users:[],
  user: null,
} 
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: state.user.filter(contact => contact._id !== action.contactId)
      }
    case 'ADD_USER':
      return {
        ...state,
        user: [...state.user, action.contact]
      }
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user.map(contact => contact._id === action.contact._id ? action.contact : contact)
      }
    default:
      return state
  }
}