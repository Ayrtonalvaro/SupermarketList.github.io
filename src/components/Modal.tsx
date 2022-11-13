import { useState } from 'react'
import { Item } from '../types'



interface FormProps {
  onNewItem: ( )=> {} 
}

const Modal = ({ onNewItem }: FormProps) => {


    const [inputValues, setInputValues] = useState({
      product: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onNewItem()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({
        ...inputValues,
        [e.target.product]: e.target.value,
      })
    }
  return (
    <div className="modal-container flex border rounded shadow-lg border-sky-500  justify-center flex-col h-[300px] w-[350px] ml-[300px] p-5">
      <h2 className="flex justify-center font-barlow font-black text-2xl">
        Add item
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="h-10 mt-5 border-2 border-sky-500"
          onChange={handleChange}
          value={inputValues.product}
          name='product'
          type="text"
          placeholder="product"
        ></input>
      </form>
      <div className="flex justify-between gap-3">
        <button className="mt-5 border rounded h-10 w-40 bg-slate-100  text-black">
          Close
        </button>
        <button className="mt-5 border rounded w-40 bg-sky-500 text-white">
          Add
        </button>
      </div>
    </div>
  )
}

export default Modal
