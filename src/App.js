import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import MainLayout from "./Components/Layout/mainLayout";
import { useRoutes } from "react-router-dom";
import AddProduct from "./pages/addproducts";
import ProductList from "./pages/productslist";
import UpdateProduct from "./pages/updateproduct";

function App() {
  const routes = [
    {
      path: "addproduct",
      element: <AddProduct />,
    },
    {
      path: "productslist",
      element: <ProductList />,
    },
    {
      path: "updateproduct",
      element: <UpdateProduct />,
    },
  ];

  const allroutes = useRoutes(routes);
  return <MainLayout>{allroutes}</MainLayout>;
}

export default App;
