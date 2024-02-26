import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"
import image4 from "./assets/4.jpg"
import image5 from "./assets/5.jpg"
export const products = [
  {
    id: "BM100",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men/Sweaters",
    discount: "50% off Full with Code ShopEarly",

    color: ["bg-red-200","bg-green-300","bg-black"],
    image: [image1, image2, image3, image4, image5],
    Sizes:["X-small","Small","Medium","Large","X-Large","XX-Large"],
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: "BM101",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    discount: "25% off Full with Code ShopEarly",
    color: ["bg-red-200","bg-green-300","bg-black"],
    image:["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", image2, image3, image4, image5],
    Sizes:["X-small","Small","Medium","Large","X-Large","XX-Large"],
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: "BM102",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    discount: "75% off Full with Code ShopEarly",
    color: ["bg-red-200","bg-green-300","bg-black"],
    image: ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", image1, image3, image4, image5],
    Sizes:["X-small","Small","Medium","Large","X-Large","XX-Large"],
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];
