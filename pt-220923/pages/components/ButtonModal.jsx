import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';


const ButtonModal = ({inputUserData, numeroContador, passwordData}) => {


    const [colorText, setColorText] = useState("green")

    useEffect(() => {
        if (numeroContador < 0) {
            setColorText("red")
        } else if (numeroContador>10){
            setColorText("green")
        } else {
            setColorText("black")
        }
    }, [numeroContador])
    

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


        <div style={{color:colorText}}>{passwordData}</div>
        <div>{numeroContador}</div>
        <img src={`https://picsum.photos/id/${inputUserData}/200`}></img>

      </Modal>
    </>
  );
};
export default ButtonModal;