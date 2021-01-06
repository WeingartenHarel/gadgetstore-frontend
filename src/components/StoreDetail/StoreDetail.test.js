import React from 'react';
import ReactDOM from 'react-dom';
import StoreDetail from './StoreDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});