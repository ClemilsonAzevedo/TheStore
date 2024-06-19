import { storeApi } from '@/api/store-api'
import type { AxiosError } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

type AuthProviderProps = {
	children: React.ReactNode
}

type SignInProps = {
	email: string
	password: string
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [authData, setAuthData] = useState({})

	async function SignIn({ email, password }: SignInProps) {
		try {
			const response = await storeApi.post('/user/signin', { email, password })
			const { userData, token } = response.data

			localStorage.setItem('@TheStore:user', JSON.stringify(userData))
			localStorage.setItem('@TheStore:token', token)

			storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
			setAuthData({ userData, token })
		} catch (error: unknown) {
			if (isAxiosError(error)) {
				if (error.response) {
					const errorMessage = (error.response.data as { message: string })
						.message
					alert(errorMessage)
				} else {
					alert('Error trying to login, please try again later')
				}
			} else {
				alert('An unexpected error ocurred')
			}
		}
	}

	function isAxiosError(error: unknown): error is AxiosError {
		return (error as AxiosError).isAxiosError !== undefined
	}

	function SignOut() {
		localStorage.removeItem('@TheStore:user')
		localStorage.removeItem('@TheStore:token')

		setAuthData({})
	}

	useEffect(() => {
		const token = localStorage.getItem('@TheStore:token')
		const userData = localStorage.getItem('@TheStore:user')

		if (userData && token) {
			storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
			setAuthData({ token, userData: JSON.parse(userData) })
		}
	}, [])

	return (
		<AuthContext.Provider value={{ SignIn, SignOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	return context
}
