import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Today from "./pages/Today";
import Layout from "./components/Layout";
import Hourly from "./pages/Hourly";
import Daily from "./pages/Daily";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Today />} />
      <Route path="hourly" element={<Hourly />} />
      <Route path="daily" element={<Daily />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
