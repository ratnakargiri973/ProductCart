import React, { useState , useEffect} from "react";
import './ProductCart.css'

function ProductCart({count}){

    const [total , setTotal] = useState(0);

    const [totalCount, setTotalCount] = useState(0);
    const productPrices = [100,200,300];
    useEffect(() => {
        // Calculate the total count and total amount whenever count changes
        const newTotalCount = count.reduce((acc, cur) => acc + cur, 0);
        const newTotal = count.reduce((acc, cur, index) => acc + cur * productPrices[index], 0);

        setTotalCount(newTotalCount);
        setTotal(newTotal);
    }, [count]);
    
        return(
            <>
            <div className="cart">
                <h1>Cart</h1>
              {  (totalCount === 0) ?  <p>No Product added to the cart</p> :
                 <div className="cartProducts">
                   {count.map((itemCount, index)=>(
                    itemCount > 0 && ( 
                        <div className="
                        productCount">
                    <span>Product {index + 1}   </span>
                    <span>{itemCount} * {productPrices[index]}</span>
                    </div>
                   ))

                   )}
                </div>}
                <div className="total">
                <span>Total:</span><span>{total} /-</span>
                </div>

            </div>
            </>
        )
    
}
export default ProductCart;