import React, { useEffect, useState } from "react";
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
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars} from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import HashLoader from "react-spinners/HashLoader";
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
const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-10
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
})

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars 
}))

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));
export function TopCars(){
  const [isLoading, setisLoading] = useState(false) 
  const {setTopCars} = actionDispatch(useDispatch())
  const {topCars} = useSelector(stateSelector)
  //fetch cars from graphql calls
  const fetchCars = async () => {
    setisLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: ", err);
    });
    await wait(4000)

    console.log("Cars: ", cars);
    if (cars) setTopCars(cars);
    setisLoading(false);
  }
  useEffect(() => {
    fetchCars()
  }, [])
  // const testCar: ICar = {
  //   name: "Audi S3 Car",
  //   mileage: "10k",
  //   thumbnailSrc:
  //   "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  //   dailyPrice: 70,
  //   monthlyPrice: 1600,
  //   gearType: "Auto",
  //   gas: "Petrol",
  // };
  
  // const testCar2: ICar = {
  //   name: "HONDA cITY 5 Seater Car",
  //   mileage: "20k",
  //   thumbnailSrc:
  //   "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  //   dailyPrice: 50,
  //   monthlyPrice: 1500,
  //   gearType: "Auto",
  //   gas: "Petrol",
  // };
  // const cars = [
  //   <Car {...testCar} />,
  //   <Car  {...testCar2} />,
  //   <Car  {...testCar} />,
  //   <Car  {...testCar2} />,
  //   <Car {...testCar2} />,
  //   <Car  {...testCar} />,
  // ];
  
  const isEmptyTopCars = !topCars || topCars.length === 0
  let carSlides: JSX.Element[] = []; // Define carSlides before the if block


  const cars = topCars;
  carSlides = cars.map((car) => (
    <SwiperSlide><Car {...car} /></SwiperSlide>
  ));


  // const cars = !isEmptyTopCars && topCars.map((car)=> <Car{...car}/>)
  return <TopCarsContainer>
        <Title>Explore our top deals</Title>
        {isLoading && <LoadingContainer>
          <HashLoader loading color="#EF4444"/>
          </LoadingContainer>}
        {isEmptyTopCars && !isLoading &&  <EmptyCars>No car to show!</EmptyCars>}
        {!isEmptyTopCars && !isLoading && <CarsContainer>     
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
        </CarsContainer>}
    </TopCarsContainer>
}