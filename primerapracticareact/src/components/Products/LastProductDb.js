import React from "react";
import LastProductHeader from "../ProductsElements/LastProductHeader";
import LastProductDescription from "../ProductsElements/LastProductDescription";
import LastProductImage from "../ProductsElements/LastProductImage";
import LastProductButton from "../ProductsElements/LastProductButton";

function LastProductoDb(props){
    return(
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <LastProductHeader LastProductHeader="Last product in Data Dase"/>
                <div class="card-body">
                    <LastProductImage imageSource="/public/images/product_dummy.svg"/> {/* ESTOY TENIENDO PROBLEMAS CON LA RUTA DE LA IMAGEN */}
                    <LastProductDescription productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?"/>
                    <LastProductButton buttonDescription="View product detail"/>
                </div>
            </div>
        </div>
    )
}

export default LastProductoDb;



