import React from "react";
import './Product.css'

function Product({count,Increment, Decrement}){
    return(
        <>
        <div className="Product">
             <h1>Products</h1>
             <div className="item">
                <span>Product 1</span> 
                <span> 100</span> 
                <div className="Btn">
                    <button onClick={()=> {
                        if(count[0]===0) 
                            {
                                alert('Invalid Value !!!');

                            }
                            else {
                                Decrement(0);
                                }}}>-</button>
                    {count[0]}
                    <button onClick={()=> Increment(0)}>+</button>
                </div>
             </div>

             <div className="item">
                <span>Product 2</span> 
                <span> 200</span> 
                <div className="Btn">
                <button onClick={()=> {
                        if(count[1]===0) 
                            {
                                alert('Invalid Value !!!');

                            }
                            else {
                                Decrement(1);
                                }}}>-</button>
                    {count[1]}
                    <button onClick={()=> Increment(1)}>+</button>
                </div>
             </div>

             <div className="item">
                <span>Product 3</span> 
                <span> 300</span> 
                <div className="Btn">
                <button onClick={()=> {
                        if(count[2]===0) 
                            {
                                alert('Invalid Value !!!');

                            }
                            else {
                                Decrement(2);
                                }}}>-</button>
                    {count[2]}
                    <button onClick={()=> Increment(2)}>+</button>
                </div>
             </div>
        </div>
        </>
    )
}

export default  Product;