import React, { useState } from 'react'
import '../ulqin.css'
import Item from './Item'
import allItems from './allItems'
import Drinks from './Drinks'
import Choices from './Choices'
const Main = () => {
  const items = allItems.map((item) => <Item key={item} image={item.img} price={item.price} title={item.title} desc={item.description} />)
  const [container, setContainer] = useState(items)
  const showDrinks = () => {
    setContainer(<Drinks />)
  }
  const showFood = () => {
    setContainer(items)
  }
  return (
    <div className='container'>
      <div>
        <div className='zgjedhjet'>
          <div onClick={showFood} className='foodbtn'>
            <h1>Food</h1>
          </div>
          <div onClick={showDrinks} className='drinks'>
            <h1>Drinks</h1>
          </div>
        </div>
        <Choices />
      </div>
      <div className={container === items ? 'foods' : 'beverages'}>{container}</div>
    </div>
  )
}

export default Main
