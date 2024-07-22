/* eslint-disable react/prop-types */
import { Button, Form, Input, Modal, Radio } from "antd";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import RenderSearchInput from "../../RenderSearchInput";
import { editTopic } from "../../../services/topic";
import { FaRegQuestionCircle } from "react-icons/fa";

const ModalEditTopic = ({ topic }) => {
  const {isPrivate , title, description, location, thumbnail } = topic;

  const [isPrivateValue , setIsPrivateValue] = useState(isPrivate)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationThumbnail, setLocationThumbnail] = useState(thumbnail);
  const [searchInput, setSearchInput] = useState(location.locationName);
  const [locationId, setLocationId] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title: title,
      description,
      location: location.locationName,
      locationId: location._id,
      isPrivate,
    });
  }, [form, title, isModalOpen, description, location , isPrivate]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onChangeIsPrivateRadio = (e) => {
    console.log('radio checked', e.target.value);
    setIsPrivateValue(e.target.value);
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const {isPrivate , title, locationId, description } = values;
      const formData = {
        title,
        locationId,
        description,
        thumbnail: locationThumbnail,
        isPrivate
      };
      await editTopic(topic._id, formData);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSetLocationId = (
    location,
    locationId,
    selectedLocationThumbnail
  ) => {
    setLocationId(locationId);
    setLocationThumbnail(selectedLocationThumbnail);
    form.setFieldsValue({ location});
    form.setFieldsValue({ locationId: locationId });
  };

  return (
    <div>
      <div onClick={showModal} className="flex items-center gap-2">
        <span className="font-semibold">Edit topic</span>
        <MdEdit />
      </div>
      <Modal
        title="Edit Topic"
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          form={form}
          name="basic"
          className="pb-[20px]"
          onFinish={onFinish}
        >
          <div className="text-black px-5">
            <div className="flex flex-col gap-4">
            <Form.Item
              name="isPrivate"
              label={
                <div className="label" title="Everyone can see your topic when you choose public and just follower can see when you choose private">
                  <span className="label-text font-bold text-black text-base">
                    Who can see your topic
                  </span>
                  <sup><FaRegQuestionCircle /></sup>
                </div>
              }
            >
              <Radio.Group defaultValue={false} onChange={onChangeIsPrivateRadio}  value={isPrivateValue}>
                <Radio value={false}>
                  <span className="text-[18px] font-bold">Public</span>
                </Radio>
                <Radio value={true}>
                  <span className="text-[18px] font-bold">Private</span>
                </Radio>
              </Radio.Group>
            </Form.Item>
              <Form.Item
                name="title"
                label={
                  <>
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        Topic title
                      </span>
                    </div>
                  </>
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
                  className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                />
              </Form.Item>

              <Form.Item className="hidden" name="locationId">
                <Input
                  //  onChange={onChangeLocationId}
                  value={locationId}
                />
              </Form.Item>

                <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input location!",
                  },
                ]}
                label={
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Where to? (countries)
                    </span>
                  </div>
                }
                name="location"
                className="h-auto"
              >
                <Input
                  onChange={onChangeSearchInput}
                  value={searchInput}
                  className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                />
              </Form.Item>
              <div className="mt-[-40px]">
                <RenderSearchInput
                  searchInput={searchInput}
                  handleSetLocationId={handleSetLocationId}
                />
              </div>
              <Form.Item
                name="description"
                label={
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Description
                    </span>
                  </div>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input description!",
                  },
                ]}
              >
                <Input.TextArea
                  showCount
                  maxLength={400}
                  style={{
                    height: "10rem",
                    width: "25rem",
                    resize: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                  className="border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] transition-colors duration-300"
                />
              </Form.Item>
              <Form.Item>
                <div className="flex items-center justify-center gap-5">
                  <Button
                  disabled={loading}
                   className="bg-[lightgray]" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Save Change
                  </Button>
                </div>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEditTopic;
