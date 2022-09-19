import React from 'react'


export default function Card(props) {
    
    
    return (
    <div>
        <div className="card">
                <img 
                src={`./images/${props.imageUrl}`}
                    className="card--image"/>
            <div className="card-description">
                <div className="location-icon">
                    <img src ="./images/placeholder.png" className="location--logo"/>
                    <h4 className="location--text">{props.location} <a href={props.googleMapsUrl}target="_blank">View on Google Maps</a></h4>
                </div>
                    <h1 className="card--title">{props.title}</h1>
                    <span>{props.startDate} - </span> <span>{props.endDate}</span>
                    <p>{props.description}</p> 
                </div>
        
        </div> 
            <hr/>
    </div>
    )
}

