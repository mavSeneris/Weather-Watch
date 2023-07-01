import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Today from "./pages/Today";
import Layout from "./pages/Layout"
import Hourly from "./pages/Hourly";
import FiveDays from "./pages/Daily";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="today" element={<Today/>}/>
    <Route path="hourly" element={<Hourly/>}/>
    <Route path="daily" element={<FiveDays/>}/>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
