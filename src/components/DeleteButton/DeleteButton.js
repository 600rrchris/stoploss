import React from 'react'

const DeleteButton = ({index, handleDeleteBeer, user, _id}) => {
    return(
        <button className="btn btn-danger" onClick={() => handleDelete(index, user, _id)}>Delete</button>
    )
}

export default DeleteButton