import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Productlist from './../Productlist/Productlist';



export default class HomePage extends React.Component {

  state = {
    //user: null,
    products:[
      {
        id:'001',
        name:'nameA'
      },
      {
        id:'002',
        name:'nameB'
      }
    ],
    filterBy:{
      term:null
    }

  }

  // products={products}
  render(){
    const {products} = this.state
    return (<div className={styles.Homepage}>
      Homepage Component
      <Productlist products={products}></Productlist>
    </div>)
  }

}

// Homepage.propTypes = {};

// Homepage.defaultProps = {};


