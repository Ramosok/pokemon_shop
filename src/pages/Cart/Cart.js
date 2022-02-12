import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {GET_CART_REQUEST} from "./actions";

export const Cart = () => {
    const dispatch = useDispatch();

    /*  useEffect(() => {
        dispatch(GET_CART_REQUEST);
      }, [dispatch]);*/

    return <div>Cart
        <button onClick={() => dispatch(GET_CART_REQUEST())}>Dispatch</button>
    </div>;
};
