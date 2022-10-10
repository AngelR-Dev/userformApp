import React from "react";
import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormIsClose, setDeleteUser, setNameDeleted }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setFormIsClose(false)
  };

  return (
    <article className="user">
      <h2 className="user__name">{`${user?.first_name} ${user.last_name}`}</h2>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__span">Email</span> {user.email}
        </li>
        <li className="user__item">
          <span className="user__span">Birthday</span>
          <div className="user__item--container">
            <i className="user__gift fa-solid fa-gift"></i> {user.birthday}
          </div>
        </li>
      </ul>
      <footer className="user__footer">
        <button className="user__btn" onClick={() => {
          deleteUserById(user.id)
          setDeleteUser(true)
          setNameDeleted(`${user.first_name} ${user.last_name}`)
          }}>
          <i className="fa-solid fa-trash-can user__trash"></i>
        </button>
        <button className="user__btn" onClick={handleEdit}>
          <i className="fa-solid fa-pen-to-square user__edit"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
