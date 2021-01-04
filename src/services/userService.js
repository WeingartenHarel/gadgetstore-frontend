export default {
  getUser,
  //updateUsers,
}
 
const users = [
  {
    _id:'usern001',
    name: "Ochoa Hyde",
    coins: 100,
  }
];

// function updateUsers(amount) {
//   return new Promise((resolve, reject) => { 
//     const index = users.findIndex( c => user._id === c._id)
//     if (index !== -1) {
//       users[index].coins -= amount
//     }
//     resolve(users)
//   })
// }

function getUser() {
    return users[0];
}
