import React from "react";

function LastProductImage(props){
    return(
        <div class="text-center">
            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.imageSource} alt="profile dummy"/> {/*Fijarse que el tema de style="width: 25rem;" da error*/}
        </div>
    )
}

export default LastProductImage;