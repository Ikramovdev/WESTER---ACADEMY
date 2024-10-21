import React from 'react'
import HeroTopBg from "../../assets/images/HeroTopBg.png"

const Hero = () => {
  return (
    <section className='mt-10 lg:mt-[24px] mb-[70px]'>
      <div className='container w-full lg:w-[1300px] mx-auto'>
        <div className='Hero-top-content relative mx-3 md:mx-10 lg:mx-0 pt-[20px] md:pt-[50px] lg:pt-[84px] pl-4 md:pl-[50px] lg:pl-[60px]'>
            <div>
                <h1 className='w-[300px] md:w-[500px] lg:w-[688px] font-bold text-[19px] md:text-[40px] lg:text-[35px] leading-[29px] md:leading-[50px] lg:leading-[40px] text-white mb-[34px] md:mb-[45px] lg:mb-[30px]'>Zamonaviy kasblar orqali o'z karyerangizni quring , biz bilan IT mutaxasisiga aylaning.</h1>
                <button className='w-[180px] lg:w-[260px] pt-[7px] lg:pt-[16.59px] pb-[7px] lg:pb-[18.41px] bg-[#212121] text-white font-semibold text-[17px] lg:text-[20px] leading-[24.8px] text-center rounded-[10px] mb-[17px] md:mb-[50px] lg:mb-[60px]'>Kasb tanlash</button>
            </div>
            <img className='hidden lg:block absolute bottom-[13px] right-[32px]' src={HeroTopBg} alt="HeroTopBackgroundImg" width={413} height={413} />
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Hero