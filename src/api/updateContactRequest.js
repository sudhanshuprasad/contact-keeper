import { API_URL } from "./config"

const updateContactRequest = (contact, token) => {
    return fetch(`${API_URL}/contacts/${contact._id}`, {
        method: 'PUT',
        headers: {
            Authorization: `${token}`,
            "Content-Type": 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            text: contact.text,
            completed: contact.completed
        })
    })
        .then(response => response.json())
}

export default updateContactRequest