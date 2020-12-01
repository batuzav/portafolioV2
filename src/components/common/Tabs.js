import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        image: 'kaikoi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-01.jpg`,
        category: 'Páginas Web | Laravel',
        title: 'Kaikoi',
        url: "https://kaikoi.com"
    },
    {
        image: 'rebl',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-08.jpg`,
        category: 'Páginas Web | React',
        title: 'Rebl Challenge',
        url: "https://batuzav.github.io/reblchange/",
    },
    {
        image: 'mybl',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-03.jpg`,
        category: 'Aplicación Móvil | React Native',
        title: 'MyBL News',
        url: "https://play.google.com/store/apps/details?id=com.bodylogic.myblnews"
    },
    {
        image: 'couper',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-04.jpg`,
        category: 'Página Web | WordPress',
        title: 'Coupercnc',
        url: "https://coupercnc.com.mx/",
    },
    {
        image: 'kaikoi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-05.jpg`,
        category: 'Aplicación Móvil | React Native',
        title: 'Kaikoi App',
        url: "https://play.google.com/store/apps/details?id=com.sitiorandom.kaikoirandom"
    },
    {
        image: 'esi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-06.jpg`,
        category: 'Páginas Web | WordPress',
        title: 'Incendies',
        url: "https://incendies.mx/"
    },
    {
        image: 'sinergia',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-07.jpg`,
        category: 'Páginas Web | React',
        title: 'Sinergia BodyLogic',
        url: "https://sinergia.bodylogicglobal.com/"
    },
    {
        image: 'gyg',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-02.jpg`,
        category: 'Páginas Web | WordPress',
        title: 'GyG Gestoria',
        url: "http://gestoriagyg.com.mx/"
    },
    {
        image: 'blit',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-09.jpg`,
        category: 'Páginas Web | PHP',
        title: 'BLIT Bodylogic global',
        url: "http://blit.bodylogicglobal.com/"
    },
   
]


const TabTwo = [
    {
        image: 'rebl',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-08.jpg`,
        category: 'Páginas Web | React',
        title: 'Rebl Challenge',
        url: "https://batuzav.github.io/reblchange/",
    },
    {
        image: 'kaikoi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-01.jpg`,
        category: 'Páginas Web | Laravel',
        title: 'Kaikoi',
        url: "https://kaikoi.com"
    },
    {
        image: 'couper',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-04.jpg`,
        category: 'Página Web | WordPress',
        title: 'Coupercnc',
        url: "https://coupercnc.com.mx/",
    },
    {
        image: 'gyg',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-02.jpg`,
        category: 'Páginas Web | WordPress',
        title: 'GyG Gestoria',
        url: "http://gestoriagyg.com.mx/"
    },
    {

        image: 'esi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-06.jpg`,
        category: 'Páginas Web | WordPress',
        title: 'Incendies',
        url: "https://incendies.mx/"
    },
    {
        image: 'sinergia',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-07.jpg`,
        category: 'Páginas Web | React',
        title: 'Sinergia BodyLogic',
        url: "https://sinergia.bodylogicglobal.com/"
    },
    {
        image: 'blit',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-09.jpg`,
        category: 'Páginas Web',
        title: 'BLIT Bodylogic global | PHP',
        url: "http://blit.bodylogicglobal.com/"
    },
]

const TabThree = [ 
    {
        image: 'mybl',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-03.jpg`,
        category: 'Aplicación Móvil | React Native',
        title: 'MyBL News',
        url: "https://play.google.com/store/apps/details?id=com.bodylogic.myblnews"
    },

    {
        image: 'kaikoi',
        bigImage: `${process.env.PUBLIC_URL}/assets/images/portafolio/big/dp-big--portfolio-05.jpg`,
        category: 'Aplicación Móvil | React Native',
        title: 'Kaikoi App',
        url: "https://play.google.com/store/apps/details?id=com.sitiorandom.kaikoirandom"
    },
]



export const TabsAll = ({column}) => {
    const [state, setstate] = useState({        
        tab1: 0,
        tab2: 0,
        tab3: 0,
        tab4: 0,
        isOpen: false,        
    })
    const { tab1, tab2, tab3, tab4, isOpen } = state;
    return (
        <div>
            <Tabs>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="tablist-inner">
                            <TabList className="pv-tab-button text-center mt--0">
                                <Tab><span>Todos los proyectos</span></Tab>
                                <Tab><span>Páginas Web</span></Tab>
                                <Tab><span>Aplicaciones Móviles</span></Tab>
                            </TabList>
                        </div>
                    </div>
                </div>

                <TabPanel className="row row--35">
                    {TabOne.map((value , index) => (
                        <div className={`${column}`} key={index}>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={TabOne[tab1].bigImage}
                                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                    onCloseRequest={() => setstate({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                    setstate({
                                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                    })
                                    }
                                    onMoveNextRequest={() =>
                                        setstate({
                                            tab1: (tab1 + 1) % TabOne.length,
                                        })
                                    }
                                    imageLoadErrorMessage = 'Image Loading ...'
                                    enableZoom={false}
                                />
                            )}
                            <div className="item-portfolio-static">
                                <div onClick={() => setstate({ tab1: index })}>
                                    <div className="portfolio-static">
                                        <div className="thumbnail-inner">
                                            <div className="thumbnail">
                                                <a target="_blank" href={`${value.url}`}>
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/portafolio/${value.image}.jpg`} alt="Portfolio Images"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4>
                                                    <a target="_blank" href={`${value.url}`}>
                                                        {value.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
        
                <TabPanel className="row row--35">
                    {TabTwo.map((value , index) => (
                        <div className={`${column}`} key={index}>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={TabTwo[tab2].bigImage}
                                    nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                    prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                    onCloseRequest={() => setstate({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                    setstate({
                                        tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                    })
                                    }
                                    onMoveNextRequest={() =>
                                        setstate({
                                            tab2: (tab2 + 1) % TabTwo.length,
                                        })
                                    }
                                    imageLoadErrorMessage = 'Image Loading ...'
                                    enableZoom={false}
                                />
                            )}
                            <div className="item-portfolio-static">
                                <div onClick={() => setstate({ tab2: index })}>
                                    <div className="portfolio-static">
                                        <div className="thumbnail-inner">
                                            <div className="thumbnail">
                                                <a target="_blank" href={`${value.url}`}>
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/portafolio/${value.image}.jpg`} alt="Portfolio Images"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4>
                                                    <a target="_blank" href={`${value.url}`}>
                                                        {value.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>

                <TabPanel className="row row--35">
                    {TabThree.map((value , index) => (
                        <div className={`${column}`} key={index}>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={TabThree[tab3].bigImage}
                                    nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                    prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                    onCloseRequest={() => setstate({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                    setstate({
                                        tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                    })
                                    }
                                    onMoveNextRequest={() =>
                                        setstate({
                                            tab3: (tab3 + 1) % TabThree.length,
                                        })
                                    }
                                    imageLoadErrorMessage = 'Image Loading ...'
                                    enableZoom={false}
                                />
                            )}
                            <div className="item-portfolio-static">
                                <div onClick={() => setstate({ tab3: index })}>
                                    <div className="portfolio-static">
                                        <div className="thumbnail-inner">
                                            <div className="thumbnail">
                                                <a target="_blank" href={`${value.url}`}>
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/portafolio/${value.image}.jpg`} alt="Portfolio Images"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4>
                                                    <a target="_blank" href={`${value.url}`}>
                                                        {value.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    )
}
