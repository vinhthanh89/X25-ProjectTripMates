import "./App.css";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import isObjectEmpty from "./utils/isObjectyEmty";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Toaster />
      <Routes>
        {isObjectEmpty(user) ? (
            <Route path="/" element={<LandingPage />} />
        ) : (
          <Route path="/" element={<NewsFeed />} />
        )}
      </Routes>
    </>
  );
};

export default App;
