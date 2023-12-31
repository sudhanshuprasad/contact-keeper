import React from 'react'
import editIcon from '../assets/edit-3-svgrepo-com.svg'
import deleteIcon from '../assets/delete-filled-svgrepo-com.svg'
import { useNavigate } from "react-router-dom";

const EditDelete = (props) => {

    const navigate = useNavigate()

    const handleEdit = (id)=>{

        navigate(`/edit/${id}`)
        // props.updateContact(id,data)
    }

    const handleDelete = (id)=>{

        //fetch and delete data
        fetch(`http://localhost:8080/contacts/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            },
        })
            // .then(response => response?.json())
            // .then((data) => {
            //     console.log(data)
            // })

        props.deleteContact(id)
    }

    return (
        <div>

            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={()=>(handleEdit(props.id))} type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <img class="w-3 h-3 me-2" src={editIcon}/>
                    Edit
                </button>
                <button onClick={()=>(handleDelete(props.id))} type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <img class="w-3 h-3 me-2" src={deleteIcon}/>
                    Delete
                </button>
            </div>

        </div>
    )
}

export default EditDelete