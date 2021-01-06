import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
// import PropTypes from 'prop-types';
import styles from './Productlist.module.scss';

export const Productlist = ({stores}) => (
  <div className={styles.Productlist}>
    <ul>
         { 
            stores.map( (store ,index) => 
            <li key={index}>
              <div className={styles.store}>
                <div className={styles.storeIMG} className={styles.thumb}>
                  <img className={styles.storeIMG} src={store.imgURL}></img>
                  <div className={styles.text}>
                    <span>{store.name}</span>
                    <span>{store.description}</span>
                  </div>
                </div>
                <div className={styles.info}>
                  <span>{store.createdBy}</span>
                  <span>{store.createdDate}</span>
                </div> 
              </div>   
              </li> )
         }
    </ul>
  </div>
);


