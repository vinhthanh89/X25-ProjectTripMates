import "./App.css";
import { Routes, Route } from "react-router";
import {Toaster} from 'react-hot-toast'
import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news-feed" element={<NewsFeed />} />        
      </Routes>
    </>
  );
};

export default App;
