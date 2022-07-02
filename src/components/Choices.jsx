import React from 'react'

const Choices = (props) => {
  return (
    <div>
      <div className='zgjedhjet'>
        <div onClick={props.showFood} className='foodbtn'>
          <h1>Ushqime</h1>
        </div>
        <div onClick={props.showDrinks} className='drinks'>
          <h1>Pije</h1>
        </div>
      </div>
    </div>
  )
}

export default Choices
