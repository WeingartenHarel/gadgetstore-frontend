import React from 'react';
import ReactDOM from 'react-dom';
import ProductEdit from './ProductEdit';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});