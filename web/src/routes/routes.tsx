import { Route, Routes as RoutesDOM } from "react-router-dom";
import Home from "../pages/home/home";

export default function Routes() {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />} />
    </RoutesDOM>
  );
}
