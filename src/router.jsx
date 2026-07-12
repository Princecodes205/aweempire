// Route tree for Awk Empire.
// Layout wraps every page; child routes render inside <Outlet /> in Layout.
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout.jsx";
import Landing from "./pages/Landing.jsx";
import InteriorEmpire from "./pages/InteriorEmpire.jsx";
import ImmigrationConsultancy from "./pages/ImmigrationConsultancy.jsx";
import AgroAllied from "./pages/AgroAllied.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import Foundation from "./pages/Foundation.jsx";
import NotFound from "./pages/NotFound.jsx";
import PreviewHeroes from "./pages/PreviewHeroes.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "interior-empire", element: <InteriorEmpire /> },
      { path: "immigration-consultancy", element: <ImmigrationConsultancy /> },
      { path: "agro-allied", element: <AgroAllied /> },
      { path: "real-estate", element: <RealEstate /> },
      { path: "foundation", element: <Foundation /> },
      { path: "preview-heroes", element: <PreviewHeroes /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
