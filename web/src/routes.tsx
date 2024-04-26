import { Route, Routes as RoutesDOM } from "react-router-dom";
import LayoutDefault from "./layouts/layoutDefault";
import { Home } from "./pages/home";

export default function Routes() {
  return (
    <RoutesDOM>
      <Route
        path="/"
        element={
          <LayoutDefault>
            <Home />
          </LayoutDefault>
        }
      />
    </RoutesDOM>
  );
}
