import React from 'react';
import {Route} from 'react-router-dom';
import BlogList from './containers/BlogListView';
import BlogDetail from './containers/BlogDetailView';



const BaseRouter = () => (
    <div>
        <Route exact path = '/' component = {BlogList}/>
        <Route exact path = '/:blogID' component = {BlogDetail}/>
    </div>
);

export default BaseRouter;