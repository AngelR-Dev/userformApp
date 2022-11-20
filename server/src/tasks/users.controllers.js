const usersDB = []
let id = 1


const findAllUsers = () => {
  return usersDB
}

const findUsersById = id => {
  const filteredUser = usersDB.find(user => user.id == id)
  return filteredUser
}

const createNewUser = obj => {
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
  usersDB.push(newUser)
  return newUser
}

module.exports = {
  findAllUsers,
  findUsersById,
  createNewUser
}