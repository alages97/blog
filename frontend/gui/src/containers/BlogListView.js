import React from 'react';
import axios from 'axios';

import Blogposts from '../components/Blogpost';

class BlogList extends React.Component {

    state = {
        blogposts:[]
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            var sorted_posts = (res.data).sort((a,b) => {
                return new Date(a.created_at).getTime() - 
                    new Date(b.created_at).getTime()
            }).reverse();
            this.setState({
                blogposts: sorted_posts
            });
        })
    }

    render() {
        return(
            <Blogposts data ={this.state.blogposts}/>
        )
    }
}

export default BlogList;