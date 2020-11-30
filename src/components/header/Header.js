import React from 'react'
import "./header.css";

export const Header = () => {
    const handleClick = (id, e) => {
        console.log('e', id)
        const value = document.body.classList.contains('active');
        value ? document.body.classList.remove('active') : document.body.classList.add('active');
        switch (id) {
            case "code":
                e.preventDefault();
                window.location.replace("/#code");
                break;
            case "empleos": 
                e.preventDefault();
                window.location.replace("/#empleos"); 
                break;
            case "market": 
                e.preventDefault();
                window.location.replace("/#proyectos"); 
                break; 
            default:
                break;
        }
     }
    return (
    <>
        <div>
            <a onClick={(e)=>handleClick("code", e)}>
                <div className="pie pie1">
                    <div className="pie-color pie-color1">
                        <img className="card" src={require('../assets/code.png')}  />
                    </div>
                </div>
            </a>
            <div className="pie pie2" onClick={(e)=>handleClick("empleos", e)}>
                <div className="pie-color pie-color2">
                    <img className="discount" src={require('../assets/working.png')}  />
                </div>
            </div>
            <div className="pie pie3" onClick={(e)=>handleClick("market", e)}>
                <div className="pie-color pie-color3">
                    <img className="cart" src={require('../assets/product.png')}  />
                </div>
            </div>
            <div className="menu" onClick={(e)=>handleClick("none", e)}>
                <svg
                className="hamburger"
                xmlns="http://www.w3.org/2000/svg"
                width={100}
                height={100}
                viewBox="0 0 100 100"
                >
                <g fill="none" stroke="#000" strokeWidth="7.999" strokeLinecap="round">
                    <path d="M 55,26.000284 L 24.056276,25.999716" />
                    <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                    <path d="M 45,73.999716 L 75.943724,74.000284" />
                    <path d="M 75.943724,26.000284 L 45,25.999716" />
                    <path d="M 24.056276,73.999716 L 55,74.000284" />
                </g>
                </svg>
            </div>
        </div>

        
    </>
    )
}
