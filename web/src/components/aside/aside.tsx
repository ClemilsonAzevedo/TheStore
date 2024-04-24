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
        <div className="bg-white relative rounded-full p-2 duration-300 hover:bg-neutral-400">
          <div className="absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500" />
          <ShoppingCart />
        </div>
      </div> 
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
          <Home />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
          <Heart />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
          <ShoppingBasket />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
          <User />
        </div>
        <div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
          <Settings />
        </div>
      </div>
    </section>
  );
}
