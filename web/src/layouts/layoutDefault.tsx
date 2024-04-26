import { Widget } from "@/components/Widget";
import Aside from "@/components/aside/aside";
import Header from "../components/header/index.";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen ">
      <Header />
      <div className="h-[calc(100vh-76px)] flex relative">
        <Aside />
        {children}
        <Widget />
      </div>
    </section>
  );
}
