import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';


const ButtonModal = ({inputUserData, numeroContador}) => {

    useEffect(() => {
      llamadaAPI()
    }, [])
    

    const llamadaAPI = async () =>{
        try{
            const id = inputUserData
            const llamada = await fetch(`https://picsum.photos/id/${id}/200`);
            const data = await llamada.json();
            console.log(data)
        }catch(error){"error detected", error}
    }

    


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
        
        <div>{numeroContador}</div>

      </Modal>
    </>
  );
};
export default ButtonModal;