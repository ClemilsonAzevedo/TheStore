import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
