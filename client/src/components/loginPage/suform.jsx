import React from "react";
import { Form, Input, Space } from "antd";

export function Sform(props) {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 90,
      },
      sm: {
        span: 90,
      },
    },
  };

  return (
    <Form
      name="login"
      form={props.form}
      onFinish={props.onFinish}
      style={{ zIndex: 0, position: "relative" }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.form.submit();
        }
      }}
    >
      <Space
        direction="vertical"
        size={0}
        style={{
          display: "flex",
        }}
      >
        <Form.Item name="fullname">
          <Input placeholder="Full name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder=" Confirm Password"/>
        </Form.Item>
      </Space>
    </Form>
  );
}
