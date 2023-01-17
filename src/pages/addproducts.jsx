import React from "react";
import AddProductForm from "../Components/Addproduct/AddProductForm";
import interceptor from "../utils/interceptor";

const AddProduct = () => {
  return (
    <div
      style={{
        overflowY: "scroll",
      }}
    >
      <h1
        style={{
          marginTop: 20,
          marginLeft: 180,
          padding: 10,
          fontSize: 22,
        }}
      >
        Add Product
      </h1>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
