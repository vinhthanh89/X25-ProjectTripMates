import "./App.css";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import isObjectEmpty from "./utils/isObjectyEmty";
import Content from "./components/NewsFeed/Content";
import TopicDetail from "./components/NewsFeed/TopicDetail";
import UserProfile from "./components/NewsFeed/UserProfile";
import Header from "./components/NewsFeed/Header";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Toaster />

      {isObjectEmpty(user) ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<NewsFeed />}>
              <Route path="" element={<Content />} />
              <Route path="/topic/:topicId" element={<TopicDetail />} />
            </Route>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
