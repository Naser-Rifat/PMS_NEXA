import { EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import UpdateProductForm from "../Components/Addproduct/UpdateProductForm";
import CustomModal from "../Components/CustomStyles/CustomModal";
import QueryLoader from "../Components/CustomStyles/QueryLoader";
import interceptor from "../utils/interceptor";
const { Column } = Table;

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const [modal1Open, setModal1Open] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});
  useEffect(() => {
    interceptor("products").then((res) => {
      setProducts(res?.data);
    });
  }, []);
  const handleUpdateProduct = (product) => {
    setModal1Open(true);
    setUpdateProduct(product);
  };
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

          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <EditOutlined
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleUpdateProduct(record)}
                />
              </Space>
            )}
          />
        </Table>
      ) : (
        <QueryLoader />
      )}

      {modal1Open && (
        <CustomModal modal1Open={modal1Open} setModal1Open={setModal1Open}>
          <UpdateProductForm updateProduct={updateProduct}></UpdateProductForm>
        </CustomModal>
      )}
    </>
  );
};
export default UpdateProduct;
