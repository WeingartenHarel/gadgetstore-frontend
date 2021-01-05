import React from 'react';
import ReactDOM from 'react-dom';
import ProductPreview from './ProductPreview';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductPreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});