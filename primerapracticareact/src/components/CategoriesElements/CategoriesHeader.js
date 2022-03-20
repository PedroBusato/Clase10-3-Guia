import React from "react";

function CategoriesHeader(props){
    return(
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{props.header}</h6>
        </div>
    )
}

export default CategoriesHeader;