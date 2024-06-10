import { Button, DatePicker, Drawer, Form, Input, AutoComplete } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const TopicForm = ({ onClose, open }) => {
  const [places, setPlaces] = useState([]);

  const staticPlaces = [
    "China",
    "Chiangmai",
    "Japan",
    "India",
    "Thailand",
    "Vietnam",
  ];

  const inputStyle = {
    width: "25rem",
    height: "3rem",
    borderRadius: "var(--rounded-btn, 0.5rem)",
    fontSize: "1rem",
    fontWeight: "700",
    lineHeight: "1.25rem",
    borderWidth: "2px",
    backgroundColor: "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))",
    flexShrink: "1",
    appearance: "none",
  };

  const onFinish = (values) => {
    const formData = {
      title: values.title,
      description: values.description,
      location: values.location,
      startDate: dayjs(values.startDate, "MM-DD-YYYY").format("DD-MM-YYYY"),
      endDate: dayjs(values.endDate, "MM-DD-YYYY").format("DD-MM-YYYY"),
    };
    console.log(formData);
  };

  const fetchPlaces = async (inputValue) => {
    const filteredPlaces = staticPlaces.filter((place) =>
      place.toLowerCase().includes(inputValue.toLowerCase())
    );
    setPlaces(filteredPlaces);
  };

  return (
    <Drawer onClose={onClose} open={open} width={500}>
      <Form name="basic" className="pb-[20px]" onFinish={onFinish}>
        <div className="text-black px-5">
          <h2 className="text-2xl font-semibold mb-4">Start a New Trip</h2>
          <div className="flex flex-col gap-4">
            <Form.Item name="title">
              <label className="form-control max-w-xs">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Topic name
                  </span>
                </div>
                <Input className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300" />
              </label>
            </Form.Item>
            <Form.Item name="description">
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
            <Form.Item name="location">
              <label className="form-control max-w-xs">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Where to? (countries)
                  </span>
                </div>
                <AutoComplete
                  options={places.map((place) => ({ value: place }))}
                  onSearch={fetchPlaces}
                  placeholder="e.g., Asia"
                  style={inputStyle}
                />
              </label>
            </Form.Item>
            <div className="flex justify-between">
              <div className="form-control max-w-xs">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Start date
                  </span>
                </div>
                <Form.Item name="startDate">
                  <DatePicker
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
