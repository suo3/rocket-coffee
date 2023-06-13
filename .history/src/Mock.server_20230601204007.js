import { Server } from "miragejs";

const ProductData = [
  {
    id: 1,
    name: "Mocha",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNAL0lZhqVM/200x100/"
  },
  {
    id: 2,
    name: "Latte",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNALolZhqVM/200x100/"
  },
  {
    id: 3,
    name: "Vinilla Latte",
    price: 3.5,
    imageUrl: "https://source.unsplash.com/tNALolZhqVM/200x100/"
  }
];

const server = new Server({
  routes() {
    this.namespace = "/api";
    this.get("/cart", () => ({ data: [ProductData[1]] }));
    this.get("/products", () => ({ data: [ProductData] }));
    this.get("/profile", () => ({
      name: "Sam Asare",
      memberSince: "Une 12th, 2023",
      recentOrders: [
        {
          orderId: 12,
          name: "Latte"
        }
      ]
    }));
  }
});
