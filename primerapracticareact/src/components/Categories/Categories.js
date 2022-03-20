import React from "react";
import CategoriesElement from "../CategoriesElements/CategoriesElements";
import CategoriesHeader from "../CategoriesElements/CategoriesHeader";

function Categories(){
let Categories = ["Category 01", "Category 02", "Category 03", "Category 04", "Category 05", "Category 06"];
    return(
        <div class="col-lg-6 mb-4">						
            <div class="card shadow mb-4">
                <CategoriesHeader header="Categories in Data Base"/>
                <div class="card-body">
                    <div class="row">
                        <CategoriesElement Categories={Categories}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Categories;

