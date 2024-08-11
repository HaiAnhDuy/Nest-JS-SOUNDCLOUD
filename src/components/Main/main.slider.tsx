'use client'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { url } from 'inspector';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
interface Iprops {
    data: ITracksTop[]
}
// import './main.slider.css'


const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <Button variant="contained"
            sx={{
                position: 'absolute',
                right: 0,
                cursor: 'pointer',
                zIndex: 1000,
                top: '30%',
                minWidth: 30,
                width: 35,
                backgroundColor: '#000'



            }}
            onClick={onClick}

        ><ChevronRightIcon /></Button>

    );
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <Button variant="contained"
            sx={{
                position: 'absolute',
                left: 0,
                cursor: 'pointer',
                zIndex: 1000,
                top: '30%',
                minWidth: 30,
                width: 35,
                backgroundColor: '#000'




            }}
            onClick={onClick}

        ><ChevronLeftIcon /></Button>

    );
}

const MainSlider = (props: Iprops) => {
    let settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    const data_new = props.data

    return (


        <Box
            sx={{
                margin: "0 70px",
                marginTop: "50px",


                ".conatiner-content-slider": {
                    padding: "0 15px",
                    // border: "1px solid blue"


                },
                ".content-slider": {
                    margin: '0 auto',
                    // border: "1px solid black",
                    height: "209px",
                    // width: "173px",
                    ".content-img": {
                        height: '173px',
                        // width: '173px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    },
                    "content-total": {
                        margin: '11px'

                    },
                    ".content-tracks": {
                        color: '#333',
                        fontSize: '14px',
                        textTransform: 'uppercase'
                    },
                    ".content-arstit": {
                        color: '#999',
                        fontSize: '12px',
                        fontWeight: 100,


                    },
                    ".long-content": {
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        wordBreak: 'normal'
                    }
                }
            }}
        >
            <h3>
                {data_new && data_new.length > 0 ? data_new[0].category : ''}
            </h3>

            <Slider {...settings} >
                {
                    data_new && data_new.length > 0
                        ? data_new.map((items, index) => {
                            return (
                                <div className="conatiner-content-slider">
                                    <div className='content-slider'>
                                        <div className='content-img' style={{
                                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${items.imgUrl})`,
                                        }}>

                                        </div>
                                        <div className='content-total'>
                                            <div className='content-tracks long-content'>{items.title}</div>
                                            <div className='content-arstit long-content'>{items.description}</div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                        :
                        ''

                }
                {/* <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div> */}


            </Slider>
            <Divider sx={{
                marginTop: '40px'
            }} />
        </Box >




    )
}
export default MainSlider