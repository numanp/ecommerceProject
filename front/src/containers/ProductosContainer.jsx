import React from 'react';
import ListadoProductos from './ProductosSubContainer'

import data from '../baseHarcodeada/products.json'

export default function Homepage(props) {
    return <div>
         <ListadoProductos products={data.products} 
        
        />
    </div>
}
