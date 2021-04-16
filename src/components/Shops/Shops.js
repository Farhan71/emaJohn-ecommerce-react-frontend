import React, { useState } from 'react';
import "./Shops.css";
import fakeData from "../../fakeData";
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shops = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState (first10);

    const handleAddProduct = (product) => {
        console.log ("product added", product);
        const newCart = [...cart, product];
        setCart (newCart);
    }
    const[cart, setCart] = useState ([]);
    return (
        <div className ="shop-container">
            <div className="product-container">
            
                 {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                         product = {pd} 
                         ></Product> )
                 }
            
            </div>

        <div className="cart-container">
            <Cart cart= {cart}></Cart>
        </div>
            
        </div>
    );
};

export default Shops;