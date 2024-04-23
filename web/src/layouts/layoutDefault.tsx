import Aside from "@/components/aside/aside";
import Header from "../components/header/index.";
import { Widget } from "@/components/Widget";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="flex h-full">
        <Aside />
        {children}
        <Widget />
      </div>
    </section>
  );
}
