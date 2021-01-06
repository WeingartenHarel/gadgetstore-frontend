import axios from 'axios'
export const storeService = {
  getStores,
  getStoreById,
  deleteStore,
  updateStore,
  addStore,
  getEmptyStore
}
const BASE_URL = process.env.NODE_ENV === 'storeion'
  ? '/api/'
  : '//localhost:3030/api/store'


async function getStores(filterBy = null) {
  const res = await axios.get(BASE_URL)
  return res.data
}

async function getStoreById(storeId) {
  const res = await axios.get(`${BASE_URL}/${storeId}`)
  return res.data
}

async function deleteStore(storeId) {
  return await axios.delete(`${BASE_URL}/${storeId}`)
}

async function updateStore(store) {
  const res = await axios.put(`${BASE_URL}/${store._id}`,store)
  return res.data
}

async function addStore(store) {
  const res = await axios.post(`${BASE_URL}/${store._id}`,store)
  return res.data
}

function getEmptyStore() {
  return {
    name:'',
    description:'',
    imgURL:'https://res.cloudinary.com/hw-projects/image/upload/v1609953788/gadgetStore/defalutlogo.jpg',
    createdBy:'',
    createdDate: Date.now(),
    tags:[],
    products:[]
  }
}

// function filter (term) {
//   term = term.toLocaleLowerCase()
//   return contacts.filter( contact => {
//     return contact.name.toLocaleLowerCase().includes(term) ||
//     contact.phone.toLocaleLowerCase().includes(term) ||
//     contact.email.toLocaleLowerCase().includes(term)
//   })
// }

// function _makeId(length = 10) {
//   var txt = ''
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (var i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return txt
// }


// function sort(arr) {
//   return arr.sort( (a, b) => {
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//       return -1;
//     }
//     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//       return 1;
//     }

//     return 0;
//   })
// }