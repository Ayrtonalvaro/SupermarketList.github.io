import React from 'react'

interface Props {
  products: Array<{
    nameProduct: string
  }>
}

const List = ({ products }: Props) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <div className="item flex justify-between  p-3 text-xl mb-1 bg-slate-50 shadow-lg">
            <li className="" key={products.length}>
              <p className="font-barlow">{product.nameProduct}</p>{' '}
            </li>
            <button className="font-barlow italic text-slate-500">
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default List
