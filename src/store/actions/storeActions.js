import storeService from '../../services/storeService'

// Action Dispatcher 
export function loadStores(filterBy) {
  return async dispatch => {
    const stores = await storeService.getStores(filterBy)
    dispatch({ type: 'SET_STORES', stores })
  }
}

export function getById(storeId) {
  return async dispatch => {
    const store = await storeService.getStoreById(storeId)
    dispatch({ type: 'SET_STORE', store })
  }
}
export function deleteStore(storeId) {
  return async dispatch => {
    try {
      await storeService.deleteStore(storeId)
      dispatch({ type: 'REMOVE_STORE', storeId })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function addStore(store) {
  return async dispatch => {
    try {
      const savedStore = await storeService.addStore(store)
      dispatch({ type: 'ADD_STORE', store: savedStore })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function updateStore(store) {
  console.log('update action ', store)
  return async dispatch => {
    try {
      const savedStore = await storeService.updateStore(store)
      dispatch({ type: 'UPDATE_STORE', store: savedStore })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}