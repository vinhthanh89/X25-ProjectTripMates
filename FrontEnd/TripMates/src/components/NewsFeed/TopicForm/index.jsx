import { Button, DatePicker, Drawer, Form, Input } from "antd";
// eslint-disable-next-line react/prop-types
const TopicForm = ({ onClose, open }) => {
  const { TextArea } = Input;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Drawer onClose={onClose} open={open} width={500}>
        <Form className="pb-[20px]">
          <div className="text-black px-5">
            <h2 className="text-2xl font-semibold mb-4">Start a New Trip</h2>
            <div className="flex flex-col gap-4">
              <Form.Item>
                <label className="form-control max-w-xs">
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
                </label>
              </Form.Item>
              <Form.Item>
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
              <Form.Item>
                <label className="form-control max-w-xs">
                  <div className="label">
                    <span className="label-text font-bold text-black text-base">
                      Where to? (countries)
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., Asia"
                    className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-[25rem] transition-colors duration-300"
                  />
                </label>
              </Form.Item>
              <Form.Item>
                <div className="flex justify-between">
                  <label className="form-control max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        Start date
                      </span>
                    </div>
                    <DatePicker
                      placeholder="e.g., 2024-01-01"
                      onChange={onChange}
                      className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                    />
                  </label>
                  <label className="form-control max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold text-black text-base">
                        End date
                      </span>
                    </div>
                    <DatePicker
                      placeholder="e.g., 2024-01-01"
                      onChange={onChange}
                      className="input input-bordered border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold w-[12rem]"
                    />
                  </label>
                </div>
              </Form.Item>

              <Button className="bg-[#5143d9] h-[50px] text-[20px] font-bold text-white ">
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
