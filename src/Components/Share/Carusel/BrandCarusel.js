import React from 'react'
import { Carousel } from 'react-bootstrap'

import brand1 from '../../../Assets/Images/brand1.jpg';
import brand2 from '../../../Assets/Images/brand2.jpg';


function BrandCarusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100'  src={brand1} alt='fist slide'/>
                  
                </Carousel.Item>

                <Carousel.Item>
                <img className='d-block w-100'  src={brand2} alt='fist slide'/>
                    
                </Carousel.Item>
               
            </Carousel>
        </div>
    )
}

export default BrandCarusel;