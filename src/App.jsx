import React from 'react';
import { useState } from 'react'

function App() {
  const [cart,setCart]=useState([])
  const productarr=[
    {name:"Pen",price:20,stock:"available",image:""},
    {name:"Book",price:25,stock:"available",image:""},
    {name:"Tape",price:5,stock:"available",image:""},
    {name:"Geometry Box",price:45,stock:"available",image:""},
    ]
    const addToCart=(product)=>{
        setCart(prev=>[...prev,productarr])
    }
  const disp=productarr.map(prod=>(
      <div key={prod.name}>
        <h1>{prod.name}</h1>
        <p>{prod.price}</p>
        <p>{prod.stock}</p>
        <button onClick={addToCart.bind(null,prod)}>Add to cart</button>
      </div>
    ))
    const dispCart=cart.map(cartItem=>(
        <div key={key.name} style={{display:"flex",justifyContent:"space-between"}}>
        <p><b>
          
        {prod.name}
        </b>
        </p>
        <p>{prod.price}</p>
        <p>{prod.stock}</p>
          
        </div>
      ))
      console.log(cart)
  return (
    <div>
      <h1>Cart</h1>
      {dispCart}
      {disp}
    </div>
  )
}

export default App
