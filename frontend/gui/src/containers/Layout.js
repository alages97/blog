import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <h1 style={{color: 'white'}}>Alages' blog site</h1>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to = "/">Home</Link></Breadcrumb.Item>
            </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>2020 Created by Alages©</Footer>
        </Layout>
    );
}

export default CustomLayout; 