import React, { useEffect, useState } from 'react';
import "../styles/Carousel.css";
import axiosService from '../services/configAxios';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const fechDataBanner = async () => {
        try {
          const response = await axiosService.get("/admin-show-all-banner");
          console.log(response.data.data);
          setBanners(response.data.data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
        }
      };
      useEffect(() => {
        fechDataBanner();
      }, []);
    
    const handleNextClick = () => {
        setBanners(prevItems => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
    };

    const handlePrevClick = () => {
        setBanners(prevItems => {
            const last = prevItems[prevItems.length - 1];
            const rest = prevItems.slice(0, prevItems.length - 1);
            return [last, ...rest];
        });
    };

    return (
        <div className="container slider-content">
            <div className="slide">
                {banners.map((item, index) => (
                    <div key={index} className="item" style={{ backgroundImage: `url(${item.image_url})` }}>
                        <div className="content">
                            <div className="name">{item.title}</div>
                            <div className="des">{item.sub_title}</div>
                            <Link to='/products'>
                            <button>See More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button">
                <button className="prev" onClick={handlePrevClick}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="next" onClick={handleNextClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
