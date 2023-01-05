import React, { useState } from 'react'
import './App.css'


interface Product {
  id: number
  nameProduct: string
}

function App() {
  const [item, setItem] = useState<Array<Product>>([])
  const [modal, setModal] = useState<boolean>(false)
  const [newProduct, setNewProduct] = useState<string>(' ')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const productAdd = {
      id: item.length,
      nameProduct: newProduct,
    }
    if (productAdd.nameProduct.length > 0) {
      setItem(item.concat(productAdd))
    }
    setNewProduct('')
    setModal(!modal)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct(event.target.value)
    console.log(newProduct)
  }

  const handleDelete = (id: number) => {
    setItem((item) => item.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <div className="flex justify-center items-center min-w-fit min-h-screen  bg-slate-200">
        <div className="list-container   flex flex-col justify-between rounded-lg  w-[500px] h-[500px] bg-white border border-sky-300  ">
          <header>
            <h1 className=" flex justify-center font-barlow mt-3 py-2 text-3xl font-black  ">
              Supermarket list
            </h1>
          </header>
          <h4 className="text-xl font-semibold flex justify-center">
            {item.length} item(s)
          </h4>

          <div>
            <ul>
              {item.map((item) => (
                <div className="item flex justify-between items-center h-10  px-5 text-xl mb-1 bg-slate-50 shadow-lg">
                  <li key={item.id}>
                    <p className="font-barlow">{item.nameProduct}</p>{' '}
                  </li>
                  <button
                    className="font-barlow italic text-slate-500"
                    onClick={() => handleDelete(item.id)}
                  >
                    delete
                  </button>
                </div>
              ))}
            </ul>
          </div>

          <div className="p-5">
            <button
              className="mt-5  border rounded h-10 w-full bg-sky-500 text-white shadow-lg "
              onClick={toggleModal}
            >
              Add item
            </button>
          </div>
        </div>

        {modal && (
          <>
            <div
              className="modal-bg-container  fixed inset-0 bg-gray-100 bg-opacity-70"
              onClick={toggleModal}
            ></div>
            <div className="  bg-white  fixed mr-[300px] flex border rounded shadow-lg  justify-center flex-col h-[200px] w-[350px] ml-[300px] p-5">
              <h2 className="flex justify-center font-barlow font-black text-2xl">
                Add item
              </h2>
              <span>
                <i className="fa-solid fa-xmark" onClick={toggleModal}></i>
              </span>
              <form
                className="flex flex-col items-center "
                onSubmit={handleSubmit}
              >
                <input
                  className="px-5 h-10 mt-5 border-2 border-sky-500 w-[310px]"
                  type="text"
                  value={newProduct}
                  onChange={handleChange}
                  autoFocus
                ></input>
                <button
                  type="submit"
                  className=" border rounded w-40 h-10 bg-sky-500 text-white mt-5 "
                >
                  Add
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
