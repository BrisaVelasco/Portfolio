import React from "react";

export const TimelineItem = ({data})=>(
   
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <span className="circle"></span>
        </div>
    </div>
)