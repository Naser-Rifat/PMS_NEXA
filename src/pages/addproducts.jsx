import React from "react";
import AddProductForm from "../Components/Addproduct/AddProductForm";
import interceptor from "../utils/interceptor";

const AddProduct = () => {
  const handleApi = () => {
    interceptor("products/21").then((res) => console.log(res.data));
    //   .then((json) => console.log(json));
  };
  return (
    <div
      style={{
        overflowY: "scroll",
      }}
    >
      <button onClick={handleApi}>add</button>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
