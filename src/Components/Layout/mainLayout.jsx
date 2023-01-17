import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SuspenseLoader } from "../CustomStyles/SuspenseLoader";
const { Header, Sider } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.replace("/", "");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        style={{
          paddingTop: 30,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <SuspenseLoader>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[`${path || "addproduct"}`]}
            onClick={(e) => navigate(e.key)}
            items={[
              {
                key: "addproduct",
                icon: <PlusCircleOutlined />,
                label: "Add Product",
              },
              {
                key: "productslist",
                icon: <UnorderedListOutlined />,
                label: "Products List",
              },
              {
                key: "updateproduct",
                icon: <UploadOutlined />,
                label: "Update Product",
              },
            ]}
          />
        </SuspenseLoader>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 4, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        {children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
