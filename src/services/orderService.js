import api from "../api/config";

export class orderService {
  static instance = new orderService();

  postOrder({ customerId, totalPrice, itemsInCart }) {
    const itemOrder = {
      customerId,
      totalPrice,
      itemsList: itemsInCart,
    };
    return api.post("order", itemOrder);
  }
  getOrder(orderItemsList) {
    return api.get("order", orderItemsList);
  }
}
export default orderService.instance;
