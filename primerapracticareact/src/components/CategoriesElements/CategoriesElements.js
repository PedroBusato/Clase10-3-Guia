import React from "react";

function CategoriesElement(props){
    return(
        props.Categories.map((OneCategory, idx) => 
        <div key={OneCategory + idx} class="col-lg-6 mb-4">  {/* No olvidemos de agregar nuestra key!! */}
            <div class="card bg-info text-white shadow">
                <div class="card-body">
                    {OneCategory}
                </div>
            </div>
        </div>)
    )
}

export default CategoriesElement;