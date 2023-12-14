import { API_URL } from "./config"

const loginRequest = (password) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            password,
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Login failed')
            }
        })
}

export default loginRequest