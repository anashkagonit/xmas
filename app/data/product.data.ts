import { IProduct } from "@/types/product.interface";

export const products: IProduct[] = [
  {
    id:1,
    description: 'Description By product number 1',
    name: 'Midnight Mint Mocha Frappuchino',
    images: [
      '/images/products/p1_1.png'
    ],
    price: 9,
    reviews: []
  },
  {
    id:2,
    description: 'Whole Milk, 3 Frappuccino® Chips 3 pumps Frappuccino Roast',
    name: 'Mocha Cookie Crumble Frappuccino',
    images: [
      '/images/products/p2_1.png'
    ],
    price: 5,
    reviews: []
  },
  {
    id:3,
    description: 'Sugar Cookie Almondmilk Frappuccino® Blended Beverage 370 calories',
    name: 'Sugar Cookie Almondmilk',
    images: [
      '/images/products/p3_1.png',
    ],
    price: 8,
    reviews: []
  },
  {
    id:4,
    description: 'Starbucks® Cold Brew Coffee with Milk 35 calories',
    name: 'Cold Brew Coffee Frappuccino Almondmilk',
    images: [
      '/images/products/p4_1.png',
    ],
    price: 6,
    reviews: []
  },


]