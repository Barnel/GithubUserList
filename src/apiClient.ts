const defaultHeaders = {'Accept': 'application/vnd.github.v3+json'}
const baseURL = 'https://api.github.com'

async function get(path: string) {
    const URL = baseURL + path
    
    return fetch(URL, {method: 'GET', headers: defaultHeaders})
                .then(response => response.json())
}

export async function fetchUsers(minimumUserId: number, pageSize: number = 10) {
    const path = `/users?since=${minimumUserId}&per_page=${pageSize}`
    return get(path)
                
}

export async function fetchUser(userName: string) {
    const path = `/users/${userName}`
    return get(path)
}