import React from 'react'
import './styles/DeleteUserModal.css'

const DeleteUserModal = ({setDeleteUser, updateInfo, nameDeleted}) => {

  console.log(updateInfo)

  return (
    <div className="deleteModal">
      <div className="deledeModal__container">
        <div className="deleteModal__close-x">
        </div>
        <div className="deleteModal__title">
          <h1>User deleted</h1>
        </div>
        <div className="deleteModal__body">
          <p>
            The user {`"${nameDeleted}"`} was deleted successfully
          </p>
        </div>
        <div className="deleteModal__footer">
          <button className='deleteModal__btn' onClick={() => setDeleteUser(false)} >Accept</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUserModal