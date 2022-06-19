import cat from "../img/киска.png";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart/cart-slice";
function Goods(props) {
  const dispatch = useDispatch();
  const refActive = useRef(null);
  const { id, name, title, subtitle, quantity, description, body, weight, unit, colorWeight } = props;

  function handleShowItem() {
    const elemActive = refActive.current;
    if (elemActive) {
      dispatch(addItem(id));
      if (!elemActive.classList.contains("active-x")) {
        elemActive.classList.add("active-x");
      } else {
        elemActive.classList.remove("active-x");
      }
    }
  }
  return (
    <div onClick={handleShowItem}>
      <div className='border'></div>
      <div ref={refActive} className='card activer '>
        <div>
          <p className='namespace title-name'>{title}</p>
          <p className='namespace'>{name}</p>
          <p className='namespace nameinside'>{subtitle}</p>
          <p className='namespace desc'>
            <span>{quantity} порций</span>
            <br />
            <span>{description}</span>
          </p>
        </div>
        <img className='cat' src={cat} alt='' />
        <div className='weight' style={{ background: colorWeight }}>
          <div className='styleweight'>
            <span>{weight}</span>
            <br />
            <span>{unit}</span>
          </div>
        </div>
      </div>
      <p className='button-cat'>
        {body}, <span style={{ color: "#1698D9" }}>купи.</span>
      </p>
    </div>
  );
}

export { Goods };
