export const slickDot = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
]
};