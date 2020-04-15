import React from 'react';
import axios from 'axios';
import Moment from 'moment';

import { Card } from 'antd';

class BlogDetail extends React.Component {

    state = {
         blogpost:{}
    }

    componentDidMount() {
        const blogID = this.props.match.params.blogID;
        axios.get(`http://127.0.0.1:8000/api/${blogID}`)
        .then(res => {
            Moment.locale('en');
            var date = Moment(res.data.created_at).format('Do MMM YYYY');
            res.data.created_at = date;
            this.setState({
                blogpost: res.data
            });
        })
    }

    render() {
        return(
            <Card title={this.state.blogpost.title}>
                <p>{this.state.blogpost.created_at}</p>
                <p>{this.state.blogpost.content}</p>
            </Card>
        )
    }
}

export default BlogDetail;