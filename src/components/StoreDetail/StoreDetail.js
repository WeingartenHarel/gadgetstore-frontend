import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './StoreDetail.module.scss';
import { storeService } from '../../services/storeService.js'
import { Link } from 'react-router-dom';

export class StoreDetail extends Component {
  
  state = {
    store:null,
  }

  async componentDidMount(){
    console.log('this.props.match.params.id',this.props.match.params.id)
    const store = await storeService.getStoreById(this.props.match.params.id)
    this.setState({ store }) 
    console.log('contact ',this.state )
  }

  render(){
    const { store } = this.state;
    // const { products } = this.state.store.products
    console.log("store",store)
    return (
      <div className={styles.StoreDetailMain}>
        {store &&  <div className={styles.StoreDetail}>
            <h2>{store.name}</h2>
            <span>Owner: {store.createdBy}</span>
            <span>"{store.description}"</span>
            <ul >
            {store.products.map( (product ,index) =>
              <li key={index}>
                  <div className={styles.store}>
                      <img src={product.image} className={styles.image}/>
                      <span className={styles.title}>{product.title}</span>
                      <span className={styles.price}>{product.price}</span>
                      <span className={styles.description}>{product.description}</span>
                      <span className={styles.category}>{product.category}</span>
                  </div>
                </li>)
              }   
            </ul>
            <Link to={'/store/edit/'+ store._id}>Edit</Link>
          </div>
          }
      </div>
    )

  }
}
StoreDetail.propTypes = {};

StoreDetail.defaultProps = {};

export default StoreDetail;
