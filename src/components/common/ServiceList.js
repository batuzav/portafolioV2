import React from 'react';
import { FaJsSquare, FaNodeJs, FaWordpress, FaReact, FaSass } from "react-icons/fa";

const ServiceOb = [
    {
        icon: <FaJsSquare />,
        title: 'JavaScript',
        description: 'Conocimiento profundo del lenguaje, y dominio completo de webpack, babel y DOM.'
    },
    {
        icon: <FaNodeJs />,
        title: 'NodeJS',
        description: 'Creación de servidores REST/API para alimentar las aplicaciones. Con expressJS.'
    },
    {
        icon: <FaReact />,
        title: 'React',
        description: 'Creación de páginas conectadas a APIS/REST. Rápidas y agradables a la vista.'
    },
    { 
        icon: <FaReact />,
        title: 'React Native',
        description: 'Aplicaciones nativas, acompañadas con REDUX y EXPO.'
    },
    {
        icon: <FaSass />,
        title: 'Sass',
        description: 'CSS con super poderes para una mejor experiencia y detalle en las páginas web.'
    },
    { 
        icon: <FaWordpress />,
        title: 'WordPress',
        description: 'CMS para crear páginas rápidas, eCommerce de manera sencilla y APIS WooCommerce.'
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
