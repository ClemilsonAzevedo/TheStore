import { storeApi } from '@/api/store-api'
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const [authData, setAuthData] = useState({})

	async function SignIn({ email, password }) {
		try {
			const response = await storeApi.post('/signin', { email, password })
			const { userData, token } = response.data

			localStorage.setItem('@TheStore:user', JSON.stringify(userData))
			localStorage.setItem('@TheStore:token', token)

			storeApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
			setAuthData({ userData, token })
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Error trying to login, please try again later')
			}
		}
	}

	function SignOut() {
		localStorage.removeItem('@TheStore:user')
		localStorage.removeItem('@TheStore:token')

		setAuthData({})
	}

	useEffect(() => {
		const user = localStorage.getItem('@TheStore:user')
		const token = localStorage.getItem('@TheStore:token')

		if (user && token) {
			storeApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
			setAuthData({ token, userData: JSON.parse(user) })
		}
	}, [])

	return (
		<AuthContext.Provider value={{ authData, setAuthData }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	return context
}
