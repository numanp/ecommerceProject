import React from 'react';
import ProductListing from '../components/Productos'

import data from '../baseHarcodeada/products.json'

export default function Homepage(props) {
    return <div style={{width: "800px", margin: "10px auto", padding: "32px", backgroundColor: "white"}}>
        <h2> PRODUCTOS </h2>
        <ProductListing products={data.products}/>
    </div>
}
