import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
// import PropTypes from 'prop-types';
import styles from './StoreList.module.scss';
import { Link } from 'react-router-dom'

export const StoreList = ({stores}) => (
  <div className={styles.StoreList}>
    <ul>
         { 
            stores.map( (store ,index) => 
            <Link to={`/store/details/${store._id}`} key={store._id}>
              <li >
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
              </li> 
            </Link>
          )
         }
    </ul>
  </div>
);


