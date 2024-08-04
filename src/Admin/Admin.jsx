import React, { useState } from "react";
import { Insert_prod } from "./Insert_pord";
import { Update_prod } from "./Update_prod";
import { Delete_prod } from "./Delete_prod";
import { Edit_prod } from "./Edit_prod";
import { All_prod } from "./All_prod";
import './Admin.css'

function Admin(){
    const [active_tab,setActive_tab]=useState('All_prod')
    const render_prod =()=>{
     switch(active_tab){
         case 'insert':return <Insert_prod/>;
         case 'update':return<Update_prod/>;
         case 'delete':return<Delete_prod/>;
         case 'edit':return<Edit_prod/>;
         default:return<All_prod/>
     }
   }
   
    return(
        <div className="admin-panel">
        <nav className="admin-nav">
            <button onClick={() => setActive_tab('insert')}>Insert Product</button>
            {/* <button onClick={() => setActive_tab('update')}>Update Product</button>
            <button onClick={() => setActive_tab('delete')}>Delete Product</button>
            <button onClick={() => setActive_tab('edit')}>Edit Product</button> */}
        </nav>
        <div className="admin-content">
            {render_prod()}
        </div>
    </div>
    )
}

export default Admin;