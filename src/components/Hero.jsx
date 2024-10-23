import React from 'react'
import HeroTopBg from "../assets/images/HeroTopBg.png"
import BookmarkIco from "../assets/images/bookmark-favico.svg"
import MailIcon from "../assets/images/mail-icon.svg"

const Hero = () => {
  return (
    <section className='mt-10 lg:mt-[24px]'>
      <div className='container w-full lg:w-[1300px] mx-auto'>
        <div className='Hero-top-content relative mx-3 md:mx-10 lg:mx-0 pt-[20px] md:pt-[50px] lg:pt-[84px] pl-4 md:pl-[50px] lg:pl-[60px] mb-[40px]'>
            <div>
                <h1 className='w-[300px] md:w-[500px] lg:w-[688px] font-bold text-[19px] md:text-[40px] lg:text-[35px] leading-[29px] md:leading-[50px] lg:leading-[40px] text-white mb-[34px] md:mb-[45px] lg:mb-[30px]'>Zamonaviy kasblar orqali o'z karyerangizni quring , biz bilan IT mutaxasisiga aylaning.</h1>
                <button className='w-[180px] lg:w-[260px] pt-[7px] lg:pt-[16.59px] pb-[7px] lg:pb-[18.41px] bg-[#212121] text-white font-semibold text-[17px] lg:text-[20px] leading-[24.8px] text-center rounded-[10px] mb-[17px] md:mb-[50px] lg:mb-[60px]'>Kasb tanlash</button>
            </div>
            <img className='hidden lg:block absolute bottom-[13px] right-[32px]' src={HeroTopBg} alt="HeroTopBackgroundImg" width={413} height={413} />
        </div>
        <div className='mb-[70px] mx-4 md:mx-[60px] lg:mx-0'>
          <h2 className='font-medium text-[35px] lg:text-[48px] text-[#3F3F3F] text-center leading-[56px] mb-[30px] lg:mb-[80px]'>E'tibor bering !</h2>
          <ul className='flex items-center justify-center flex-wrap lg:flex-nowrap lg:items-center gap-[30px] lg:space-x-[40px]'>
            <li className='w-full md:w-[300px] lg:w-[400px] pt-[30px] pr-[24px] pb-[35px] pl-[16px] bg-[#EEFBF8] rounded-[32px] mr-[10px]'>
                <div className='flex items-center space-x-[3px] mb-5'>
                    <img className='w-[100px] h-[100px] mb-[26px]' src={BookmarkIco} alt="hero-itemImg"width={100} height={100}/>
                    <h3 className='font-bold text-[18px] lg:text-[27.56px] text-[#212121] leading-[25px] lg:leading-[30.8px]'>Har bir o'quvchimiz uchun personal yondashuv</h3>
                </div>
                <p className='font-medium text-[15px] lg:text-[19.38px] text-[#3F3F3F] leading-[23px] pl-[24px]'>Tendensiyalarga amal qilgan holatda bilimlar berish va suhbat jarayonlariga tayyorlash , real loyihalarga jalb qilish, tajribaga asoslangan kasbiy maslahatlar berish</p>
            </li> 
            <li className='w-full md:w-[300px] lg:w-[400px] experience-item rounded-[32px] pt-[30px] lg:pt-[40px] pb-[200px] px-[20px] lg:px-[40px] relative'>
              <h3 className='font-bold text-[20px] lg:text-[27.34px] text-white leading-[25px] lg:leading-[30.8px] mb-[50px] lg:mb-[20px] text-center md:text-start lg:text-left'>Ta'limdagi ko'p yillik tajriba va unikal o'quv metodikalari</h3>
              <p className='absolute bottom-[60px] lg:bottom-[60px] right-[75px] lg:right-[32px] font-semibold text-[230px] lg:text-[250px] text-white opacity-[55%] leading-[30.8px]'>5</p>
            </li>
            <li className='w-full md:w-[350px] lg:w-[400px] pr-[20px] lg:pr-[15px] pb-[53px] bg-[#EEFBF8] rounded-[32px] flex flex-col space-y-[33px]'>
                <div className='flex space-x-[0px] lg:space-x-[20px] pt-[10px] pl-5 lg:pl-2'>
                    <img className='w-[80px] lg:w-[100px] pt-[15px] lg:pt-0' src={MailIcon} alt="hero-itemImg" width={100}/>
                    <h3 className='font-bold text-[20px] lg:text-[27.56px] text-[#212121] leading-[25px] lg:leading-[30.8px] mt-[25px] lg:mt-[43px]'>Hamkorlarimizga amaliyot va ishga yo’naltirish</h3>
                </div>
                <p className='font-medium text-[18px] lg:text-[19.38px] text-[#3F3F3F] leading-[23px] pl-[32px]'>Amaliyot orqali bitiruvchi o’quvchilarni ish bilan ta’minlash va ularni birinchi daromadlarini topishda ko’maklashish. 
                Suhbatga tayyorlash.</p>
            </li>
          </ul>
        </div>
        <div className='bg-[#EEFBF8] pt-[50px] px-[60px] pb-[79px] rounded-[16px]'>
            
        </div>
      </div>
    </section>
  )
}

export default Hero