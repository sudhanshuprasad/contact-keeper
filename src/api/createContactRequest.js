import { API_URL } from "./config"

const createContactRequest = (contact, token) => {
    return fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
            Authorization: `${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            text: contact.text,
            completed: false
        })
    })
        .then(response => response.json())
}

export default createContactRequest