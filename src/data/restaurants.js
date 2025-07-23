export const restaurantsData = [
  {
    id: '1',
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: { lat: 40.7128, lng: -74.0060, address: '123 Little Italy St, New York, NY' },
    description: 'Authentic Italian cuisine with fresh ingredients and traditional recipes.',
    menu: [
      { id: 1, name: 'Margherita Pizza', price: 14.99, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 2, name: 'Spaghetti Carbonara', price: 16.99, image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 3, name: 'Tiramisu', price: 7.99, image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: '2',
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    rating: 4.3,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: { lat: 40.7589, lng: -73.9851, address: '456 Chinatown Ave, New York, NY' },
    description: 'Traditional Chinese dishes with modern presentation and authentic flavors.',
    menu: [
      { id: 1, name: 'Sweet & Sour Pork', price: 13.99, image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 2, name: 'Kung Pao Chicken', price: 12.99, image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 3, name: 'Fried Rice', price: 9.99, image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: '3',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '15-25 min',
    deliveryFee: 2.49,
    image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: { lat: 40.7505, lng: -73.9934, address: '789 Mexican Plaza, New York, NY' },
    description: 'Fresh Mexican street food with bold flavors and authentic spices.',
    menu: [
      { id: 1, name: 'Fish Tacos', price: 11.99, image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 2, name: 'Burrito Bowl', price: 10.99, image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 3, name: 'Guacamole & Chips', price: 6.99, image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: '4',
    name: 'Burger Haven',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: { lat: 40.7282, lng: -73.7949, address: '321 Burger St, New York, NY' },
    description: 'Gourmet burgers made with premium ingredients and served fresh.',
    menu: [
      { id: 1, name: 'Classic Cheeseburger', price: 12.99, image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 2, name: 'BBQ Bacon Burger', price: 15.99, image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 3, name: 'Loaded Fries', price: 8.99, image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    id: '5',
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: { lat: 40.7614, lng: -73.9776, address: '654 Sushi Lane, New York, NY' },
    description: 'Fresh sushi and sashimi prepared by experienced sushi chefs.',
    menu: [
      { id: 1, name: 'Salmon Roll', price: 8.99, image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 2, name: 'Dragon Roll', price: 16.99, image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { id: 3, name: 'Miso Soup', price: 4.99, image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  }
];

// Generate more restaurants for infinite scroll
export const generateMoreRestaurants = (startId = 6, count = 10) => {
  const cuisines = ['Italian', 'Chinese', 'Mexican', 'American', 'Japanese', 'Indian', 'Thai', 'French'];
  const names = ['Delicious', 'Golden', 'Royal', 'Premium', 'Fresh', 'Authentic', 'Spicy', 'Classic'];
  const types = ['Kitchen', 'Bistro', 'Palace', 'Corner', 'House', 'Express', 'Grill', 'Garden'];
  
  const images = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=500'
  ];

  return Array.from({ length: count }, (_, index) => {
    const id = (startId + index).toString();
    const cuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    const name = `${names[Math.floor(Math.random() * names.length)]} ${types[Math.floor(Math.random() * types.length)]}`;
    
    return {
      id,
      name,
      cuisine,
      rating: (3.5 + Math.random() * 1.5).toFixed(1),
      deliveryTime: `${15 + Math.floor(Math.random() * 25)}-${25 + Math.floor(Math.random() * 25)} min`,
      deliveryFee: (1.99 + Math.random() * 2).toFixed(2),
      image: images[Math.floor(Math.random() * images.length)],
      location: { 
        lat: 40.7 + (Math.random() - 0.5) * 0.1, 
        lng: -74 + (Math.random() - 0.5) * 0.1,
        address: `${Math.floor(Math.random() * 999) + 1} ${cuisine} St, New York, NY`
      },
      description: `Delicious ${cuisine.toLowerCase()} cuisine with fresh ingredients and authentic flavors.`,
      menu: [
        { id: 1, name: `Special ${cuisine} Dish`, price: (8 + Math.random() * 12).toFixed(2) },
        { id: 2, name: `Traditional ${cuisine} Meal`, price: (10 + Math.random() * 15).toFixed(2) },
        { id: 3, name: `${cuisine} Appetizer`, price: (4 + Math.random() * 8).toFixed(2) }
      ]
    };
  });
};