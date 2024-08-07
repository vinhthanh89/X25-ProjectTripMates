import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import FilterTopicContainer from "./components/FilterTopicContainer";
import Content from "./components/NewsFeed/Content";
import Header from "./components/NewsFeed/Header";
import Post from "./components/NewsFeed/Post";
import PostForm from "./components/NewsFeed/PostForm";
import TopicDetail from "./components/NewsFeed/TopicDetail";
import UserProfile from "./components/NewsFeed/UserProfile";
import Reels from "./components/Reels";
import LandingPage from "./pages/LandingPage";
import Message from "./pages/Message";
import NewsFeed from "./pages/NewsFeed";
import isObjectEmpty from './utils/isObjectyEmty';

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
              <Route path="/search" element={<FilterTopicContainer />} />
              <Route path="/shorts" element={<Reels />} />
              <Route path="/topic/:topicId" element={<TopicDetail />} />
              <Route path="/topic/createPost/:topicId" element={<PostForm />}/>
              <Route path="/topic/post/:postId" element={<Post />}/>
            </Route>
            <Route path="user/:userId" element={<UserProfile />} />
            <Route path="/message" element={<Message />} />

          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
