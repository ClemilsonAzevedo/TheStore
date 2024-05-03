export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price?: string;
  isLiked: boolean;
  image?: string;
  onCart?: boolean;
  cart?: {
    unitPrice?: number;
    quantity?: number;
    amount?: number;
  }
}
