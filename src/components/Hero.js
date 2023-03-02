import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Hero() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '33vh' }}>
        <Card style={{ padding: '20px', margin: '0px 20px 0px 0px', width: '18rem'}}>
            <Card.Text className='text-center'>To view products</Card.Text>
            <Button variant='dark' className='mb-3' href="/products">Products</Button>
        </Card>
        <Card style={{ padding: '20px', width: '18rem' }}>
            <Card.Text className='text-center'>To view users</Card.Text>
            <Button variant='dark' className='mb-3' href="/users">Users</Button>
        </Card>
    </div>
  )
}
