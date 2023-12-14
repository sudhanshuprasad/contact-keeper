import { API_URL } from "./config"

const deleteContactRequest = (contact, token) => {
    return fetch(`${API_URL}/contacts/${contact._id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `${token}`,
            "Content-Type": 'application/json'
        },
    })
}

export default deleteContactRequest