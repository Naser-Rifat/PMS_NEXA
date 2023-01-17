import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, TreeSelect } from "antd";
import TextArea from "antd/es/input/TextArea";
import interceptor from "../../utils/interceptor";
import QueryLoader from "../CustomStyles/QueryLoader";
import { toast } from "react-toastify";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const UpdateProductForm = ({ updateProduct }) => {
  const [categories, setCategories] = useState([]);
  const [updateData, setUpdateData] = useState({});
  interceptor("products/categories").then((res) => setCategories(res.data));

  useEffect(() => {
    interceptor(`products/${updateProduct.id}/`).then((res) =>
      setUpdateData(res.data)
    );
  }, [updateProduct]);
  console.log(updateData);

  /* A hook that allows you to access the form instance. */

  const onFinish = (values) => {
    console.log(values);
    toast.promise(
      interceptor
        .patch(`products/${updateProduct.id}`, values)
        .then((res) => res.data),
      {
        pending: " product updating..",
        success: "product successfully updated!",
        error: "products update error",
      }
    );
  };
  const initialValues = {
    category: updateData?.category,
    title: updateData?.title,
    price: updateData?.price,
    description: updateData?.description,
    image: updateData?.image,
  };
  // Boolean(Object.entries(updateData).length) &&
  return (
    <>
      {categories.length ? (
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          ame="nest-messages"
          initialValues={initialValues}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["product", "category"]}
            label="Category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TreeSelect
              defaultValue={updateProduct.category}
              treeData={categories.map((category) => {
                return {
                  title: category,
                  value: category,
                };
              })}
            />
          </Form.Item>
          <Form.Item
            label="title"
            name={["product", "title"]}
            rules={[
              {
                type: "text",
                required: true,
              },
            ]}
          >
            <Input defaultValue={updateProduct.title} />
          </Form.Item>

          <Form.Item
            label="price"
            name={["product", "price"]}
            rules={[
              {
                type: "number",
                required: true,
              },
            ]}
          >
            <InputNumber defaultValue={updateProduct.price} type="number" />
          </Form.Item>
          <Form.Item
            name={["product", "description"]}
            label="description"
            rules={[
              {
                type: "text",
                required: true,
              },
            ]}
          >
            <TextArea defaultValue={updateProduct.description} rows={4} />
          </Form.Item>

          <Form.Item
            label="image url"
            name={["product", "image"]}
            rules={[
              {
                type: "url",
                required: true,
              },
            ]}
          >
            <Input type="url" defaultValue={updateProduct.image} />
          </Form.Item>
          <Form.Item label="Submit">
            <Button type="default" color="#0000FF" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <QueryLoader />
      )}
    </>
  );
};

export default UpdateProductForm;
