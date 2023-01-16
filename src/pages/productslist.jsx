import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import interceptor from "../utils/interceptor";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    interceptor("products").then((res) => {
      if (res.data.length > 0) {
        setProducts((prev) => [
          ...prev,
          res?.data.map((data, _i) => {
            return {
              key: data.id,
              category: data.category,
              description: data.description,
              title: data?.title,
              rating: data.rating,
              price: data.price,
            };
          }),
        ]);
      }
    });
  }, []);
  console.log(products);
  return (
    <>
      <Table dataSource={products}>
        <ColumnGroup title="Name">
          <Column title="category" dataIndex="category" key="category" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          //   render={(tags) => (
          //     <>
          //       {tags.map((tag) => (
          //         <Tag color="blue" key={tag}>
          //           {tag}
          //         </Tag>
          //       ))}
          //     </>
          //   )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
export default ProductsList;
