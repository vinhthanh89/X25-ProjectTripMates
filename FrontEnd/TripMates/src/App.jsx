import "./App.css";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";
import NewsFeed from "./pages/NewsFeed";
import Content from "./components/NewsFeed/Content";
import TopicDetail from "./components/NewsFeed/TopicDetail";
import UserProfile from "./components/NewsFeed/UserProfile";
import Header from "./components/NewsFeed/Header";
import Message from "./pages/Message";
import isObjectEmpty from './utils/isObjectyEmty';
import Reels from "./components/Reels";
import PostForm from "./components/NewsFeed/PostForm";
import Post from "./components/NewsFeed/Post";

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
        <div className="relative">
          <Header />
          <Routes>
            <Route path="/" element={<NewsFeed />}>
              <Route path="" element={<Content />} />
              <Route path="/shorts" element={<Reels />} />
              <Route path="/message" element={<Message />} />
              <Route path="/topic/:topicId" element={<TopicDetail />} />
              <Route path="/topic/createPost/:topicId" element={<PostForm />}/>
              <Route path="/topic/post/:postId" element={<Post />}/>
            </Route>
            <Route path="user/:userId" element={<UserProfile />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
