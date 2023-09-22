import React, {useState} from 'react'
import ButtonModal from './ButtonModal'

const InputContador = () => {


    const [inputUserData, setInputUserData] = useState(1)

    const [numeroContador, setNumeroContador] = useState(0)

    const [passwordData, setPasswordData] = useState("")

  return (
    <>

    <input type='password' onChange={(e)=>{setPasswordData(e.target.value)}} value={passwordData}></input>

    <input type='number' onChange={(e)=>{setInputUserData(e.target.value)}}></input>

    <button onClick={()=>{setNumeroContador(numeroContador + 1)}}> + </button>
    <button onClick={()=>{setNumeroContador(numeroContador - 1)}}> - </button>

    <ButtonModal    inputUserData={inputUserData} 
                    numeroContador={numeroContador}
                    passwordData={passwordData}>
        
    </ButtonModal>

    </>
  )
}

export default InputContador