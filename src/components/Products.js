import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbarr from './Navbarr';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(69000);
  
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
    setPrice(event.target.value)
  }

  return (
    <div>
      <Navbarr />
      <div style={{ margin: '0px 0px 20px 80px' }}>
      <Link to='/tax' >To filter based on tax</Link>
      </div>
      <Link to='/price' style={{ margin: '40px 0px 80px 80px' }}>To filter based on price</Link>
      {/* <div style={{ margin: '35px 0px 0px 80px' }}>
        <h1>Price limit: {price}</h1>
        <input type='range' onInput={handleInput} min='1000' max='2000000'/>
      </div> */}
      {/* .filter(product => {return product.price > parseInt(price, 10)}) */}

      {products.map(u => {
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
