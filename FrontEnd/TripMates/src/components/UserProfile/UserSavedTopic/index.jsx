import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBookmarkTopicByUserId } from "../../../services/bookmark";
import UserTopic from "../UserTopics";

const UserSavedTopic = () => {
  const userLogin = useSelector((state) => state.user.user);
  const [bookmarksTopic, setBookmarksTopic] = useState(null);

  useEffect(() => {
    const getBookmarkTopic = async () => {
      try {
        const response = await getBookmarkTopicByUserId(userLogin._id);
        console.log(response);
        setBookmarksTopic(response.data.bookmarksTopic);
      } catch (error) {
        console.log(error);
      }
    };
    getBookmarkTopic();
  }, [userLogin._id]);

  const renderBookmarksTopic =
    bookmarksTopic?.length === 0 ? (
      <div className="h-[400px] col-span-6 flex justify-center items-center">
        <p className="text-2xl">You have no saved topics</p>
      </div>
    ) : (
      bookmarksTopic?.map((topic) => {
        return (
          <div className="py-2" key={topic._id}>
            <UserTopic topic={topic.topic} />
          </div>
        );
      })
    );

  return (
    <div>
      <h1 className="text-lg">Total: {bookmarksTopic?.length}</h1>
      <div className="flex flex-col">{bookmarksTopic ? renderBookmarksTopic : <>Loading...</>}</div>
    </div>
  );
};

export default UserSavedTopic;
