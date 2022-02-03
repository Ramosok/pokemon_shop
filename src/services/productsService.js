import api from "../api/config";

export class ProductsService {
    static instance = new ProductsService();

    getProducts() {
        return api.get('/products?page=1&limit=20');
    }

   /* getPokemonDetails(pokemonName) {
        return api.get(`/pokemon/${pokemonName}`);
    }*/
}

export default ProductsService.instance;