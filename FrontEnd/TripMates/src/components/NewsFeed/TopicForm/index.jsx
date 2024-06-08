import { Button, DatePicker, Drawer, Form, Input } from "antd";
import dayjs from "dayjs";
// eslint-disable-next-line react/prop-types
const TopicForm = ({ onClose, open }) => {
  const { TextArea } = Input;

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

  return (
    <>
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
                  <Input className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300" />
                </label>
                {/* <label className="form-control max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Topic name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., Spring in Hanoi"
                    className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                  />
                </label> */}
              </Form.Item>
              <Form.Item name="description">
                <label className="form-control max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Description
                    </span>
                  </div>
                  <TextArea
                    showCount
                    maxLength={400}
                    style={{
                      height: 120,
                      width: 400,
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
                  <Input
                    placeholder="e.g., Asia"
                    className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                  />
                  {/* <input
                    type="text"
                    placeholder="e.g., Asia"
                    className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                  /> */}
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
                      className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
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
                      className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                      format="DD-MM-YYYY"
                    />
                  </Form.Item>
                </div>
              </div>

              <Button
                htmlType="submit"
                className="bg-[#5143d9] h-[50px] text-[20px] font-bold text-white "
              >
                Create trip
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default TopicForm;
