import React, { useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([
    { name: 'Lemon', title: 'Penthero leo', price: 140, desc: 'Meat' },
    { name: 'Gorilla', title: 'Gorilla beringei', price: 205, desc: 'Plants, insects' },
    { name: 'Zebra', title: 'Equus quagga', price: 322, desc: 'Plants' },
  ])
  return (
    <div className='px-[5%] py-[3%]'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Animals</h1>
      </div>
      <div className='flex justify-between pt-10'>
        {
          products.map((item, i) => {
            return <div key={i} className='w-[25%] px-3 py-6 border'>
              <h2 className='text-2xl font-medium'>{item.name}</h2>
              <h2 className='text-xl font-medium py-1'>{item.title}</h2>
              <h2 className='text-xl font-medium py-1'>{item.price}kg</h2>
              <p className='py-1'>{item.desc}</p>
              <button className='border px-2'>More info</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App