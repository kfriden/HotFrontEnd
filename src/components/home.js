import React, { Component } from 'react';
import PageContent from './pageContent';
import Carousel from './carousel';

export default class Home extends Component {
  render() {
    return (
        <div>
            <Carousel />
            
            <div className="empty">

            </div>
            <PageContent />
        </div>
        
    );
  }
}