// src/Menu.js
import   { useEffect } from 'react';
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/react';

const menuItems = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    description: 'Classic Italian pasta with meat sauce.',
    price: '$12.99',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Traditional pizza with tomato, mozzarella, and basil.',
    price: '$10.99',
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, croutons, and Caesar dressing.',
    price: '$8.99',
  },
];

function Menu() {
    useEffect(() => {
        console.log('Menu component rendered');
      }, []);
  return (
    <div>
      <h2>Our Menu</h2>
      {menuItems.map((item) => (
        <CCard key={item.id} className="mb-3">
          <CCardHeader>
            <CCardTitle>{item.name}</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CCardText>{item.description}</CCardText>
            <CCardText className="font-weight-bold">{item.price}</CCardText>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
}

export default Menu;
