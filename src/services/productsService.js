import api from "../api/config";

export class ProductsService {
  static instance = new ProductsService();

  getProducts(pageNumber) {
    return api.get(`/products?page=${pageNumber}`);
  }

  getProductDetails(id) {
    return api.get(`/products/${id}`);
  }
}
export default ProductsService.instance;
