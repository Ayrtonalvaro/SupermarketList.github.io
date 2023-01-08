import React, { useEffect, useState } from 'react'
import './App.css'
import AppContext from './context/AppContext'

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

  
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const handleModeSwitch = () => {
    setDarkMode(!darkMode)
    const root = window.document.documentElement;
    root.classList.toggle('dark')
  }

  return (
    <AppContext.Provider value={''}>
      <div className={`App `}>
        <div className="flex justify-center items-center min-w-fit min-h-screen  bg-slate-200 dark:bg-gray-900 ">
          <div className="list-container   flex flex-col justify-between rounded-lg  w-[500px] h-[500px] dark:border-blue-600 bg-white border border-sky-300 dark:bg-blue-900 dark:border-slate-500">
            <header className="flex justify-around items-center">
              <h1 className=" flex justify-center font-barlow mt-3 py-2 text-3xl font-black dark:text-slate-300  ">
                Lista supermercado
              </h1>
              {darkMode === false ? (
                <button onClick={handleModeSwitch} className="dark:text-white ">
                  <i className="fa-solid fa-moon"></i>
                </button>
              ) : (
                <button onClick={handleModeSwitch} className="dark:text-white">
                  <i className="fa-solid fa-sun"></i>
                </button>
              )}
            </header>
            <h4 className="text-xl font-semibold flex justify-center dark:text-slate-300">
              {item.length} producto(s)
            </h4>

            <div>
              <ul className='px-5'>
                {item.map((item) => (
                  <div className="item flex justify-between items-center h-10  px-5 text-xl mb-1 dark:bg-blue-800 bg-slate-50 shadow-lg">
                    <li key={item.id}>
                      <p className="font-barlow dark:text-white">
                        {item.nameProduct}
                      </p>{' '}
                    </li>
                    <button
                      className="font-barlow italic text-slate-500 "
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </ul>
            </div>

            <div className="p-5 ">
              <button
                className="mt-5  border rounded h-10 w-full bg-sky-500 text-white shadow-lg dark:text-slate-300 dark:bg-blue-900 dark:shadow-lg dark:border-blue-600"
                onClick={toggleModal}
              >
                Agregar producto
              </button>
            </div>
          </div>

          {modal && (
            <>
              <div
                className="modal-bg-container  fixed inset-0 bg-gray-100 bg-opacity-70 "
                onClick={toggleModal}
              ></div>
              <div className="  bg-white dark:bg-blue-900 dark:shadow-lg fixed mr-[300px] flex border rounded shadow-lg  justify-center flex-col h-[200px] w-[350px] ml-[300px] p-5">
                <div className="flex justify-between items-center">
                  <h2 className=" font-barlow font-black text-2xl dark:text-white">
                    Ingrese su producto
                  </h2>
                  <span>
                    <i
                      className="fa-solid fa-xmark text-xl text-sky-600 dark:text-white"
                      onClick={toggleModal}
                    ></i>
                  </span>
                </div>

                <form
                  className="flex flex-col items-center "
                  onSubmit={handleSubmit}
                >
                  <input
                    className="px-5 h-10 mt-5 text-md border-2 dark:bg-slate-900  dark:text-white dark:border-blue-600 border-sky-500 rounded-md  w-[310px] outline-none"
                    type="text"
                    placeholder="producto..."
                    value={newProduct}
                    onChange={handleChange}
                    autoFocus
                  ></input>
                  <button
                    type="submit"
                    className=" border rounded w-40 h-10 bg-sky-500 dark:bg-blue-900 dark:border-blue-600 text-white mt-5 "
                  >
                    Agregar producto
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
