import { Button, Form, Input, InputNumber, TreeSelect } from "antd";
import interceptor from "../../utils/interceptor";
const { TextArea } = Input;
const AddProductForm = () => {
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

  const payLoad = {
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  };

  const onFinish = (values) => {
    console.log(values);
    interceptor.post("products", values).then((res) => console.log(res));
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
            treeData={[
              {
                title: "Light",
                value: "light",
              },
              {
                title: "Light2",
                value: "light2",
              },
              {
                title: "Light3",
                value: "light3",
              },
            ]}
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
