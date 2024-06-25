import type { ProductInterface } from '@/@types/ProductInterface'
import { Heart } from 'lucide-react'

interface ProductProps extends ProductInterface {}

export function DestacProduct({ name, price, image }: ProductProps) {
  return (
    <div className='border-2 min-w-max rounded-lg p-5 transition hover:scale-110 hover:bg-neutral-400 cursor-pointer'>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col h-full'>
          <button
            type='button'
            className={
              'flex items-center justify-center ml-auto -mr-2 -mt-2 bg-violet-500 p-1 rounded-full cursor-pointer text-neutral-50 focus:outline-none focus:ring-0 repeat-1 duration-300 animate-in ease-in-out scale-125'
            }
          >
            <Heart className='flex-1' size={16} />
          </button>
          <img src={image} alt='' loading='lazy' className='w-80 h-80  ' />
        </div>
        <h4 className='font-medium text-xl text-neutral-950 text-center text-ellipsis truncate'>
          {name}
        </h4>
        <div>
          <span className='text-neutral-950 font-semibold text-2xl'>
            {price}
          </span>
        </div>
      </div>
    </div>
  )
}
