import { Button, Form, Input, InputNumber, TreeSelect } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import interceptor from "../../utils/interceptor";
const { TextArea } = Input;
const validateMessages = {
  required: "${label} is required!",
  types: {
    url: "${label} is not a valid image!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  interceptor("products/categories").then((res) => setCategories(res.data));
  const onFinish = (values) => {
    console.log(values);
    toast.promise(
      interceptor.post("products", values).then((res) => res.data),
      {
        pending: " products submitting..",
        success: "products successfully added!",
        error: "products adding error",
      }
    );
  };
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        ame="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["product", "Category"]}
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TreeSelect
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
          <Input />
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
          <InputNumber type="number" />
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
          <TextArea rows={4} />
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
          <Input type="url" />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <AddProductForm />;
