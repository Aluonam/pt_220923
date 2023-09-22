import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ButtonModal = () => {

    useState



  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <Button type="primary" onClick={showModal}>
       Botón Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>

      </Modal>
    </>
  );
};
export default ButtonModal;