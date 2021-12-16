import React from 'react';
import { Link } from 'react-router-dom';
import NoAccess from '../../static/assets/unauthorized.jpg';

export default function() {
    return (
        <div>
            <img src={NoAccess} className="unauthorized" />
        </div>
    )
}