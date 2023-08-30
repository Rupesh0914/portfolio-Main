// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'tiGotle',
          path: '/thumb1.jpg',
          link: 'https://www.easyfinancial.com/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://www.goeasy.com/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://goeasyconnect.com/'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://insyght.ai/'
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import React from 'react';

const WorkSlider = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className='hidden md:block'>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='h-[280px] sm:h-[480px]'
        >
          {workSlider.slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                  {slide.images.map((image, index) => {
                    return (
                      <div
                        className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                        key={index}
                      >
                        <a href={image.link} target='_blank' rel='noopener noreferrer'>
                          <div className='flex items-center justify-center relative overflow-hidden group'>
                            <Image src={image.path} width={500} height={300} alt='' />
                            <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                <div className='delay-100'>LIVE</div>
                                <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                  PROJECT
                                </div>
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                  <BsArrowRight />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className='md:hidden'>
        {workSlider.slides.map((slide, index) => {
          return (
            <Swiper key={index} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]}>
              {slide.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <a href={image.link} target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          <Image src={image.path} width={500} height={300} alt='' />
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              <div className='delay-100'>LIVE</div>
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                PROJECT
                              </div>
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSlider;

