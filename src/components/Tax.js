import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbarr from './Navbarr';
import { Container } from 'react-bootstrap';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [taxes, setTaxes] = useState(0);
  
  useEffect(() => {
    axios
    .get('https://fakerapi.it/api/v1/products')
    .then(res => {
      console.log(res.data.data)
      setProducts(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  function handleInput(event){
    setTaxes(event.target.value)
  }

  return (
    <div>
      <Navbarr />
      <div style={{ margin: '35px 0px 0px 80px' }}>
        <h1>Tax limit: {taxes}</h1>
        <input type='range' onInput={handleInput} min='0' max='100'/>
      </div>
      

      {products.filter(product => {return product.taxes > parseInt(taxes, 10)}).map(u => {
        return(
          <Container className='d-flex'>
            
            <img src={u.image} style={{ height:'200px', width: '200px', margin: '25px 0px 0px 0px', borderRadius: '5px' }} />
            
            <div style={{margin: '20px'}}>
              <h3>Name: {u.name}</h3>
              <h4>Product Description: {u.description}</h4>
              <h4>Net price: ${u.net_price}</h4>
              <h4>Tax: {u.taxes}</h4>
              <h4>Price: {u.price}</h4>
            </div>
          </Container>
        )
      })}
    </div>
  )
}
