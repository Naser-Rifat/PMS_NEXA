import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, TreeSelect } from "antd";
import TextArea from "antd/es/input/TextArea";
import interceptor from "../../utils/interceptor";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

const UpdateProductForm = ({ updateProduct }) => {
  const [categories, setCategories] = useState([]);
  interceptor("products/categories").then((res) => setCategories(res.data));
  const [form] = Form.useForm();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (updateProduct.id) {
        var res = await interceptor(`users/${updateProduct.id}`);

        const entity = await res.data;
        setData(entity);
      }
    };

    fetchData();

    form.setFieldsValue({
      title: data.title,
    });
  }, [updateProduct.id, form, data.title]);
  form.setFieldsValue({
    title: data.title,
    price: data.price,
    description: data.description,
    image: data.image,
  });
  // const handleFinish = (values) => {
  //   console.log("Finish:", values);
  //   onSubmit(values);
  // };
  const onFinish = (values) => {
    console.log(values);
  };
  const initialValues = {
    category: "updateProduct?.category",
    title: "updateProduct?.title",
    price: "updateProduct?.price",
    description: "updateProduct?.description",
    image: updateProduct?.image,
  };
  return (
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
      //validateMessages={validateMessages}
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
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Button
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProductForm;
