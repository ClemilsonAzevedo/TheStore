import { ProductInterface } from "@/@types/producInterface"

export const products: ProductInterface[] = [
  {
    id: 'e4f5g6h',
    name: 'HP Pavilion 15',
    description: 'A versatile laptop with a sleek design',
    price: '749.99',
    isLiked: false,
    image: '',
    onCart: true,
    cart: {
      quantity: 3,
      unitPrice: 749.99,
      amount: 2249.97
    }
  },
  {
    id: 'i7j8k9l',
    name: 'Lenovo IdeaPad 3',
    description: 'A budget-friendly laptop with decent performance',
    price: '399.99',
    isLiked: true,
    image: '',
    onCart: true,
    cart: {
      quantity: 8,
      unitPrice: 399.99,
      amount: 3199.92
    }
  },
  {
    id: 'm0n1p2q',
    name: 'Acer Aspire 5',
    description: 'A well-rounded laptop with good value for money',
    price: '599.99',
    isLiked: false,
    image: '',
    onCart: true,
    cart: {
      quantity: 4,
      unitPrice: 599.99,
      amount: 2399.96
    }
  },
  {
    id: 'r3s4t5u',
    name: 'ASUS VivoBook 15',
    description: 'A lightweight and portable laptop for on-the-go use',
    price: '499.99',
    isLiked: true,
    image: '',
    onCart: true,
    cart: {
      quantity: 6,
      unitPrice: 499.99,
      amount: 2999.94
    }
  },
  {
    id: 'v6w7x8y',
    name: 'Microsoft Surface Laptop 4',
    description: 'A premium laptop with a sleek design and powerful performance',
    price: '999.99',
    isLiked: false,
    image: '',
    onCart: false,
    cart: {
      quantity: 2,
      unitPrice: 999.99,
      amount: 1999.98
    }
  },
  {
    id: 'z9a0b1c',
    name: 'Apple MacBook Air',
    description: 'A thin and lightweight laptop with excellent battery life',
    price: '999.99',
    isLiked: true,
    image: '',
    onCart: false,
    cart: {
      quantity: 1,
      unitPrice: 999.99,
      amount: 999.99
    }
  },
  {
    id: 'd2e3f4g',
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'A durable and business-oriented laptop with great portability',
    price: '1499.99',
    isLiked: false,
    image: '',
    onCart: false,
    cart: {
      quantity: 3,
      unitPrice: 1499.99,
      amount: 4499.97
    }
  },
  {
    id: 'h5i6j7k',
    name: 'HP Spectre x360',
    description: 'A convertible laptop with a premium design and touch screen',
    price: '1299.99',
    isLiked: true,
    image: '',
    onCart: false,
    cart: {
      quantity: 2,
      unitPrice: 1299.99,
      amount: 2599.98
    }
  },
  {
    id: 'l8m9n0p',
    name: 'Dell XPS 13',
    description: 'A high-performance laptop with a sleek and compact design',
    price: '1199.99',
    isLiked: false,
    image: '',
    onCart: false,
    cart: {
      quantity: 1,
      unitPrice: 1199.99,
      amount: 1199.99
    }
  },
  {
    id: 'q8r9s0t',
    name: 'Acer Swift 3',
    description: 'A budget-friendly laptop with a metal chassis and good performance',
    price: '699.99',
    isLiked: true,
    image: '',
    onCart: false,
    cart: {
      quantity: 4,
      unitPrice: 699.99,
      amount: 2799.96
    }
  }
]
