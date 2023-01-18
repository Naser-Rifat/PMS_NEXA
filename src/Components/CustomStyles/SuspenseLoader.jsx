import { Spin } from "antd";
import { Suspense } from "react";

export const SuspenseLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div style={{ height: "100vh" }}>
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
      }
    >
      {children}
    </Suspense>
  );
};
