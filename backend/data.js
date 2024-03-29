import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Sardar",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike fit Short",
      category: "Shirt",
      image: "/images/p1.jpg",
      price: 120,
      countInStack: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "addidas fit short",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStack: 20,
      brand: "addidas",
      rating: 4,
      numReviews: 8,
      description: "high quality product",
    },
    {
      name: "Lacosto free Short",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 120,
      countInStack: 1,
      brand: "Lacosto",
      rating: 3.5,
      numReviews: 12,
      description: "high quality product",
    },
    {
      name: "Nike Slim pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 80,
      countInStack: 15,
      brand: "Nike",
      rating: 4.8,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "puma Slim pant",
      category: "pant",
      image: "/images/p5.jpg",
      price: 130,
      countInStack: 5,
      brand: "puma",
      rating: 4.3,
      numReviews: 29,
      description: "high quality product",
    },
    {
      name: "adidas Slim pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 120,
      countInStack: 12,
      brand: "adidas",
      rating: 4.6,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
