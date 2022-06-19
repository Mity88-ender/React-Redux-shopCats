import { Goods } from "./Goods";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { selectgoodsList } from "../store/goods/goods-selector";
function Card() {
  const dispatch = useDispatch();
  const card = useSelector(selectgoodsList);
  return (
    <div className='conteiner'>
      {card.map(item => (
        <Goods key={item.id} {...item} />
      ))}
    </div>
  );
}
export { Card };
