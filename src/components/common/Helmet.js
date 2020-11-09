import React from 'react'

export const Helmet = ({ pageTitle }) => {
    return (
        <Helmet>
            <title>{pageTitle} || Portafolio Batuza </title>
            <meta name="description" content="Este es un portafolio hecho por BATUZAV en REACT" />
        </Helmet>
    )
}
