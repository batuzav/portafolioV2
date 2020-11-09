import React from 'react';
import { FaJsSquare, FaNodeJs, FaWordpress, FaReact, FaSass } from "react-icons/fa";

const ServiceOb = [
    {
        icon: <FaJsSquare />,
        title: 'JavaScript',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FaNodeJs />,
        title: 'NodeJS',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FaReact />,
        title: 'React',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FaReact />,
        title: 'React Native',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FaSass />,
        title: 'Sass',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FaWordpress />,
        title: 'WordPress',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]

export const ServiceList = (props) => {
    const {column } = props;
    const ServiceContent = ServiceOb.slice(0, props.item);
    return (
        <div className="row">
            {ServiceContent.map( (val , i) => (
                <div className={`${column}`} key={i}>
                    {/* <a href="/#"> */}
                        <div className="service service__style--2">
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h3 className="title">{val.title}</h3>
                                <p>{val.description}</p>
                            </div>
                        </div>
                    {/* </a> */}
                </div>
            ))}
        </div>
    )
}
