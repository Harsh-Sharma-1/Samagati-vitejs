import React, { useEffect, useState } from "react";
import { API_TOKEN } from "../../../../config";
import axios from "axios";
import Slider from "react-slick";
import styles from "./styles.module.scss";

const Item: React.FC<any> = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <img src="./image/pexels.jpg" alt="" />
        <div>
          <p>
            <mark>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that
            </mark>
          </p>
        </div>
      </div>
    </div>
  );
};

const Corousal: React.FC<any> = () => {
  const [carousel, setCarousel] = useState<any>({});

  useEffect(() => {
    async function getdata() {
      const config = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      const res = await axios.get(
        "http://localhost:1337/api/carousels?populate=*",
        config
      );
      const images = res.data;
      setCarousel(images);
    }
    getdata();
  }, []);

  console.log(carousel);

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Slider>
    </div>
  );
};

export default Corousal;