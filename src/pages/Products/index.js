import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_POKEMON_REQUEST} from "./actions";
import {Loader} from "../../commonComponents/Loader";
import {ProductsCard} from "./ProductsCard";

export const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_POKEMON_REQUEST())
    }, [])

    const {pokemonsList} = useSelector(state => state.pokemonPage)

    return (
        <div>
            {
                pokemonsList ?
                    pokemonsList.map(({id, name, image, price}) =>
                        <ProductsCard
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            price={price}
                        />) : <Loader/>
            }
        </div>
    );
};

