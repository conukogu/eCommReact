import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper'
import  'swiper/css/bundle';
import './main.css';
import ImageData from './Pics';
import Blurb from './ProductBlurb'
import CheckoutButton from './CheckoutButton'
import Axios from 'axios'



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);





function Products() {


   useEffect(() => {
     // Applying on mount
     document.body.style.overflow = "hidden";
     // Applying on unmount
     return () => {
       document.body.style.overflow = "visible";
     };
   }, []);

   
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  
  const slides =[];

  for (let i = 0; i < 12; i += 1){
    slides.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt = {`Slide ${i}`}/>
      </SwiperSlide>
    );
  }

  const thumbs =[];

  for (let i = 0; i < 12; i += 1){
    thumbs.push(
      <SwiperSlide  
      key={`slide-${i}`} tag= "li">
        {/* <img 
        src={`https://picsum.photos/id/${i}/163/100`} 
        className='hope2' 
        alt = {`Thumbnail ${i}`}/> */}
        <div className='hope2'> 
        <CheckoutButton className="homeCartbutton"/>
        { Blurb[i]} 
        </div>
       
      </SwiperSlide>
    );
  }

  const slides2 =[];
  
  for (let i = 5; i < 10; i += 1){
    slides2.push(
      <SwiperSlide  key={`slide-${i}`} tag= "li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt = {`Slide ${i}`}/>
      </SwiperSlide>
    );
  }

  const slides3 =[]

  for (let i = 0; i < 12; i += 1){
    slides3.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={ImageData[i]}
          alt={`Thumbnail ${i}`}
          className="hope"
        />
      </SwiperSlide>
    );
  }

    const [productList, setProductList] = useState([]);
  


  return (
    <React.Fragment>
      <Swiper
        id="main"
        // thumbs={{swiper: thumbsSwiper}}
        // controller={{control: thumbsSwiper}}
        onSwiper={setControlledSwiper}
        controller={{control: thumbsSwiper}}
        tag="section"
        wrapperTag="ul"
          // navigation 
        // pagination
       
        
        // direction="vertical"
        // loop={true}
        height={1}
        spaceBetween={0}
        slidesPerView="auto"
        onInit={(swiper) => console.log(`Swiper initialized`, swiper)}
        onSlideChange={(swiper) =>
          console.log(`Slide index changed to:`, swiper.activeIndex)
        }
        onReachEnd={() => console.log("Swiper end reached")}
        onReachBeginning={() => console.log("Swiper start reached")}
      >
        {slides3}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={1}
        // direction="vertical"
        // loop={true}
        onSwiper={setThumbsSwiper}
        navigation
        // thumbs={{swiper: controlledSwiper}}
        controller={{control: controlledSwiper}}
      >
        {thumbs}
      </Swiper>

      {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper> */}
    </React.Fragment>
  );
}

export default Products;
