import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Productlist from '../Productlist/Productlist';
import { productService } from '../../services/productService.js'


export default class HomePage extends React.Component {

  

  state = {
    //user: null,
    products: null,
    // filterBy:{
    //   term:null
    // }
  }
  componentDidMount() {
    this.loadProducts()
  }
  async loadProducts() {
    const products = await productService.getProducts()
    console.log(products,'products');
    this.setState({ products })
  }

  render() {
    const { products } = this.state
    return (
      <div className="home-page">
        { products &&
        <div className="products-section">
          <h1>Eylon ya zevel Ofot</h1>
          <Productlist products={products}></Productlist>
        </div>
        }
      </div>
    )
  }
}
// Homepage.propTypes = {};

// Homepage.defaultProps = {};
