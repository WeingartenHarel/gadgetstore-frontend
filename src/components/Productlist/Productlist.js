import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
// import PropTypes from 'prop-types';
import styles from './Productlist.module.scss';

const Productlist = ({products}) => (
  <div className={styles.Productlist}>
    <ul>
         {
        products.map( (product ,index) => <li key={index}>{product.displayName}</li> )
         }
    </ul>
  </div>
);


