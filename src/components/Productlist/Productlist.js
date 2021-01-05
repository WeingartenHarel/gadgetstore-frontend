import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Productlist.module.scss';

const Productlist = ({products}) => (
  <div className={styles.Productlist}>
    <ul>
      <li>
        {
        products.map((product) => <span>{product.name}</span>)
         }
      </li>
    </ul>
  </div>
);

Productlist.propTypes = {};

Productlist.defaultProps = {};

export default Productlist;
