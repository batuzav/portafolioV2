import React from 'react'
import TextLoop from "react-text-loop";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Bienvenido a mi mundo.',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

export const SingleSlider = () => {
    return (
        <div className="slider-wrapper">
                {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="designer-thumbnail">
                                        <img src={require('../assets/indice.jpg')} alt="Slider Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        <h1 className="title">Hola, Soy Pedro<br/>
                                        <TextLoop >
                                            <span> UX Designer.</span>
                                            <span> UI Designer.</span>
                                            <span> Full-Stack Dev.</span>
                                        </TextLoop>{" "}
                                        </h1>
                                        <h2>En México.</h2>
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* End Single Slide */}
            </div>
    )
}
