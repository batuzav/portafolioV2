import React from 'react';
import Slider from "react-slick";
import { slickDot } from '../common/scripts';

const list = [
    {
        image: 'dues ',
        category: 'Becario/Programador',
        title: 'DUES Textil',
        site: "https://dues.com.mx/",
        duration:"2017 - 2018",
    },
    {
        image: 'random',
        category: 'Programador',
        title: 'SITIO RANDOM',
        site: "http://sitiorandom.com/",
        duration:"2018 - 2019",
    },
    {
        image: 'hopper',
        category: 'Desarrollador Web',
        title: "HopperCat",
        site: "http://hoppercat.com/",
        duration:"2019 - 2020",
    },
    {
        image: 'blogic',
        category: 'Full Stack Dev',
        title: 'BodyLogic',
        site: "https://www.bodylogicglobal.com/",
        duration:"2020 - A la fecha",
    }
]

export const Employments = () => {
    return (
        
        <div className="portfolio-area pb--60 bg_color--5" id="empleos">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Donde he trabajado</h2>
                                        <p>Estas son las empresas en las he laborando de tiempo completo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <p>{value.duration}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" target="_blank" href={value.site}>Ver Sitio</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
    )
}
