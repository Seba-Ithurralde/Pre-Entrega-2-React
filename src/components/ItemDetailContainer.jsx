import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from './asyncMock';
import { useEffect, useState } from 'react';
import CartWidget from './CartWidget';

export default function ItemDetailContainer () {
    const {prodId} = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(getProduct(prodId));
    },[]);
    return ( 
    <>
        <h1>Vista de Detalle cuyo ID es "{prodId}"</h1>
        <p>ID: {product.id}</p>
        <h4>Nombre: {product.titulo}</h4>
        <img src={product.thumbnail} alt={product.titulo} width={250}/>
        <p>Descripcion: {product.descripcion}</p>
        <p>Stock: {product.stock}</p>
        <p>Precio: ${product.price}</p>
        <p><CartWidget /></p>    
        <Link to={"/category/productos"} > Volver </Link>
    </>
    )
}