import React from 'react'
import '../ulqin.css'
import Choices from './Choices'
import Item from './Item'
import allItems from './allItems'
const Main = () => {
  const items = allItems.map((item) => <Item key={item} image={item.img} price={item.price} title={item.title} desc={item.description} />)
  return (
    <div>
      <Choices />
      <div className='container'>
        <div className='foods'>{items}</div>
        <div className='beverages'>
          <div className='bevContent'>
            <div className='item'>
              <h1>Pije Të Ftohta</h1>
              <img src='images/cdrinks.jpg' alt='' />

              <h3>Cmimi: 280 MKD</h3>
            </div>
            <div className='item'>
              <h1>Pije Të Ngrohta</h1>
              <img src='images/caffe.jpg' alt='' />

              <h3>Cmimi: 280 MKD</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
