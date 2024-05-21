import { Routes, Route } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import PostPage from "./pages/PostPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/news-feed/post" element={<PostPage />} />
      </Routes>
    </>
  );
};

export default App;
