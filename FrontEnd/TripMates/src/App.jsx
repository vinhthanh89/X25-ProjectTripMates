import { Routes, Route } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import Register from "./pages/Register";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news-feed" element={<NewsFeed />} />
      </Routes>
    </>
  );
};

export default App;
