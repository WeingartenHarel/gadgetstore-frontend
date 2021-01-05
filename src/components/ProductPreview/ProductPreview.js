import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPreview.module.scss';

export default function ProductPreview({product}){
  return(
      <li className="product-preview">
        <h1>{product.label}</h1>
        <h1>{product.status}</h1>
      </li>
  )
}
