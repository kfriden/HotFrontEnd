import React, { Component } from 'react';
import axios from 'axios';

class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        };
    }

    getBlogItem() {
        axios.get(`https://kaitlyn-backend.herokuapp.com/api/blogs${this.state.currentId}`)
        .then(response => {
            console.log('response', response);
        }).catch(error => {
            console.log('getBlogItem error', error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }
    render() {
        const {
            id,
            title,
            content
        } = this.state.blogItem;
        console.log("currentId", this.state.currentId)
        return (
            <div >
                <div>
                    <h1>{title}</h1>
                    <div className="content">{content}</div>
                </div>
            
            </div>
        );
    }
}

export default BlogDetail;