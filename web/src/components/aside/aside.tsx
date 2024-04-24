import {
  ShoppingCart,
  Home,
  Heart,
  ShoppingBasket,
  User,
  Settings,
} from "lucide-react";

export default function Aside() {
  return (
    <section className="flex h-[550px] w-[50px] flex-col items-center justify-between">
      <div>
        <ShoppingCart />
      </div>
      <div className="flex flex-col gap-5">
        <Home />
        <Heart />
        <ShoppingBasket />
      </div>
      <div className="flex flex-col gap-5">
        <User />
        <Settings />
      </div>
    </section>
  );
}
