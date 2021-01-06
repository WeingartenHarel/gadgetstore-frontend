import React from 'react';
import PropTypes from 'prop-types';
import './Homepage.module.scss';
import { Productlist } from '../../components/Productlist/Productlist';
import { storeService } from '../../services/storeService.js'


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
    const products = await storeService.getStores()
    console.log(products,'products');
    this.setState({ products })
  }

  render() {
    const { products } = this.state
    return (
      <div className="home-page">
        { products &&
        <div className="products-section">
          <Productlist stores={products}></Productlist>
        </div>
        }
      </div>
    )
  }
}

