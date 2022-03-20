import React from "react";
import ProductsElements from "../ProductsElements/ProductsElements";

function ProductInfo(){
    let ProductElementsInfo = [
        {
            title: "PRODUCTS IN DATA BASE",
            amount: 135
        },
        {
            title: "AMOUNT IN PRODUCTS",
            amount: "546.456$"
        },
        {
            title: "USERS QUANTITY",
            amount: 138
        }
    ];
    return(
        <div class="row">
            <ProductsElements ProductElementsInfo={ProductElementsInfo}/>
        </div>
    )
}


export default ProductInfo;


