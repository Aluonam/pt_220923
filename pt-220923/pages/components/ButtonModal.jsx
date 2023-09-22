import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';


const ButtonModal = ({inputUserData, numeroContador, passwordData}) => {

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
      <Modal title="Contraseña y contador:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


        <div>{passwordData}</div>
        <div>{numeroContador}</div>
        <img src={`https://picsum.photos/id/${inputUserData}/200`}></img>

      </Modal>
    </>
  );
};
export default ButtonModal;