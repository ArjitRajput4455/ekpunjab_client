import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SocialInitiatives from "./pages/SocialInitiatives";
import PunjabRegions from "./pages/PunjabRegions";
import Newsroom from "./pages/Newsroom";
import NewsArticle from "./pages/NewsArticle";
import Emergencies from "./pages/Emergencies";
import About from "./pages/About";
import FocusArea from "./pages/FocusArea";
import Campaign from "./pages/Campaign";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Partnerships from "./pages/Partnerships";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "social-initiatives", element: <SocialInitiatives /> },
      { path: "punjab-regions", element: <PunjabRegions /> },
      { path: "newsroom", element: <Newsroom /> },
      { path: "newsroom/:id", element: <NewsArticle /> },
      { path: "emergencies", element: <Emergencies /> },
      { path: "about", element: <About /> },
      { path: "focus/:area", element: <FocusArea /> },
      { path: "campaign/:id", element: <Campaign /> },
      { path: "events", element: <Events /> },
      { path: "publications", element: <Publications /> },
      { path: "volunteer", element: <Volunteer /> },
      { path: "donate", element: <Donate /> },
      { path: "partnerships", element: <Partnerships /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);