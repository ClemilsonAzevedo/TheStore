import { Route, Routes as RoutesDOM } from "react-router-dom";
import { Home } from "./pages/home";
import LayoutDefault from "./layouts/layoutDefault";

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
