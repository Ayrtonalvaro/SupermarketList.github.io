import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Form from './components/Form'
import List from './components/List'

const INITIAL_STATE = [
  {
    nameProduct: 'Milk',
  },
  {
    nameProduct: 'Coca Cola',
  },
]

interface Product {
  nameProduct: string
}

function App() {
  const [item, setItem] = useState<Array<Product>>([]);
  const [modal, setModal] = useState <boolean>(false);
  const [amountProducts, setAmountProducts] = useState<number>(0);

  

  const toggleModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    setItem(INITIAL_STATE), []
  })

  const [viewModal, setViewModal] = useState<boolean>(false)

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
            {' '}
            0 item(s)
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
              <form>
                <input
                  className="h-10 mt-5 border-2 border-sky-500 w-[310px]"
                  name="product"
                  type="text"
                  placeholder="product"
                ></input>
              </form>
              <div className="flex justify-between gap-3">
                <button
                  className="mt-5 border rounded h-10 w-40 bg-slate-100  text-black"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button className="mt-5 border rounded w-40 bg-sky-500 text-white">
                  Add
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
