import React from "react";
import { Banner } from "./Banner";
import PopupComponent from "./PopupComponent";
import {ProductSlider}  from "./ProductSlider";

export function Home (){
    return(
        <div className="home">
            <Banner/>
            <PopupComponent />
            <ProductSlider/>
        </div>
 
    )
}

