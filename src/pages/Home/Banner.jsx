import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css';
import IMG from '../../../public/assets/banner/skin.jpg';
import IMG1 from '../../../public/assets/banner/skin-1.jpg';
import IMG2 from '../../../public/assets/banner/skin-2.jpg';
import IMG3 from '../../../public/assets/banner/skin-3.jpg';

export function Banner() {
    return (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            <div>
                <img src={IMG} alt="Skin Banner 1" />
            </div>
            <div>
                <img src={IMG1} alt="Skin Banner 2" />
            </div>
            <div>
                <img src={IMG2} alt="Skin Banner 3" />
            </div>
            <div>
                <img src={IMG3} alt="Skin Banner 4" />
            </div>
        </Carousel>
    );
}
