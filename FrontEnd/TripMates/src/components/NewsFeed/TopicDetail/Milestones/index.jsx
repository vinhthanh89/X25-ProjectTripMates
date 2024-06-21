import { Table } from "antd";

// eslint-disable-next-line react/prop-types
const Milestone = ({convertedStartDate, continent, country}) => {
  // Testing
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      width: 200,
    },
    {
      title: "Blog Title",
      dataIndex: "blog",
      width: 400,
    },
    {
      title: "Location",
      dataIndex: "location",
    },
  ];
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      key: i,
      date: <p className="font-bold">{convertedStartDate}</p>,
      blog: "A beautiful day in Japan",
      location: (
        <p>
          {continent} &gt;&gt; {country}
        </p>
      ),
    });
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 20,
      }}
      scroll={{
        y: 240,
      }}
    />
  );
}

export default Milestone