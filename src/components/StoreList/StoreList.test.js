import React from 'react';
import ReactDOM from 'react-dom';
import StoreList from './StoreList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreList />, div);
  ReactDOM.unmountComponentAtNode(div);
});