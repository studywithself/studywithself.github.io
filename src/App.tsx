import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useSearchParams,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import KitGetProject from "./components/project/KitGetProject";
import KitGetPaperProject from "./components/project/KitGetPaperProject";
import CafeMasterProject from "./components/project/CafeMasterProject";
import DoldariProject from "./components/project/DoldariProject";
import ByeoryProject from "./components/project/ByeoryProject";

function MainLayout() {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");
  const [activeSection, setActiveSection] = useState(section || "Home");

  useEffect(() => {
    if (section) {
      setActiveSection(section);
    }
  }, [section]);

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "Stack":
        return <Stack />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>{renderSection()}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project" element={<Navigate to="/" replace />} />
        <Route path="/project/kitget" element={<KitGetProject />} />
        <Route path="/project/kitget-paper" element={<KitGetPaperProject />} />
        <Route path="/project/cafemaster" element={<CafeMasterProject />} />
        <Route path="/project/doldari" element={<DoldariProject />} />
        <Route path="/project/byeory" element={<ByeoryProject />} />
      </Routes>
    </Router>
  );
}

export default App;
