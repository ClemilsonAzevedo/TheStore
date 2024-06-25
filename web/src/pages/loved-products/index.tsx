import type { ProductInterface } from '@/@types/ProductInterface'
import { storeApi } from '@/api/store-api'
import { Login } from '@/components/Aside/components/Login'
import { DestacProduct } from '@/components/DestacProduct'
import { Loading } from '@/components/Loading'
import { useAuth } from '@/context/authContext'
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog'
import { ShoppingBasket } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function LovedProducts() {
  const { user } = useAuth()
  const [likedProducts, setLikedProducts] = useState<ProductInterface[]>([])
  const [isLikedProductsLoading, setIsLikedProductsLoading] = useState(false)

  useEffect(() => {
    setIsLikedProductsLoading(true)
    storeApi
      .get('/products/liked/get')
      .then(response => {
        setLikedProducts(response.data)
      })
      .finally(() => setIsLikedProductsLoading(false))
  }, [])

  return (
    <div className='grid place-items-center w-full'>
      {!user ? (
        <div className='space-y-4 flex flex-col justify-center items-center'>
          <span className='text-xl'>
            You need to be logged in to have products liked
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type='button'
                className='hover:brightness-95 flex py-2 px-6 rounded-lg text-neutral-50 font-medium bg-violet-500'
              >
                Already have an account? Login!
              </button>
            </DialogTrigger>
            <DialogContent className='absolute rounded-lg top-0 px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max max-h-max'>
              <Login />
            </DialogContent>
          </Dialog>
        </div>
      ) : isLikedProductsLoading ? (
        <Loading />
      ) : likedProducts.length === 0 ? (
        <div className='space-y-4 flex flex-col items-center'>
          <span className='text-xl'>
            Your Liked Products is Empty, search and like any product
          </span>
            <Link className='flex px-6 py-2 bg-violet-500 items-center justify-center rounded-lg text-lg font-medium text-neutral-50 gap-2' to={'/store'}>
              Go to The Store <ShoppingBasket />
            </Link>
        </div>
      ) : (
        likedProducts.map(product => (
          <DestacProduct
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            type={product.type}
            price={product.price}
            isLiked
          />
        ))
      )}
    </div>
  )
}
