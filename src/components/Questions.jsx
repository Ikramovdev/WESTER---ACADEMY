import React from 'react'
import QuestionsImg from '../assets/images/questions-img.png'

const Questions = () => {
  return (
    <section>
        <div className='md:w-md lg:w-[1300px] mx-3 md:mx-10 lg:mx-auto'>
            <div>
                <h2 className='hidden md:block font-semibold text-[48px] text-[#3F3F3F] text-center leading-[58px] mb-10 lg:mb-[63px]'>Bu qanday bo’ladi ?</h2>
                <div className='w-full pt-5 md:pt-10 lg:pt-[61px] px-3 md:px-5 lg:px-[32px] pb-[42px] rounded-[20px] bg-[#EEFBF8] flex flex-col-reverse gap-10 lg:gap-0 lg:relative mb-[62px]'>
                    <div className='w-full lg:w-[424px] rounded-[32px] bg-white pt-5 md:pt-[44px] pr-5 md:pr-[30px] pb-10 md:pb-[72px] pl-5 md:pl-[40px] border-[2px] border-gray-400 shadow-md shadow-gray-400 border-opacity-[70%] sticky z-10'>
                        <h3 className='font-bold text-[20px] text-[#3F3F3F] leading-[23.4px] mb-[27px]'>IT da o’zingiz uchun eng ma’qul kasb egasi bo’ling</h3>
                        <ul className='space-y-[10px]'>
                            <li className='font-medium text-[17.58px] text-[#191816] leading-[23.4px]'>Bizning ekspertlar siz bilan suhbatlashish va 1 oy davomidagi tayyorlov kursi orqali siz uchun IT da mos keluvchi kasbni aniqlab berishadi</li>
                            <li className='font-medium text-[17.58px] text-[#191816] leading-[23.4px]'>Natijada sizda qobilyatlaringizga qarab mos keluvchi zamonaviy kasb, yoqtirgan ishingiz bo’ladi</li>
                            <li className='font-medium text-[17.58px] text-[#191816] leading-[23.4px]'>Quyidagi grafikda siz bu qanday ketma-ketlikda amalga oshishini ko’rishingiz mumkin</li>
                        </ul>
                    </div>
                    <div className='lg:absolute bottom-[43px] z-0 right-[47px] bg-white rounded-[20px]'>
                        <img className='w-full md:w-[813px] h-[200px] md:h-[444px]' src={QuestionsImg} alt="QuestionsImg" />
                    </div>
                </div>
            </div>
            <div className='mb-[87px]'>
                <h2 className='w-full md:w-[491px] font-bold text-[25px] md:text-[35px] text-[#3F3F3F] leading-[28px] md:leading-[45px] mb-[25px] md:mb-[17px]'>Tajriba ortishi  bilan maosh ortib boradi...</h2>
                <p className='font-medium text-[14px] text-[#3F3F3F] leading-[20px] md:leading-[32px] mb-[16px]'>Qanday ishlash mumkin va birinchi ishni qanday topiladi ?</p>
                <ul className='space-y-2 mb-10'>
                        <li className='w-full md:w-[550px] lg:w-[961px] bg-[#EEFBF8] p-[8px] rounded-[8px]'>
                            <p className='font-medium text-[13px] leading-[19px] text-black opacity-[85%]'>Uydan yoki dunyoni istalgan nuqatasida turib ishlash mumkin.</p>
                        </li>
                        <li className='w-full md:w-[550px] lg:w-[961px] bg-[#EEFBF8] p-[8px] rounded-[8px]'>
                            <p className='font-medium text-[13px] leading-[19px] text-black opacity-[85%]'>Ish o’rinlari ko’p va ular yildan yilga ortib bormoqda, hh.uz saytida tanlagan yo’nalishingiz uchun vakansiyalar mavjud.</p>
                        </li>
                        <li className='w-full md:w-[550px] lg:w-[961px] bg-[#EEFBF8] p-[8px] rounded-[8px]'>
                            <p className='font-medium text-[13px] leading-[19px] text-black opacity-[85%]'>Bundan tashqari biz faol bitiruvchilarni suhbatga tayyorlaymiz va turli outsorsing kompaniyalarga suhbatga yo’naltiramiz.</p>
                        </li>
                </ul>
                <div className='space-y-[15px] mb-10'>
                        <h3 className='font-semibold text-[26.47px] text-[#3F3F3F] leading-[32px]'>O’rtacha maosh</h3>
                        <p className='font-medium text-[16.88px] text-[#3F3F3F] leading-[22px]'>Kurs oxirida siz intern hamda junior pozitsiyalariga ishga topshiringiz mumkin.</p>
                        <p className='font-medium text-[15px] md:text-[11.63px] text-black opacity-[50%] leading-[16px]'>Manba:<a href='https://hh.uz' className='border-b-[1px] border-black border-opacity-[50%] pb-0'>hh.uz</a></p>
                </div>
                <ul className='space-y-4'>
                    <li className='w-[150px] md:w-[350px] lg:w-[603px] bg-[#F5F5F5] p-[16px] rounded-[16px]'>
                        <strong className='font-bold text-[25px] md:text-[37.81px] text-[#3F3F3F] leading-[44px] mb-1'>$ 312,24</strong>
                        <p className='font-medium text-black opacity-[85%] leading-[20px]'>Junior</p>
                    </li>
                    <li className='w-[270px] md:w-[500px] lg:w-[904px] bg-[#F5F5F5] p-[16px] rounded-[16px]'>
                            <strong className='font-bold text-[25px] md:text-[37.81px] text-[#E7C13D] leading-[44px] mb-1'>$ 836,36</strong>
                            <p className='font-medium text-[14.75px] text-black opacity-[85%] leading-[20px]'>Middle</p>
                    </li>
                    <li className='w-[350px] md:w-[650px] lg:w-[1073px] bg-[#F5F5F5] p-[16px] rounded-[16px]'>
                            <strong className='font-bold text-[25px] md:text-[37.81px] text-[#21D789] leading-[44px] mb-1'>$ 1 170,91</strong>
                            <p className='font-medium text-[14.75px] text-black opacity-[85%] leading-[20px]'>Senior</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Questions