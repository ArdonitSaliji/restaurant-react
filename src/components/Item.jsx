import React from 'react'

const Item = (props) => {
  return (
    <div>
      <div className='item'>
        <h1>{props.title}</h1>
        <div className='itemImg'>
          <img src={process.env.PUBLIC_URL + '/' + props.image} alt='' />
        </div>

        <h3>{props.price}</h3>
        <hr />
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Item
