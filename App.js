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
      logo={"http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png"}
    />
  </div>
);

export default App;
