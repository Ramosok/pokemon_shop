import api from "../api/config";

export class cartService {
  static instance = new cartService();

  getCart() {
    return api.get("/cart");
  }
  addToCart(item) {
    return api.post("/cart/item", item);
  }
  patchToCart({ id, quantity }) {
    return api.patch("/cart/item", { id, quantity });
  }
  removeFromCart(id) {
    return api.delete(`/cart/item/${id}`);
  }
}
export default cartService.instance;
