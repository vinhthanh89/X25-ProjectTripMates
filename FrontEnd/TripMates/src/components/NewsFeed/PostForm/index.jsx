import { FaLongArrowAltLeft, FaUserCircle } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import ContentEditor from "./ContentEditor";
import { Button, DatePicker, Form, Input } from "antd";
import RenderSearchInput from "../../RenderSearchInput";

const PostForm = () => {
  return (
    <div className="gap-[3rem] pt-5 px-[3rem] bg-white rounded h-full overflow-y-scroll">
      <Form name="basic" className="pb-[20px]">
        <div className="text-black px-5">
          <h2 className="text-2xl font-semibold mb-4">Create your post</h2>
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
              <label className="form-control flex justify-center">
                <div className="label">
                  <span className="label-text font-bold text-black text-base">
                    Title
                  </span>
                </div>
                <Input
                  showCount
                  maxLength={80}
                  className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-full transition-colors duration-300"
                />
              </label>
            </Form.Item>
            <Form.Item className="hidden" label="location id" name="locationId">
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input location!",
                },
              ]}
              name="location"
              className="h-auto"
            >
              <label className="form-control grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <div className="label ">
                    <span className="label-text font-bold text-black text-base">
                      Where to? (countries)
                    </span>
                  </div>
                  <Input className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold transition-colors duration-300" />
                  <div>
                    <RenderSearchInput />
                  </div>
                </div>

                <div className="col-span-1">
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
                      placeholder="e.g., 2024-01-01"
                      className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extraboldw w-full"
                      format="DD-MM-YYYY"
                    />
                  </Form.Item>
                </div>

                {/* <div className="date-control col-span-3 flex justify-between">
                  <div>
                    <div className="label ">
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
                        placeholder="e.g., 2024-01-01"
                        className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold"
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                  </div>

                  <div>
                    <div className="label   ">
                      <span className="label-text font-bold text-black text-base">
                        End date
                      </span>
                    </div>
                    <Form.Item name="endDate">
                      <DatePicker
                        placeholder="e.g., 2024-01-01"
                        className="input border-2 border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-extrabold"
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                  </div>
                </div> */}
              </label>
            </Form.Item>

            <ContentEditor />
            <Button
              htmlType="submit"
              className="bg-[#5143d9] h-[50px] text-[20px] font-bold text-white"
            >
              Post now
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
