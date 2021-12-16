import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay className="carousel">
                <div>
                    <img src="assets/logo.jpg" />
                </div>
                <div>
                    <img src="assets/aboutus.jpg" />
                </div>
                <div>
                    <img src="assets/1.jpg" />
                </div>
                <div>
                    <img src="assets/rewind2.jpg" />
                </div>
                <div>
                    <img src="assets/3.jpg" />
                </div>
            </Carousel>
        );
    }
};



