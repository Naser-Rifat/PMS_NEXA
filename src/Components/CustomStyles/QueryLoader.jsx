import { Spin } from "antd";
import React from "react";

const QueryLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin tip="Loading">
        <div
          style={{
            padding: "50px",
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: "4px",
          }}
        />
      </Spin>
    </div>
  );
};

export default QueryLoader;
