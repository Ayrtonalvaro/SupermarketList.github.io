import React, { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'



interface Product {
  nameProduct: string
}

function App() {
  const [item, setItem] = useState<Array<Product>>([])
  const [modal, setModal] = useState<boolean>(false)
  const [newProduct, setNewProduct] = useState(" ")

  const toggleModal = () => {
    setModal(!modal)
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("agregar producto")
    const productAdd = {
      nameProduct: newProduct
    }
    console.log(productAdd)
    setItem(item.concat(productAdd))
    setNewProduct("")
    setModal(!modal)
    console.log(item)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct(event.target.value)
    console.log(newProduct)
  }

  

  return (
    <div className="App">
      <div className="flex justify-center items-center min-w-fit min-h-screen  bg-slate-200">
        <div className="list-container   flex flex-col gap-4  w-[500px] ">
          <header>
            <h1 className=" flex justify-center font-barlow mt-3 text-3xl font-black ">
              Supermarket list
            </h1>
          </header>
          <h4 className="text-xl font-semibold flex justify-center">
            {item.length} item(s)
          </h4>

          <List products={item} />
          <button
            className="mt-5 border rounded h-10 bg-sky-500 text-white"
            onClick={toggleModal}
          >
            Add item
          </button>
        </div>

        {modal && (
          <>
            <div className="modal-bg-container  fixed inset-0 bg-gray-100 bg-opacity-70"></div>
            <div className=" bg-white  fixed mr-[300px] flex border rounded shadow-lg  justify-center flex-col h-[200px] w-[350px] ml-[300px] p-5">
              <h2 className="flex justify-center font-barlow font-black text-2xl">
                Add item
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  className="h-10 mt-5 border-2 border-sky-500 w-[310px]"
                  type="text"
                  value={newProduct}
                  onChange={handleChange}
                ></input>
                <div className="flex justify-between gap-3">
                  <button
                    className="mt-5 border rounded h-10 w-40 bg-slate-100  text-black"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <button
                    className="mt-5 border rounded w-40 bg-sky-500 text-white"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
