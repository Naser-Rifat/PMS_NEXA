import Modal from "antd/es/modal/Modal";
import React from "react";

const CustomModal = ({ children, modal1Open, setModal1Open }) => {
  return (
    <>
      <Modal
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 900,
          maxHeight: "auto",
          bgcolor: "#fff",

          padding: 2,
          overflowY: "auto",
        }}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
      >
        <div>{children}</div>
      </Modal>
    </>
  );
};

export default CustomModal;
