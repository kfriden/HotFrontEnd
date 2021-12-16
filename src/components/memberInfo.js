import React, { Component } from 'react';

class MemberCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            birth_name,
            quirk,
            age,
            rank,
            location,
            villain_vigilante,
            description,
            url_image
    
        } = this.props.memberItem;
        
        return (
                <div className="member">
                    <div className="description subtitle">
                        <h1 className="top-height">{name}</h1>
                        <h2>Birth Name: {birth_name}</h2>
                        <h2>Quirk: {quirk}</h2>
                        <h2>Age: {age}</h2>
                        <h2>Rank: {rank}</h2>
                        <h2>Location: {location}</h2>
                        <h2>Villain/Vigilante: {villain_vigilante}</h2>
                        <h2>Description: {description}</h2>
                    </div>
                    <img className="member-image" src={url_image} />
                </div>
                
             );
    }
}


export default MemberCard; 