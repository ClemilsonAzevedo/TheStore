import { Calendar, Check, CheckCheck, Heart, Minus, Plus } from 'lucide-react'
import pcImage from '../../assets/MacbookProM1Pro.png'

export function ProductDetail() {
  return (
    <section className='p-5'>
      <div className='flex gap-5'>
        <div>
          <div className='border p-2'>
            <img src={pcImage} alt='' />
          </div>
          <div>
            <h5>Price</h5>
            <span>2.399$</span>
          </div>
          <div>
            <button type='button'>Add to cart</button>
            <button type='button'>
              <Heart />
            </button>
          </div>
        </div>

        <div>
          <div>
            <h3>Apple Macbook Pro</h3>
            <span>#onStock</span>
          </div>
          <div className='flex gap-5'>
            <div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg'>
              <select name="Processor" id="processor" className='outline-none'>
                <option value="M1">M1</option>
                <option value="M1P">M1 Pro</option>
                <option value="M1M">M1 Max</option>
              </select>
            </div>

            <div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg'>
              <select name="RAM Memory" id="ram-memory" className=''>
                <option value="16gb">16GB</option>
                <option value="32gb">32GB</option>
                <option value="64gb">64GB</option>
              </select>
            </div>

            <div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg'>
              <select name="SSD Memory" id="ssd-memory" className=''>
                <option value="128gb">128GB</option>
                <option value="256gb">256GB</option>
                <option value="512gb">512GB</option>
              </select>
            </div>
          </div>

          <div className='flex'>
            <div className='border flex'>
              <Minus />
              <span>2</span>
              <Plus />
            </div>
            <div className='w-5 h-5 rounded-full bg-neutral-950' />
            <div className='w-5 h-5 rounded-full bg-neutral-600' />
            <div className='w-5 h-5 rounded-full  bg-violet-500' />
          </div>

          <div>
            <div>
              <div className='border max-w-6'>
                <Check />
              </div>
              Form Delivery
            </div>
            <div>
              <Calendar />
              <div>
                Return Delivery
                <span>Free 30days Delivery Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16'>More relevant Products</div>
    </section>
  )
}
