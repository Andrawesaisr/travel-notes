import React from 'react';
import pointer from '../images/location-pointer.png';
export default function Card(props){
    
    return(
        <div className='card--container'>
            <img src={require(`../images/${props.imageUrl}`)} alt="mount" className='card--pic'/>
            <div className='card--details'>{/* column */}
           <div className='card--place'>{/* row */}
           <img src={pointer} alt="pointer" className="card--pointer"/>
            <h3>{props.location}</h3>
            <a className='view-on-google' href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
           </div>
           <h1>{props.title}</h1>
             <p className='date'><b>{props.Duration}</b></p>
             <p className='description'>{props.description}</p>
            </div>
         <hr />
        </div>
        
    );
}