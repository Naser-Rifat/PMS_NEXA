import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import CustomModal from "../Components/CustomStyles/CustomModal";
import QueryLoader from "../Components/CustomStyles/QueryLoader";
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
  // const [open, setOpenModal] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  useEffect(() => {
    interceptor("products").then((res) => {
      //   if (res.data.length > 0) {
      //     setProducts((prev) =>
      //     ...prev,[
      //       res?.data.map((data, _i) => {
      //         return {
      //           key: data.id,
      //           category: data.category,
      //           description: data.description,
      //           title: data?.title,
      //           rating: data.rating,
      //           price: data.price,
      //         };
      //       })],
      //     );
      //   }
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <>
      {products?.length ? (
        <Table dataSource={products}>
          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Title" dataIndex="title" key="title" />

          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          {/* <Column title="Address" dataIndex="address" key="address" />
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
          /> */}
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <EditOutlined
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setModal1Open(true)}
                />
                {/* <DeleteOutlined
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setModal1Open(true)}
                /> */}
              </Space>
            )}
          />
        </Table>
      ) : (
        <QueryLoader />
      )}

      {modal1Open && (
        <CustomModal modal1Open={modal1Open} setModal1Open={setModal1Open} />
      )}
    </>
  );
};
export default ProductsList;
