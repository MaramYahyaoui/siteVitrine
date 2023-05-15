import { Container, Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../../styles/themes';
import { Title, CardsContainer, ProductCard, Image, Price, ColorItem, ColorList, Title1 } from '../../styles/card/card';

const products = [
  {
    id: 1,
    imageSrc: '/assets/1.png',
    name: 'T-shirt quantité adulte',
    price: '50 TND',
    colors: [Colors.primary, Colors.secondary, Colors.danger, Colors.inverse],
  },
  {
    id: 2,
    imageSrc: '/assets/2.png',
    name: 'T-shirt quantité enfant',
    price: '30 TND',
    colors: [Colors.primary, Colors.secondary,Colors.danger,],
  },
  {
    id: 3,
    imageSrc: '/assets/3.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
  {
    id: 4,
    imageSrc: '/assets/4.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
];

const ProductCardExample = () => {
  return (
    <Container>
      <Title>Produit Populaire</Title>
      <CardsContainer style={{ border: 'none' }}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard>
              <Image component="img" src={product.imageSrc} alt="Product image" />
              <CardContent style={{ textAlign: 'center' }}>
                <Title1>{product.name}</Title1>
                <Price>{product.price}</Price>
                <ColorList>
                  {product.colors.slice(0, 2).map((color) => (
                    <ColorItem key={color} color={color} />
                  ))}
                  {product.colors.length > 2 && (
                    <ColorItem key="rest" color={Colors.secondary} style={{ background: 'white', color: 'black' }}>
                      +{product.colors.length - 2}
                    </ColorItem>
                  )}
                </ColorList>
              </CardContent>
            </ProductCard>
          </div>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default ProductCardExample;
