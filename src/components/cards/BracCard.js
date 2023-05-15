import { CardContent, Container } from '@mui/material'
import React from 'react'
import { CardsContainer, Image, Price, ProductCard, Title, Title1 } from '../../styles/card/card'


export default function BracCard() {
    const products = [
        {
          id: 1,
          imageSrc: '/assets/brac1.png',
          name: 'T-shirt quantité adulte',
          price: '50 TND',
          
        },
        {
          id: 2,
          imageSrc: '/assets/brac2.png',
          name: 'T-shirt quantité enfant',
          price: '30 TND',
          
        },
        {
          id: 3,
          imageSrc: '/assets/brac1.png',
          name: 'Pantalon pour homme',
          price: '80 TND',
       
        },
        {
          id: 4,
          imageSrc: '/assets/brac2.png',
          name: 'Pantalon pour homme',
          price: '80 TND',
         
        },
      ];
  return (
    <Container>
    <Title>Nos Braclets</Title>
    <CardsContainer style={{ border: 'none' }}>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard >
            <Image component="img" src={product.imageSrc} alt="Product image"  />
            <CardContent style={{ textAlign: 'center' }}>
              <Title1 >{product.name}</Title1>
              <Price>{product.price}</Price>
             
            </CardContent>
          </ProductCard>
        </div>
      ))}
    </CardsContainer>
  </Container>
  )
}
