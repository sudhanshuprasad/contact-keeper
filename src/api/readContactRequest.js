import { API_URL } from "./config"

const readContactRequest = (token) => {
    console.log(API_URL)
    return fetch(`${API_URL}/contacts`, {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
            "Content-Type": 'application/json'
        }
    })
        .then(response => response.json())
}

export default readContactRequest