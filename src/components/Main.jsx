import React, { useState } from 'react'
import '../ulqin.css'
import Choices from './Choices'
import Item from './Item'
import allItems from './allItems'
import Drinks from './Drinks'
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
      <Choices showDrinks={showDrinks} showFood={showFood} />
      <div className={container === items ? 'foods' : 'beverages'}>{container}</div>
    </div>
  )
}

export default Main
