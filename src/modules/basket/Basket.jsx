import { useState } from 'react';
import './basket.css';

function Basket() {

    let productsList = localStorage.getItem('products')
    let productsParse = JSON.parse(productsList)
    let [btnActive, setBtnActive] = useState(false)

    const closeModal = () => {
        setBtnActive(!btnActive)
    }

    return (
        <>
            <div className="basket">
                <div className={ btnActive ? 'basket-wrapper active' : 'basket-wrapper' }>
                    <div className="basket-item">
                        <img src={productsParse.image} alt="" />
                        <div className="basket-content">
                            <h3>{productsParse.title}</h3>
                        </div>
                        <h4>{productsParse.price} $</h4>
                        <button onClick={closeModal} className='close'>x</button>
                    </div>
                </div>
                <div className="basket-total">
                    <div className="basket-total__left">
                        <h3>
                            Итого: <span>{ !btnActive ? productsParse.price : '0'} $</span>
                        </h3>
                        <h4>
                            До бесплатной доставки <span>100$</span>
                        </h4>
                    </div>
                    <button>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    )
}

export default Basket