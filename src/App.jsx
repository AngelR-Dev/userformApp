import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import DeleteUserModal from "./components/DeleteUserModal";

const baseURL = "https://users-crud1.herokuapp.com";

function App() {
  const [users, setUsers] = useState();
  // Esto para pasar info desde UserCard to FormUser
  const [updateInfo, setUpdateInfo] = useState();

  // Form Modal State
  const [formIsClose, setFormIsClose] = useState(true);

  // Delete user modal
  const [deleteUser, setDeleteUser] = useState(false);

  // get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // post para crear un nuevo usuario
  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Para eliminar un usuario especifico
  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Para actualizar un usuario en especifico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleOpenForm = () => {
    setFormIsClose(false);
  };

  return (
    <div className="App">
      <div className="App__container-title">
        <h1 className="App__title">Users CRUD</h1>
        <button onClick={handleOpenForm} className="App__btn">
          Create a New User
        </button>
      </div>
      <div className={`form-container ${formIsClose && "disable__form"}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>
      <div className="users-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormIsClose={setFormIsClose}
            setDeleteUser={setDeleteUser}
          />
        ))}
      </div>
      {deleteUser && (
        <DeleteUserModal
          setDeleteUser={setDeleteUser}
          updateInfo={updateInfo}
        />
      )}
    </div>
  );
}

export default App;
