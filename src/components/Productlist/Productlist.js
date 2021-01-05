import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
// import PropTypes from 'prop-types';
import styles from './Productlist.module.scss';

export default function Productlist({ products }) {
  return (
    <div className={styles.Productlist}>
      <ul className="product-list">
        {
          products.map((product) => <ProductPreview product={product} key={product._id} />)
        }
      </ul>
    </div>
  )
}


