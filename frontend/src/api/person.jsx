import api from './api'

// person = { name: '', email: '', password: '' }
export const createPerson = async (person) => {
    const response = await api.post('/person', person)

    return response.data
}

export const loginPerson = async (email, password) => {
    const body = { email, password }

    const response = await api.post('/person/login', body)

    return response.data
}

export const getSession = async () => {
    const response = await api.get('/person/session')

    return response.data
}