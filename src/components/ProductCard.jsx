import React from 'react';
import { AddToCartIcon } from './Icons';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {

    return (
      <>
        <article className='card' style={{ border: '2px solid black', padding: 20, margin: 10 }}>
          <h4>{product.name}</h4>
          <button>
          <img src={product.thumbnail} alt={product.titulo} width={250}/>
          </button>
            ${product.price}
          <button>
            <AddToCartIcon />
          </button>
          <button>
            <Link to={`/item/${product.id}`}> Más detalles </Link>
          </button>
        </article>
      </>
    );
  }
  