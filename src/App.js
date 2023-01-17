import "./App.css";
import React from "react";
import MainLayout from "./Components/Layout/MainLayout";
import { useRoutes } from "react-router-dom";
import AddProduct from "./pages/addproducts";
import ProductList from "./pages/productslist";
import UpdateProduct from "./pages/updateproduct";
import { SuspenseLoader } from "./Components/CustomStyles/SuspenseLoader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
  return (
    <MainLayout>
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <SuspenseLoader>{allroutes}</SuspenseLoader>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </MainLayout>
  );
}

export default App;
