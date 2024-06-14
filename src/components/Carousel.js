import React, { useEffect, useState } from 'react';
import "../styles/Carousel.css";
import axiosService from '../services/configAxios';
import { set } from 'react-hook-form';

const Carousel = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [items, setItems] = useState([
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718340085/upload_image/klbot4tyhaxpm8zgk91l.jpg)',
    //         name: 'Switzerland',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718340085/upload_image/klbot4tyhaxpm8zgk91l.jpg)',
    //         name: 'Nguyễn Tùng Dương',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718263026/upload_image/cegd6sd4ndnqjbvmc6zv.jpg)',
    //         name: 'Iceland',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718263026/upload_image/cegd6sd4ndnqjbvmc6zv.jpg)',
    //         name: 'Australia',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718263026/upload_image/cegd6sd4ndnqjbvmc6zv.jpg)',
    //         name: 'Netherland',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    //     {
    //         backgroundImage: 'url(https://res.cloudinary.com/di9iwkkrc/image/upload/v1718263026/upload_image/cegd6sd4ndnqjbvmc6zv.jpg)',
    //         name: 'Ireland',
    //         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    //     },
    // ]);

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
                            <button>See More</button>
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
