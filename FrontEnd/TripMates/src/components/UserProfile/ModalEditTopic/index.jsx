/* eslint-disable react/prop-types */
import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import RenderSearchInput from "../../RenderSearchInput";
import { editTopic } from "../../../services/topic";

const ModalEditTopic = ({ topic }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { title, description, location, thumbnail } = topic;
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
    });
  }, [form, title, isModalOpen, description, location]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { title, locationId, description } = values;
      console.log(values);
      const formData = {
        title,
        locationId,
        description,
        thumbnail: locationThumbnail,
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
    // form.setFieldsValue({location : e.target.value})
  };

  const handleSetLocationId = (
    location,
    locationId,
    selectedLocationThumbnail
  ) => {
    setLocationId(locationId);
    // setSearchInput(location);
    setLocationThumbnail(selectedLocationThumbnail);
    form.setFieldsValue({ location});
    form.setFieldsValue({ locationId: locationId });
  };

  return (
    <div>
      <div onClick={showModal} className="flex justify-between items-center">
        <span>edit topic</span>
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
                name="title"
                label={
                  <>
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        Topic name
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
              <div>
                <RenderSearchInput
                  searchInput={searchInput}
                  handleSetLocationId={handleSetLocationId}
                />
              </div>
              {/* <Form.Item
                label={
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Thumbnail
                    </span>
                  </div>
                }
              >
              <div className="w-full h-[200px]">

                <img className="w-full h-full object-fill" src={locationThumbnail} />
              </div>
              </Form.Item> */}

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

              {/* <div className="flex justify-between">
                <div className="form-control max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Start date
                    </span>
                  </div>
                  <Form.Item
                    name="startDate"
                    rules={[
                      {
                        required: true,
                        message: "Please pick start date!",
                      },
                    ]}
                  >
                    <DatePicker
                      // onChange={onChangeStartDate}
                      // disabledDate={disabledDate}
                      placeholder="e.g., 2024-01-01"
                      className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                      format="DD-MM-YYYY"
                    />
                  </Form.Item>
                </div>
                <div className="form-control max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      End date
                    </span>
                  </div>
                  <Form.Item name="endDate">
                    <DatePicker
                      // disabledDate={disableStarDate}
                      placeholder="e.g., 2024-01-01"
                      className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                      format="DD-MM-YYYY"
                    />
                  </Form.Item>
                </div>
              </div> */}
              <Form.Item>
                <div className="flex items-center justify-center gap-5">
                  <Button className="bg-[lightgray]" onClick={handleCancel}>
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
