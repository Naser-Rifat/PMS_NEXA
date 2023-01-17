import { Table } from "antd";
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
        </Table>
      ) : (
        <QueryLoader />
      )}
    </>
  );
};
export default ProductsList;
