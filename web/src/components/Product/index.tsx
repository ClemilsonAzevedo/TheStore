import type { ProductInterface } from '@/@types/ProductInterface'
import { Heart, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import pcImage from '../../assets/1MacbookProM1Pro.png'
import { Button } from '../ui/button'
import { storeApi } from '@/api/store-api'

interface ProductProps extends ProductInterface {}

export function Product({
  id,
  name,
  description,
  price,
  isLiked = false,
  image = pcImage,
}: ProductProps) {
  const [isProductLiked, setIsProductLiked] = useState(isLiked)
  const [addItemOnCart, setAddItemOnCart] = useState(1)

  function handleAddItemOnCart() {
    /*
			Criar função de Adicionar ao carrinho
		*/
    setAddItemOnCart(addItemOnCart + 1)
  }

  /*Continuar Desenvolvimento da pagina de produtos*/
  async function handleLikeProduct() {
    const response = await storeApi.put('products/liked', {
      products_ids: ['12345', '12345'],
    })

    console.log(response.data)

    setIsProductLiked(!isProductLiked)
    isLiked = isProductLiked
  }

  return (
    <div className='hover:bg-neutral-400 transition duration-300  rounded-lg px-5'>
      <div className='flex flex-col gap-5 py-5 max-w-48 justify-center items-center'>
        <div className='flex flex-col bg-neutral-400 w-max p-4 rounded-lg'>
          <button
            onClick={handleLikeProduct}
            type='button'
            className={
              !isProductLiked
                ? 'flex items-center justify-center ml-auto -mr-2 -mt-2 bg-neutral-50 p-1 rounded-full cursor-pointer focus:outline-none focus:ring-0 ease-in-out hover:scale-110 transition'
                : 'flex items-center justify-center ml-auto -mr-2 -mt-2 bg-violet-500 p-1 rounded-full cursor-pointer text-neutral-50 focus:outline-none focus:ring-0 repeat-1 duration-300 animate-in ease-in-out scale-125'
            }
          >
            <Heart className='flex-1' size={16} />
          </button>
          <div className='w-[189px] h-[148px] flex justify-center relative group'>
            <img
              src={image}
              alt=''
              className='object-cover w-[149px] rounded-lg'
            />
            <div className='bg-neutral-950/50 absolute inset-0 rounded-lg hidden group-hover:flex items-center justify-center'>
              <Link
                to={`/products/${id}`}
                className='text-neutral-50 border border-neutral-50 rounded-lg px-3 py-2 hover:bg-neutral-50 hover:text-neutral-950 transition'
              >
                Visualizar Produto
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h4 className='font-medium text-base text-neutral-950 text-center text-ellipsis truncate'>
            {name}
          </h4>{' '}
          <p className='mt-4 text-[0.625rem] text-neutral-600 text-justify h-11 truncate text-wrap'>
            {description}
          </p>
        </div>
        <div className='flex w-full justify-between items-center'>
          <span className='text-neutral-950 font-medium text-base'>
            {price}
          </span>
          <Button
            onClick={handleAddItemOnCart}
            className='bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-500/70 transition'
            type='button'
          >
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
