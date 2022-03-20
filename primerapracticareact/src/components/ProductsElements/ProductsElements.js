import React from "react";

function ProductsElements(props){
    return(
        props.ProductElementsInfo.map( (OneElement, idx) => /*En este caso ProductElementsInfo es un array donde en cada posicion tiene un objeto literal*/
        <div key={OneElement + idx} class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{OneElement.title}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{OneElement.amount}</div>
                        </div>
                        <div class="col-auto">
                            <i class={props.productIcon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}

export default ProductsElements;