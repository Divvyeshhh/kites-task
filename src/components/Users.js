import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';
import Navbarr from './Navbarr'

export default function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://fakerapi.it/api/v1/users')
    .then(res => {
      console.log(res.data.data)
      setUsers(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div>
      <Navbarr />
      
      {users.map(u => {
        return(
          <Container className='d-flex'>
            <Card style={{ width: '200px', height: '200px', margin: '20px' }}>
              <Card.Img src={u.image} style={{ height:'200px', width: '200px' }} />
            </Card>
            <div style={{margin: '20px'}}>
              <h2>Username: {u.username}</h2>
              <h2>Firstname: {u.firstname}</h2>
              <h2>Lastname: {u.lastname}</h2>
              <h2>Email: {u.email}</h2>
            </div>
          </Container>
        )
      })}
    </div>
  )
}
