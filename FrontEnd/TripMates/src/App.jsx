import "./App.css";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import isObjectEmpty from "./utils/isObjectyEmty";
import Content from "./components/NewsFeed/Content";
import TopicPage from "./components/NewsFeed/TopicPage";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Toaster />
      <Routes>
        {isObjectEmpty(user) ? (
            <Route path="/" element={<LandingPage />} />
        ) : (
          <Route path="/" element={<NewsFeed />}>
              <Route path="" element={<Content />} />
              <Route path="/topic-detail" element={<TopicPage />} />
          </Route>


        )}
      </Routes>
    </>
  );
};

export default App;
