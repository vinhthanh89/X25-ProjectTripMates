import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button, DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";

import { createPost } from "../../../services/post";
import { getImageFile, getImageSrc } from "../../../utils/getImageSrc";
import RenderSearchInput from "../../RenderSearchInput";
import ContentEditor from "./ContentEditor";
import { FaLongArrowAltLeft } from "react-icons/fa";
import ModalLoading from "../../ModalLoading";

const PostForm = () => {
  const urlParams = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const [locationId, setLocationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const changeContent = (content) => {
    setModel(content);
  };

  const disableDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    // form.setFieldsValue({location : e.target.value})
  };

  const handleSetLocationId = (location, locationId) => {
    setLocationId(locationId);
    // setSearchInput(location);
    form.setFieldsValue({ location });
    form.setFieldsValue({ locationId: locationId });
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const imgBlobSrc = getImageSrc(model);

      const imgFilesList = await getImageFile(imgBlobSrc);

      const formData = new FormData();

      imgFilesList.forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });
      imgBlobSrc.forEach((file, index) => {
        formData.append(`imageBlob[${index}]`, file);
      });
      formData.append("content", model);
      formData.append("title", values.title);
      formData.append("locationId", values.locationId);
      formData.append("date", values.date);
      formData.append("topicId", urlParams.topicId);

      await createPost(formData);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate(`/topic/${urlParams.topicId}`);
    }
  };

  return (
    <div className="gap-[3rem] pt-5 px-[3rem] bg-white rounded h-full overflow-y-scroll">
      <Form
        form={form}
        layout="vertical"
        name="basic"
        className="pb-[20px]"
        onFinish={onFinish}
      >
        <div className="text-black">
          <button
            onClick={() => navigate(`/topic/${urlParams.topicId}`)}
            className="flex items-center gap-2 hover:underline mb-[5px]"
          >
            <FaLongArrowAltLeft />
            Back
          </button>
          <h2 className="text-2xl font-semibold mb-4">Create your post</h2>
          <div className="flex flex-col gap-4">
            <Form.Item
              name="title"
              label={
                <label className="form-control flex justify-center">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Title
                    </span>
                  </div>
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please input title!",
                },
              ]}
            >
              <Input
                showCount
                maxLength={80}
                className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-full transition-colors duration-300"
              />
            </Form.Item>

            <Form.Item className="hidden" label="location id" name="locationId">
              <Input value={locationId} />
            </Form.Item>

            <label className="form-control grid grid-cols-2 gap-5">
              <div className="col-span-1 relative">
                <Form.Item
                  label={
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        Where to? (countries)
                      </span>
                    </div>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input location!",
                    },
                  ]}
                  name="location"
                  className="h-auto"
                >
                  <Input
                    onChange={onChangeSearchInput}
                    value={searchInput}
                    className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold transition-colors duration-300"
                  />
                </Form.Item>

                <div className="absolute top-[100px] z-10 bg-[white] bg-opacity-90 w-full">
                  <RenderSearchInput
                    searchInput={searchInput}
                    handleSetLocationId={handleSetLocationId}
                  />
                </div>
              </div>

              <div className="col-span-1">
                <Form.Item
                  label={
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        Date
                      </span>
                    </div>
                  }
                  name="date"
                  rules={[
                    {
                      required: true,
                      message: "Please pick a date!",
                    },
                  ]}
                >
                  <DatePicker
                    disabledDate={disableDate}
                    placeholder="e.g., 2024-01-01"
                    className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extraboldw w-full"
                    format="DD-MM-YYYY"
                  />
                </Form.Item>
              </div>
            </label>
            <ContentEditor changeContent={changeContent} model={model} />
            <Button
              loading={loading}
              htmlType="submit"
              className="bg-[#5143d9] h-[50px] text-[20px] font-bold text-white"
            >
              Post now
            </Button>
            <ModalLoading loading={loading} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
