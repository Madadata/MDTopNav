import React from 'react';
import MDTopNav from './src/MDTopNav.jsx';
import 'normalize.css';

const items = ['details', 'github'];
const urls = [
  'https://www.madadata.com/',
  'https://github.com/Madadata',
];

const App = () => (
  <div>
    <MDTopNav
      items={items}
      urls={urls}
    />
  </div>
);

export default App;
