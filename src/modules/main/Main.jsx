import './main.css';
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Main() {
    
    let [products, setProducts] = useState([])
    let [counter, setCounter] = useState(6)

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products?limit=${counter}`)
        .then(res=>res.json())
        .then(json=>{
            setProducts(json)
        })
    }, [])

    const counterIncr = () => {
        let updatedCounter = counter + 3 
        setCounter(updatedCounter)
        fetch(`https://fakestoreapi.com/products?limit=${updatedCounter}`)
        .then(res=>res.json())
        .then(json=>{
            setProducts(json)
        })
    }

    return (
        <>
            <div className="main">
                <div className="main-top">
                    <input type="text" placeholder='Поиск'/>
                    <button>Найти</button>
                </div>
                <div className="main-wrapper">
                    { products && products.length > 0 ? products.map( (item, index) => {
                        return(
                            <div key={index} className="main-card">
                                <img src={item.image} alt="" />
                                <h3>{item.category}</h3>
                                <h4>{item.title}</h4>
                                <NavLink to={'/details/' + item.id}><h6>Подробнее</h6></NavLink>
                            </div>
                        )
                    }) : ''}
                </div>
                <button onClick={counterIncr}>Show More</button>
            </div>
        </>
    )
}

export default Main