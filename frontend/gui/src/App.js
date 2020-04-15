import React from 'react';
import 'antd/dist/antd.css'; 

import CustomLayout from './containers/Layout'; 
import BlogList from './containers/BlogListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <BlogList/>
      </CustomLayout>
    </div>
  );
}

export default App;
