import { Button, DatePicker, Drawer, Form, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
// import { useNavigate } from "react-router";

import { createTopic } from "../../../services/topic";
import RenderSearchInput from "../../RenderSearchInput";

// eslint-disable-next-line react/prop-types
const TopicForm = ({ onClose, open }) => {
  const [searchInput, setSearchInput] = useState("");
  const [locationId, setLocationId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const [form] = Form.useForm();

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const disableStarDate = (current) => {
    return current && current < dayjs(startDate).endOf("day");
  };

  const onChangeStartDate = (date) => {
    setStartDate(date);
    form.setFieldsValue({ endDate: null });
  };

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchInput(e.target.value);
    form.setFieldsValue({ location: e.target.value });
  };

  const handleSetLocationId = (location, locationId, locationThumbnail) => {
    setLocationId(locationId);
    // setSearchInput(location);
    setThumbnail(locationThumbnail);
    form.setFieldsValue({ location });
    form.setFieldsValue({ locationId: locationId });
  };

  const onFinish = async (values) => {
    try {
      console.log(values);
      const { title, description, locationId, startDate, endDate } = values;
      const formData = {
        title,
        description,
        locationId,
        startDate,
        endDate,
        thumbnail,
      };
      console.log("formData :::", formData);
      await createTopic(formData);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer onClose={onClose} open={open} width={500}>
      <Form
        layout="vertical"
        form={form}
        name="basic"
        className="pb-[20px]"
        onFinish={onFinish}
      >
        <div className="text-black px-5">
          <h2 className="text-2xl font-semibold mb-4">Start a New Trip</h2>
          <div className="flex flex-col gap-4">
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input title!",
                },
              ]}
            >
              <label className="form-control max-w-xs">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Topic name
                  </span>
                </div>
                <Input
                  showCount
                  maxLength={80}
                  className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                />
              </label>
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input description!",
                },
              ]}
            >
              <label className="form-control max-w-xs">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Description
                  </span>
                </div>
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
              </label>
            </Form.Item>

            <Form.Item className="hidden" label="location id" name="locationId">
              <Input value={locationId} />
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

            <div className="mt-[-20px]">
              <RenderSearchInput
                searchInput={searchInput}
                handleSetLocationId={handleSetLocationId}
              />
            </div>

            <div className="flex justify-between">
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
                    onChange={onChangeStartDate}
                    disabledDate={disabledDate}
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
                    disabledDate={disableStarDate}
                    placeholder="e.g., 2024-01-01"
                    className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                    format="DD-MM-YYYY"
                  />
                </Form.Item>
              </div>
            </div>
            <Button
              htmlType="submit"
              className="bg-[#5143d9] h-[50px] text-[20px] font-bold text-white"
            >
              Create trip
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  );
};

export default TopicForm;
