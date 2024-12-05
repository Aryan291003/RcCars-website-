import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TablistTabpanel from "./pages/tablist-tabpanel";
import WLight1 from "./pages/w-light1";
import WLight from "./pages/w-light";
import Container from "./pages/container";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1440w-light":
        title = "";
        metaDescription = "";
        break;
      case "/1440w-light1":
        title = "";
        metaDescription = "";
        break;
      case "/container":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TablistTabpanel />} />
      <Route path="/1440w-light" element={<WLight1 />} />
      <Route path="/1440w-light1" element={<WLight />} />
      <Route path="/container" element={<Container />} />
    </Routes>
  );
}
export default App;
