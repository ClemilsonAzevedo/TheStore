import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useAuth } from '@/context/authContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { SignUp } from '../SignUp'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

const signInFormValidationSchema = z.object({
	email: z.string().email('Email or password is Wrong'),
	password: z.string().min(8, 'Email or password is Wrong'),
})

type signInFormData = z.infer<typeof signInFormValidationSchema>

export function Login() {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<signInFormData>({
		resolver: zodResolver(signInFormValidationSchema),
	})
	const { SignIn } = useAuth()
	const navigate = useNavigate()

	async function handleSignIn(userData: signInFormData) {
		const { email, password } = userData

		try {
			await SignIn({ email, password })
			navigate('/')
			reset()
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			} else {
				alert('An unexpected error occurred')
			}
		}
	}

	const emailInputChange = watch('email')
	const passwordInputChange = watch('password')
	const isSubmitDisabled = !emailInputChange || !passwordInputChange

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			className='py-5 max-w-full max-h-max flex flex-col gap-8'>
			<div className='space-y-3 text-center w-[405px]'>
				<h2 className='text-4xl font-bold'>
					Login on <span className='text-violet-500'>THE STORE</span>
				</h2>
				<p className='text-sm'>
					Login on THE STORE for the best shopping experience of your life again
				</p>
			</div>
			<div className='space-y-3'>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='email' className='text-sm'>
						Email
					</label>
					<input
						type='email'
						required
						id='email'
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
						id='password'
						{...register('password')}
						placeholder='Minimum 8 character'
						className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
					/>
					{errors.password && (
						<span className='text-destructive text-sm'>
							{errors.password.message}
						</span>
					)}
				</div>
			</div>

			<div className='flex items-center space-x-2'>
				{/*Todo: adicionar metodo de lembrar por 30 dias */}
				<Checkbox
					id='remember'
					className='w-8 h-8 bg-transparent border-2 border-neutral-600 rounded-lg checked:bg-transparent'
				/>
				<label
					htmlFor='remember'
					className='leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
					<p className='text-sm'>Remember me for 30 days</p>
				</label>
			</div>

			<div className='space-y-3'>
				<Button
					type='submit'
					disabled={isSubmitDisabled}
					className='w-full bg-violet-500 hover:bg-violet-500/70 text-sm h-12 disabled:cursor-not-allowed'>
					Login
				</Button>
			</div>

			<div className='flex flex-col justify-center items-center'>
				<Link
					to='/forgot-password'
					reloadDocument
					className='block underline hover:text-violet-500 text-sm transition font-normal'>
					Forgot password?
				</Link>

				<Dialog>
					<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
						<SignUp />
					</DialogContent>
					<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition group relative'>
						<span className='block underline hover:text-violet-500 text-sm transition font-normal'>
							Not have an account yet? Create one!
						</span>
					</DialogTrigger>
				</Dialog>
			</div>
		</form>
	)
}
