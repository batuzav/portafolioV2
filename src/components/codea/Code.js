import React from 'react';
import { ServiceList } from '../common/ServiceList';

export const Code = () => {
    return (
        <div className="service-area creative-service-wrapper ptb--90 bg_color--5" id="code">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-left mb--30">
                            <h2>Tecnologías.</h2>
                            <p>He trabajado con diversas tecnologías. Estas son unas de ellas:</p>
                        </div>
                    </div>
                </div>
                <div className="row creative-service">
                    <div className="col-lg-12">
                        <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                    </div>
                </div>
            </div>
        </div>
    )
}
