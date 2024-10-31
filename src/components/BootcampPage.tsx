import React, { FC, useState } from 'react';
//Animation
import { useSpring, animated } from '@react-spring/web'
//Components
import './BootcampPage.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
//Images
import AvatarImg1 from '../images/image-tanya.jpg';
import AvatarImg2 from '../images/image-john.jpg';
//Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BootcampPage: FC = () => {
    const [slide, setSlide] = useState(1);

    const lineProps = {
        par_1: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        head_1_1: 'Tanya Sinclair',
        head_1_2: 'UX Engineer',

        par_2: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        head_2_1: 'John Tarkpor',
        head_2_2: 'Junior Front-end Developer',
    };

    const AvatarImgs = { 
        img1: AvatarImg1, 
        img2: AvatarImg2 
    };

    const springUp = useSpring({ 
        opacity: 1, 
        transform: 'translateY(0)', 
        from: { 
            opacity: 0, 
            transform: 'translateY(-1000px)' 
        }, 
        reset: true, 
        config: { tension: 120, friction: 24 }, 
    });

    const springDown = useSpring({ 
        opacity: 1, 
        transform: 'translateY(0)', 
        from: { 
            opacity: 0, 
            transform: 'translateY(500px)' 
        }, 
        reset: false, 
        config: { tension: 120, friction: 24 }, 
    }); 

    const springRight = useSpring({ 
        opacity: 1, 
        transform: 'translateX(0)', 
        from: { 
            opacity: 0, 
            transform: 'translateX(1000px)' 
        }, 
        reset: true, 
        config: { tension: 120, friction: 24 }, 
    }); 

    const springLeft = useSpring({ 
        opacity: 1, 
        transform: 'translateX(0)', 
        from: { 
            opacity: 0, 
            transform: 'translateX(-500px)' 
        }, 
        reset: true, 
        config: { tension: 120, friction: 24 }, 
    });
    
    const imageSpring = useSpring({ 
        opacity: 1, 
        transform: 'rotate(0deg) scale(1)', 
        from: { 
            opacity: 0, 
            transform: 'rotate(-280deg) scale(0)' 
        }, 
        reset: true, 
        config: { tension: 120, friction: 24 },
     });
    
    return (
        <Container fluid className='min-vh-100 cs-bg-image d-flex flex-column align-items-center justify-content-center py-5 overflow-hidden'>
            <Container fluid className='cs-w'>
                <Row>
                    <Col lg={{ span: 7, order: 1}} xs={{ span: 12, order: 2}} className='cs-index-2 d-flex flex-column justify-content-center gap-3 mt-lg-0 mt-5'>
                        <animated.p style={springUp} className='display-6 cs-tc-dark-blue cs-fw-300 cs-overlap text-lg-start text-center'>{lineProps[`par_${slide}`]}</animated.p>
                        <Container className='d-flex flex-lg-row flex-column gap-2'>
                            <animated.h1 style={springLeft} className='h5 cs-tc-dark-blue cs-fw-700 text-lg-start text-center'>{lineProps[`head_${slide}_1`]}</animated.h1>
                            <animated.h1 style={springRight} className='h5 cs-fw-500 cs-tc-grayish-blue text-lg-start text-center'>{lineProps[`head_${slide}_2`]}</animated.h1>
                        </Container>
                    </Col>
                    <Col lg={{ span: 5, order: 2}} xs={{ span: 12, order: 1}} className='cs-position cs-index-1 d-flex flex-column align-items-center justify-content-center mb-lg-0 mb-5'>
                        <animated.div style={imageSpring}>
                            <Image fluid rounded src={AvatarImgs[`img${slide}`]} alt='photo' className='shadow' />
                        </animated.div>
                        <animated.div style={springDown} className='cs-btns-group cs-index-2'>
                            <ButtonGroup className=' shadow rounded-pill'>
                                <Button onClick={() => setSlide(1)} type='button' className='cs-btn-back cs-tc-dark-blue cs-btn'><IoIosArrowBack /></Button>
                                <Button onClick={() => setSlide(2)} type='button' className='cs-btn-forward cs-tc-dark-blue cs-btn'><IoIosArrowForward /></Button>
                            </ButtonGroup>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default BootcampPage;