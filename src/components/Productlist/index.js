import React from 'react';
import ReactDOM from 'react-dom';
import Productlist from './Productlist';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Productlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});