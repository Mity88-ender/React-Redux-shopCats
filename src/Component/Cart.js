import { superSelectBuyGoods } from "../store/cart/cart-selector";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/cart/cart-slice";

function Cart() {
  const dispatch = useDispatch();
  const goods = useSelector(superSelectBuyGoods);
  return (
    <>
      {goods.length ? (
        goods.map(good => {
          return (
            <ul key={good.id + "qwery"}>
              <li>
                name: {good.name} <button onClick={() => dispatch(deleteItem(good.id))}>X</button>
              </li>
              <li> xx: {good.subtitle}</li>
              <li>quantity: {good.quantity}</li>
            </ul>
          );
        })
      ) : (
        <div>Cart</div>
      )}
    </>
  );
}

export { Cart };
