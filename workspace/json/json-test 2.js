let user = {id: 1, name: '한동석'}
const jsonData = JSON.stringify(user)
// console.log(JSON.stringify(user))
user = JSON.parse(jsonData)
console.log(user)