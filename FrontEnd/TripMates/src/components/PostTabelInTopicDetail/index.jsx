/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useEffect, useState } from "react";
import { getPostByTopicId } from "../../services/post";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const PostTableInTopicDetail = ({ topicId, userCreated }) => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.user.user);
  const [postInTopic, setPostInTopic] = useState([]);

  useEffect(() => {
    const fetchPostInTopic = async () => {
      try {
        const response = await getPostByTopicId(topicId);
        setPostInTopic(response.data.findPostByTopicId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostInTopic();
  }, [topicId]);

  const columns = [
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      width: 150,
    },
    {
      key: "title",
      title: "Blog Title",
      dataIndex: "title",
      width: 450,
    },
    {
      key: "location",
      title: "Location",
      dataIndex: "location",
    },
  ];

  const data = postInTopic.map((post, index) => ({
    key: index,
    date: dayjs(post.date, "YYYY-MM-DD").format("DD-MMMM-YYYY"),
    title: (
      <span
        onClick={() => navigate(`/topic/post/${post._id}`)}
        className="cursor-pointer hover:no-underline hover:text-[lightblue]"
      >
        {post.title}
      </span>
    ),
    location: (
      <>
        {post?.location?.continent ? (
          <span>
            <a className="underline">{post?.location?.continent}</a>
          </span>
        ) : (
          <></>
        )}
        {post?.location?.country ? (
          <span>
            <span> &gt;&gt; </span>
            <a className="underline">{post?.location?.country}</a>
          </span>
        ) : (
          <></>
        )}
      </>
    ),
  }));

  return (
    <div>
      <Table
        locale={{
          emptyText: "No Post",
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{
          y: 240,
        }}
      />
      {userLogin._id === userCreated._id ? (
        <button
          onClick={() => navigate(`/topic/createPost/${topicId}`)}
          className="font-bold bg-[#5143d9] text-white p-[10px] mt-4 text-sm rounded-xl float-right"
        >
          Create new post
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostTableInTopicDetail;
