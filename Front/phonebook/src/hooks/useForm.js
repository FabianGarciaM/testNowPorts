import { useState } from 'react'

export const useForm = (initialState = null) => {
  const [value, setValue] = useState(initialState);

  const handleinputChanged = ({target}) =>{
      setValue({...value, [target.name]: target.value })
  }

  const handleReset = () =>{
    setValue(initialState);
  }

  return[value, handleinputChanged, handleReset];

}
