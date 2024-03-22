import './details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Details() {

    const { id } = useParams()
    let [details, setDetails] = useState({})

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                setDetails(json)
            })
    }, [])

    const addToBasket = () => {
        localStorage.setItem('products', JSON.stringify(details))
    }

    return (
        <>
            <div className="details">
                <div className="details-left">
                    <img src={details.image} alt="" />
                </div>
                <div className="details-right">
                    <h2>{details.category}</h2>
                    <h3>{details.title}</h3>
                    <h4>{details.price} $</h4>
                    <p>{details.description}</p>
                    <button onClick={addToBasket}>add To basket</button>
                </div>
            </div>
        </>
    )
}

export default Details;