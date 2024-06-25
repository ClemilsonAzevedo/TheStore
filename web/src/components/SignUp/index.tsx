import { storeApi } from '@/api/store-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Login } from '../Login'
import { Button } from '../ui/button'

const signUpFormValidationSchema = z.object({
	name: z.string().min(3),
	email: z.string().email('Email format is wrong'),
	password: z.string().min(8, '8 characters for password is needed '),
})

type signUpFormData = z.infer<typeof signUpFormValidationSchema>

export function SignUp() {
	const [isSendingUserData, setIsSendingUserData] = useState(false)
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<signUpFormData>({
		resolver: zodResolver(signUpFormValidationSchema),
	})
	const navigate = useNavigate()

	async function handleSignUp(userData: signUpFormData) {
		const { name, email, password } = userData

		try {
			setIsSendingUserData(true)
			await storeApi.post('/user/signup', { name, email, password })
			navigate('/')
		} catch (error) {
			//Todo: Dar alert nos erros da maneira correta
			if (error instanceof Error) {
				alert(error.message)
			} else {
				alert('An unexpected error occurred')
			}
		}
		setIsSendingUserData(false)
	}

	const nameInputChange = watch('name')
	const emailInputChange = watch('email')
	const passwordInputChange = watch('password')
	const isSubmitDisabled =
		!nameInputChange || !emailInputChange || !passwordInputChange

	return (
		<form
			onSubmit={handleSubmit(handleSignUp)}
			className='py-5 max-w-full max-h-max flex flex-col gap-8'>
			<div className='space-y-3 text-center w-[405px]'>
				<h2 className='text-4xl font-bold'>
					Register on <span className='text-violet-500'>THE STORE</span>
				</h2>
				<p className='text-sm'>
					Create an account at THE STORE and get ready for the best shopping
					experience of your life
				</p>
			</div>

			<div className='space-y-3'>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='name' className='text-sm'>
						Name
					</label>
					<input
						type='text'
						required
						{...register('name')}
						placeholder='Your Name'
						className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
					/>
					{errors.name && (
						<span className='text-destructive text-sm'>
							{errors.name.message}
						</span>
					)}
				</div>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='email' className='text-sm'>
						Email
					</label>
					<input
						type='email'
						required
						{...register('email')}
						placeholder='Enter your email address'
						className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
					/>
					{errors.email && (
						<span className='text-destructive text-sm'>
							{errors.email.message}
						</span>
					)}
				</div>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='password' className='text-sm'>
						Password
					</label>
					<input
						type='password'
						required
						{...register('password')}
						placeholder='Minimum 8 character'
						min={8}
						className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
					/>
					{errors.password && (
						<span className='text-destructive text-sm'>
							{errors.password.message}
						</span>
					)}
				</div>
			</div>

			<div className='space-y-3'>
				<Button
					type='submit'
					disabled={isSubmitDisabled || isSendingUserData}
					className='w-full bg-violet-500 hover:bg-violet-500/70 text-sm h-12 disabled:cursor-not-allowed'>
					{isSendingUserData ? (
						<Loader2
							size={16}
							className='animate-spin flex items-center justify-center'
						/>
					) : (
						<span>Sign Up</span>
					)}
				</Button>
			</div>

			<Dialog>
				<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
					<Login />
				</DialogContent>
				<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition group relative'>
					<span className='block underline hover:text-violet-500 text-sm transition font-normal'>
						Already have an account? Login!
					</span>
				</DialogTrigger>
			</Dialog>
		</form>
	)
}
