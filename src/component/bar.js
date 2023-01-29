import React from 'react';
import earth from '../images/earth.png';
export default function Bar(){
    return (
        <div className='nav--bar'>
                <img src={earth} alt="earth picture" className='earth-pic'/>
                <p className='bar-header'>my travel journal.</p>
        </div>
    )
}