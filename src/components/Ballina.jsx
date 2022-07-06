import React from 'react'
import '../ulqin.css'
const Ballina = () => {
  return (
    <div className='center'>
      <h1 className='ballH'>Mirsë se erdhët në Veranda Ulqin</h1>
      <div className='images'>
        <img src={process.env.PUBLIC_URL + '/images/coktel.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/enjoy.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/v-ushqim.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/cakes.jpg'} alt='' />
      </div>
    </div>
  )
}

export default Ballina
