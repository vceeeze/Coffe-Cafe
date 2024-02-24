import React from 'react'
import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/website/coffee-texture.jpg";
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"



const Banner = () => {
     
    const bgImage = {
        backgroundImage: `url(${BgTexture})`,
        backgroundColor: "#270c03",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div>
              <img
                src={BannerImg}
                alt=""
                className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"
              />
            </div>
            {/* Text content Section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Bien coffee
              </h1>
              <p className='text-sm text-gray-500 tracking-wide leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                doloremque sint assumenda excepturi, perspiciatis inventore
                repudiandae ad omnis rerum cumque laboriosam quidem sit, illum
                et obcaecati accusamus facilis alias odit.
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-5'>
                    <div className='flex items-center gap-3 '>
                        <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                        <span>Premium Coffee</span>
                    </div>
                     <div className='flex items-center gap-3 '>
                        <IoFastFood className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100'/>
                        <span>Premium Coffee</span>
                    </div>
                     <div className='flex items-center gap-3 '>
                        <GiFoodTruck className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100'/>
                        <span>Premium Coffee</span>
                    </div>
                   
                </div>
                <div className='space-y-3 border-l-4 border-primary/50 pl-6'>
                    <h1 className='text-2xl font-semibold font-cursive'>Tea Lover</h1>
                    <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magnam voluptatibus eveniet ipsam, perferendis
                         libero nobis minus explicabo facere eius.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner