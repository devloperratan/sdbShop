import axios from "axios";
import React, { useState } from "react";
import './InsProd.css'
export function Insert_prod (){

const [product,setProduct]=useState({id:"",ProductName:"",ProductRate:"",ProductDesc:"",ProductImg:""});

const submitHandle=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/products', product)
    .then(res => {
        console.log(res.data);
        setProduct({ id: "", ProductName: "", ProductRate: "", ProductDesc: "", ProductImg: "" });
    })
    .catch(err => {
        console.log(err);
    });

}
const handleFileChange = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.onloadend = () => {
        setProduct({ ...product, ProductImg: reader.result });
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};

    return(
        <div className="product-form">
        <form onSubmit={submitHandle}>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={product.ProductName}
                    onChange={(e) => setProduct({ ...product, ProductName: e.target.value })}
                />
            </div>
            <div>
                <label>Product Description:</label>
                <input
                    type="text"
                    value={product.ProductDesc}
                    onChange={(e) => setProduct({ ...product, ProductDesc: e.target.value })}
                />
            </div>
            <div>
                <label>Product Rate:</label>
                <input
                    type="text"
                    value={product.ProductRate}
                    onChange={(e) => setProduct({ ...product, ProductRate: e.target.value })}
                />
            </div>
            <div>
                <label>Product Image:</label>
                <input type="file"
                   onChange={handleFileChange}
                   /> 
            </div>
            <button type="submit">Save</button>
        </form>
    </div>

    )
}