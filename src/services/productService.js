const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api/'
  : '//localhost:3030/api/products'

import axios from 'axios'

async function getProducts(filterBy = null) {
  const res = await axios.get(BASE_URL)
  return res.data
}

async function getProductById(productId) {
  const res = await axios.get(`${BASE_URL}/${productId}`)
  return res.data
}

async function deleteProduct(productId) {
  return await axios.delete(`${BASE_URL}/${productId}`)
}

async function updateProduct(product) {
  const res = await axios.put(`${BASE_URL}/${product._id}`,product)
  return res.data
}

async function addProduct(product) {
  const res = await axios.post(`${BASE_URL}/${product._id}`,product)
  return res.data
}


// function getEmptyProduct() {
//   return {
//     name: '',
//     email: '',
//     phone: ''
//   }
// }

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

export const contactService = {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  addProduct,
}


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