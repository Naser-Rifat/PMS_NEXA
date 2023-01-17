import { EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { useEffect, useState } from "react";

import QueryLoader from "../Components/CustomStyles/QueryLoader";
import interceptor from "../utils/interceptor";
const { Column } = Table;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    interceptor("products").then((res) => {
      setProducts(res?.data);
    });
  }, []);
  const columns = [
    // {
    //   title: "Image",
    //   key: "image",
    //   dataIndex: "image",
    //   width: 10,

    //   render: (_, record) => {
    //     console.log(record);
    //     return (
    //       <div
    //         style={{
    //           width: 5,
    //           height: 5,
    //           // borderRadius: "50%",
    //         }}
    //       >
    //         <img src={record?.image} alt="product" />
    //       </div>
    //     );
    //   },
    // },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Title",
      dataIndex: "title",
      width: 300,

      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 400,
      key: "description",
    },
    {
      title: "Ratings",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => rating.rate,
    },
  ];
  return (
    <>
      {products?.length ? (
        <Table dataSource={products} columns={columns}>
          {/* <Column title="Category" dataIndex="category" key="category" />
          <Column title="Title" dataIndex="title" key="title" />

          <Column
            title="Description"
            dataIndex="description"
            key="description"
          /> */}
        </Table>
      ) : (
        <QueryLoader />
      )}
    </>
  );
};
export default ProductsList;
