import React from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import {List,Avatar,Icon} from 'antd';


const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Blogposts = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.title}
                extra={
                <img
                    width={272}
                    alt="logo"
                    src={item.image}
                />
                }
            >
                <List.Item.Meta
                title={<a href={`/${item.id}`}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
            </List.Item>
            )}
        />
        )
}

export default Blogposts;