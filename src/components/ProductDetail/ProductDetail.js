import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find (pd => pd.key === productKey)
    // console.log (product);
    return (
        <div>
            <div className="detailHeader">
                <h1> Product key: {productKey}</h1>
                <h2>Your Product Details is Here.. </h2>
            </div>
            <br/><br/>
            <Product showAddToCart = {false} product ={product} ></Product>
            <div className="details">
                <h3>Category: {product.category}</h3>
                <h3>Rating: {product.star}</h3>
                <h3>Review: {product.starCount}</h3>
                {
                    product.features.map (feature => <li>{feature.description} :- {feature.value}</li> )
                }
                
            </div>
             

        </div>
    );
};

export default ProductDetail;