import Post from "../model/post.model.js";
import { handleUpload } from "../utils/handleUpload.js";

export const createPost = async (req, res) => {
  try {
    const userCreated = req.user;
    const files = req.files;
    const { imageBlob, content, date, title, locationId, topicId } = req.body;
    let covertedContent = content;

    if (files.length > 0) {
      const filesBase64 = [];

      files.forEach((file) => {
        const b64 = Buffer.from(file.buffer).toString("base64");
        let dataURI = "data:" + file.mimetype + ";base64," + b64;
        filesBase64.push(dataURI);
      });

      const cloudinaryResponse = await Promise.all(
        filesBase64.map((file, index) =>
          handleUpload(file).then((response) => ({ response, index }))
        )
      );

      cloudinaryResponse.sort((a, b) => a.index - b.index);
      const orderedResponses = cloudinaryResponse.map((item) => item.response);

      const cloudinaryURL = orderedResponses.map((item) => item.secure_url);

      for (let i = 0; i < imageBlob.length; i++) {
        covertedContent = covertedContent.replace(
          imageBlob[i],
          cloudinaryURL[i]
        );
      }
    }

    const newPost = await Post.create({
      title,
      date,
      location: locationId,
      userCreated,
      content: covertedContent,
      topicId,
    });

    return res.status(201).json({
      message: "Created Post Successfully",
      newPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    const findPost = await Post.findById(postId).populate(
      "location userCreated"
    );

    if (!findPost) {
      return res.status(404).json({
        message: "Post Not Found",
      });
    }

    return res.status(200).json({
      message: "Get Post Successfully",
      findPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getPostByTopicId = async (req, res) => {
  try {
    const topicId = req.params.topicId;

    const findPostByTopicId = await Post.find({ topicId: topicId }).populate(
      "location userCreated"
    );
    if (!findPostByTopicId) {
      return res.status(404).json({
        message: "Post Not Found",
      });
    }

    return res.status(200).json({
      message: "Get Post By Topic Successfully",
      findPostByTopicId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
