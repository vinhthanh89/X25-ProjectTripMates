/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getUsersComment } from "../../../../services/comment";
import CommentRender from "../../../Comment/CommentRender";
import CommentTextArea from "../../../Comment/CommentTextArea";



const RenderComment = ({topic}) => {
  const [usersComment, setUsersComment] = useState([]);



  useEffect(() => {
    const fetchDataUsersComment = async () => {
      try {
        const response = await getUsersComment(topic._id);
        setUsersComment(response.data.usersComment);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataUsersComment();
  }, [topic._id]);



  return (
    <div>
      <h1 className="text-lg font-bold">Comments</h1>

    </div>
  );
};

export default RenderComment;
