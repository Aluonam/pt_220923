import React from 'react'

const InputContador = () => {


    const [inputUserData, setInputUserData] = useState()

  return (
    <>
    <input type='number' onChange={()=>{setInputUserData()}}></input>
    <button> + </button>
    <button> - </button>
    </>
  )
}

export default InputContador