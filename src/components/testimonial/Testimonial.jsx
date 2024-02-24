import React from 'react'
import Slider from "react-slick"

const Testimonial = () => {

    const TestimonialData = [
      {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
        aosDelay: "100",
        img: "https://picsum.photos/101/101",
      },
      {
        id: 2,
        name: "Chibuike",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "300",
        img: "https://picsum.photos/102/102",
      },
      {
        id: 3,
        name: "Eze",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "500",
        img: "https://picsum.photos/104/104",
      },
    ];

    const settings = {
        dots: true,
        arrow:false,
        infinite: true,
        speed:500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint:1000,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1,
                    initialSlide:2,
                }
            },
             {
                breakpoint:1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                }
            },
             {
                breakpoint:640,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                }
            }
        ]
    }

  return (
    <div className='py-14 mb-10'>
      <div className="container">
        {/* header section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonial
          </h1>
        </div>
        {/* Testimonials cards section */}
        <div>
            <Slider {...settings}>
                {
                    TestimonialData.map((data, index) => {
                        return <div className='my-6' key={data.id}>
                            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl 
                            bg-primary/10 relative'>
                                {/* Image section */}
                                <div className='mb-4'>
                                    <img src={data.img} alt=""
                                    className='rounded-full w-20 h-20'
                                    />
                                </div>
                                {/* content section */}
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500 '>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/60 font-cursive'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial