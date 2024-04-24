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
        <div className="bg-white relative rounded-full p-2 duration-300 hover:bg-neutral-600">
          <div className="absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500"></div>
          <ShoppingCart />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-600">
          <Home />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-600">
          <Heart />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-600">
          <ShoppingBasket />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-600">
          <User />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-600">
          <Settings />
        </div>
      </div>
    </section>
  );
}
