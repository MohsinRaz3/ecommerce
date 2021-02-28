import React from 'react-dom'
import { Carousel } from 'react-bootstrap';
import Archi from '../assets/images/architect.png'
import Cont from '../assets/images/contractor.png'
import Homie from '../assets/images/homie.png'
import Interi from '../assets/images/interiorD.png'
import shopD from '../assets/images/shopD.png'
import Labour from '../assets/images/skilledlabour.png'

import './Carouselz.css'


const CarouselContainer = () => {
    return (
        <div>
         <Carousel fade={true} pause='hover'>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            src={Homie}
                            alt="Home page"
                            
                          />
                          <Carousel.Caption>
                            <h2 color="black">EASECAD</h2>
                            <h4>Build your home with ease!</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            src={Archi}
                            alt="Architect"
                          />
                          <Carousel.Caption>
                            <h2>Find Architect</h2>
                            <h4>Here you can find professional Architects.</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            src={Cont}
                            alt="Contractors"
                          />
                          <Carousel.Caption>
                            <h2>Find Contractor</h2>
                            <h4>Build you home safe with professionals.</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            src={Labour}
                            alt="Skilled labour"
                          />
                          <Carousel.Caption>
                            <h2>Find Labour</h2>
                            <h4>Here you'll find skilled labour.</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            src={Interi}
                            alt="interior design"
                          />
                          <Carousel.Caption>
                            <h2>Find Designer</h2>
                            <h4>Architecture and interior design go hand in hand with construction.</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={shopD}
                            alt="Shop items"
                          />
                          <Carousel.Caption>
                            <h2>Shop NOW!</h2>
                            <h4>Buy any item or material on just one click.</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
        </Carousel>
     </div>

    )
} 
export default CarouselContainer;