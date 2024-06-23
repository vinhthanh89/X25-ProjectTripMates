/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import { IoIosHeart } from "react-icons/io";
import { getReactByTopicId, reactTopic, removeReact } from "../../../../services/react";

const TopicReact = ({ topic }) => {
  const iconSize = 25;
  const iconStyle = {
    background: "transparent",
  };
  const userLogin = useSelector(state => state.user.user)

  const [topicReaction, setTopicReaction] = useState([]);
  const [isReact, setIsReact] = useState(false);

  useEffect(() => {
    const fetchReact = async () => {
      try {
        const response = await getReactByTopicId(topic._id);

        const reactions = response.data.reactions
        setTopicReaction(reactions)

        const userExists = reactions.some(reaction =>
          reaction.userId._id === userLogin._id
        );

        setIsReact(userExists ? true : false )
      } catch (error) {
        console.log(error);
      }
    };
    fetchReact();
  }, [topic._id , userLogin]);

  const handleReactTopic = async () => {
    try {
        const response = await reactTopic(topic._id)
        const newTopicReactions = response.data.reactions
        setTopicReaction(newTopicReactions)
        setIsReact(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveReactTopic = async () => {
    try {
        const response = await removeReact(topic._id)
        const newTopicReactions = response.data.reactions
        setTopicReaction(newTopicReactions)
        setIsReact(false)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {isReact ? (
        <button onClick={handleRemoveReactTopic}>
          <IoIosHeart
            size={iconSize}
            style={iconStyle}
            className="text-[red]"
          />
        </button>
      ) : (
        <button onClick={handleReactTopic}>
          <IoIosHeart size={iconSize} style={iconStyle} className="" />
        </button>
      )}
      <p className="w-2">{topicReaction.length}</p>
    </div>
  );
};

export default TopicReact;
