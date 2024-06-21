  /* eslint-disable react/prop-types */
  import { Table } from "antd";
  import { useEffect, useState } from "react";
  import { getPostByTopicId } from "../../services/post";
  import dayjs from "dayjs";
import { useNavigate } from "react-router";

  const PostTableInTopicDetail = ({ topicId }) => {
    const navigate = useNavigate()
    const [postInTopic, setPostInTopic] = useState([]);

    useEffect(() => {
      const fetchPostInTopic = async () => {
        try {
          const response = await getPostByTopicId(topicId);
          console.log(response);
          setPostInTopic(response.data.findPostByTopicId);
        } catch (error) {
          console.log(error);
        }
      };
      fetchPostInTopic();
    }, [topicId]);

    console.log(postInTopic);

    const columns = [
      {
        key : 'date',
        title: "Date",
        dataIndex: "date",
        width: 150,
      },
      {
        key : 'title',
        title: "Blog Title",
        dataIndex: "title",
        width: 450,
      },
      {
        key : 'location',
        title: "Location",
        dataIndex: "location",
      },
    ];

    const data = postInTopic.map((post, index) => ({
      key: index,
      date : dayjs(post.date , 'YYYY-MM-DD').format('DD-MMMM-YYYY'),
      title: <span
      onClick={() => navigate(`/topic/post/${post._id}`)}
       className="underline cursor-pointer hover:no-underline hover:text-[lightblue]">
       {post.title}
       </span>,
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
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            y: 240,
          }}
        />
      </div>
    );
  };

  export default PostTableInTopicDetail;
