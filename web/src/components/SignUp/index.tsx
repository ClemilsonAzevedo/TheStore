import { Button } from "../ui/button";
import githubLogo from '../../assets/github.svg'
import gmailLogo from '../../assets/gmail.svg'

export function SignUp() {

  return (
    <form className='py-5 max-w-full max-h-max flex flex-col gap-8'>
      <div className='space-y-3 text-center w-[405px]'>
        <h2 className='text-4xl font-bold'>
          Register on <span className='text-violet-500'>THE STORE</span>
        </h2>
        <p className='text-sm'>
          Create an account at THE STORE and get ready for the best shopping experience of your life
        </p>
      </div>

      <div className="space-y-3">
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor='name' className='text-sm'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor='email' className='text-sm'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email address'
            className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
          />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor='password' className='text-sm'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Minimum 8 character'
            className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
          />
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor='confirm-password' className='text-sm'>
            Confirm Password
          </label>
          <input
            type='password'
            name='confirm-password'
            id='confirm-password'
            placeholder='Minimum 8 character'
            className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
          />
        </div>
      </div>

      <div className='space-y-3'>
        <Button type="submit" className='w-full bg-violet-500 hover:bg-violet-500/70 text-sm h-12'>
          Sign Up
        </Button>
        <div className='flex gap-5'>
          <button
            type='button'
            className='px-5 py-2 flex items-center gap-2 border-2 border-neutral-600 rounded-lg w-full justify-center hover:border-violet-500 hover:text-violet-500 transition'>
            <img src={gmailLogo} width={32} alt='' />
            Google
          </button>

          <button
            type='button'
            className='px-5 py-2 flex items-center gap-2 border-2 border-neutral-600 rounded-lg w-full justify-center hover:border-violet-500 hover:text-violet-500 transition'>
            <img src={githubLogo} width={32} alt='' />
            Github
          </button>
        </div>
      </div>

      <div className='text-center'>
        <a
          href='#w'
          className='block underline hover:text-violet-500 text-sm transition font-normal'>
          Already have an account? Login!
        </a>
      </div>
    </form>
  )
}