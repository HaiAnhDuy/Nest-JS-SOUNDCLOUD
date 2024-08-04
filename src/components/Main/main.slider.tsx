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
const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <Button variant="outlined"
            sx={{
                position: 'absolute',
                right: 0,
                cursor: 'pointer',
                zIndex: 1000,
                top: '40%',
                minWidth: 30,
                width: 35,




            }}
            onClick={onClick}

        ><ChevronRightIcon /></Button>

    );
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <Button variant="outlined"
            sx={{
                position: 'absolute',
                left: 0,
                cursor: 'pointer',
                zIndex: 1000,
                top: '40%',
                minWidth: 30,
                width: 35,




            }}
            onClick={onClick}

        ><ChevronLeftIcon /></Button>

    );
}

const MainSlider = () => {
    let settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    return (


        <Box
            sx={{
                margin: "0 70px",
                marginTop: "100px",


                ".conatiner-content-slider": {
                    padding: "0 15px",
                    // border: "1px solid blue"


                },
                ".content-slider": {
                    margin: '0 auto',
                    border: "1px solid black",
                    height: "209px",
                    // width: "173px",
                    ".content-img": {
                        height: '173px',
                        // width: '173px',
                        backgroundImage: `url(https://al.sndcdn.com/labs-e1c75f27-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBNT1JFX09GX1dIQVRfWU9VX0xJS0UKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjE1MDcyOTYzMzQiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxNjQxOTcxMzA3Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTYyOTc2MjM0OCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMzg0MTMwODMiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxNjg1MzI2MjMzIgo%3D)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    },
                    ".content-artist": {
                        color: '#333',
                        fontSize: '14px',
                        position: ''
                    }
                }
            }}
        >
            <h3>
                Muti Trap
            </h3>

            <Slider {...settings} >

                <div className="conatiner-content-slider">
                    <div className='content-slider'>
                        <div className='content-img'>

                        </div>
                        <div className='content-artist'>Hieu thu 2</div>
                    </div>
                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>1</div>

                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>1</div>

                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>1</div>

                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>1</div>

                </div>
                <div className="conatiner-content-slider">
                    <div className='content-slider'>1</div>

                </div>


            </Slider>
            <Divider sx={{
                marginTop: '40px'
            }} />
        </Box>




    )
}
export default MainSlider