import React, {useState} from 'react'
import ButtonModal from './ButtonModal'

const InputContador = () => {


    const [inputUserData, setInputUserData] = useState("")

    const [numeroContador, setNumeroContador] = useState(0)

  return (
    <>

    <input type='password'></input>

    <input type='number' onChange={(e)=>{setInputUserData(e.target.value)}}></input>

    <button onClick={()=>{setNumeroContador(numeroContador + 1)}}> + </button>
    <button onClick={()=>{setNumeroContador(numeroContador - 1)}}> - </button>

    <ButtonModal inputUserData={inputUserData} numeroContador={numeroContador}></ButtonModal>

    </>
  )
}

export default InputContador