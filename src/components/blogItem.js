import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = props => {
    const {
        id,
        title,
        content
    } = props.blogItem;

    return (
        <div className="blog-container">
                <h1>{title}</h1>
            <div className="content-container">
                <h3>{content}</h3>
            </div>
        </div>
    )
}

export default BlogItem; 