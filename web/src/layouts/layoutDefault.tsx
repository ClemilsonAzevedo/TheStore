import Aside from "@/components/aside/aside";
import Header from "../components/header/header";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        {children}
      </div>
    </>
  );
}
