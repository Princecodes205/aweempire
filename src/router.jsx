// Route tree for Awk Empire.
// Layout wraps every page; child routes render inside <Outlet /> in Layout.
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout.jsx";
import Landing from "./pages/Landing.jsx";
import InteriorEmpire from "./pages/InteriorEmpire.jsx";
import ImmigrationConsultancy from "./pages/ImmigrationConsultancy.jsx";
import AgroRealEstate from "./pages/AgroRealEstate.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "interior-empire", element: <InteriorEmpire /> },
      { path: "immigration-consultancy", element: <ImmigrationConsultancy /> },
      { path: "agro-real-estate", element: <AgroRealEstate /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
