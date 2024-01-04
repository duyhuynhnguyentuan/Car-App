import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro"; 
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import carService from "../../services/carService";
const TopCarsContainer = styled.div`
${tw`
max-w-screen-lg
w-full
flex
flex-col
items-center
justify-center
px-4 
md:px-0  
mb-10 
`}
`

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const CarsContainer = styled.div`
${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7 
    md:mt-10 
`}
`




export function TopCars(){
  const fetchCars = async () => {
    const cars = await carService.getCars().catch((err) => {
      console.log(err);
    });
    console.log("Cars", cars)
  }
  useEffect(() => {
    fetchCars()
  }, [])
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };
  
  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };
  const cars = [
    <Car {...testCar} />,
    <Car  {...testCar2} />,
    <Car  {...testCar} />,
    <Car  {...testCar2} />,
    <Car {...testCar2} />,
    <Car  {...testCar} />,
  ];

  const carSlides = cars.map((car) => (
    <SwiperSlide>{car}</SwiperSlide>
  ));
  return <TopCarsContainer>
        <Title>Explore our top deals</Title>
        <CarsContainer>     
          <Swiper
        centeredSlides={true} 
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
         
          900: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: false 
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carSlides}
      </Swiper>
        </CarsContainer>
    </TopCarsContainer>
}