import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./components/LandingPage.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
