import React from 'react'
import LanguageDevs from "../assets/images/LanguageIcon.svg"
import LanguageDevs2 from "../assets/images/LanguageIcon2.svg"
import TeachersIcon from "../assets/images/teachersIcon.svg"
import UsersIcon1 from "../assets/images/usersicon1.svg"
import UsersIcon2 from "../assets/images/usersicon2.svg"
import UsersIcon3 from "../assets/images/usersicon3.svg"
import Arrow from "../assets/images/arrow.svg"
import PhoneImg from "../assets/images/phone.png"
  
const Drection = () => {
  return (
    <section id='drection' className='mb-[127px]'>
        <div className='w-full lg:w-[1300px] mx-auto'>
            <div className='mx-3 md:mx-10 mb-[116px]'>
                <h2 className='font-semibold text-[35px] md:text-[40px] lg:text-[48px] text-[#3F3F3F] text-center leading-[58px] mb-[47px]'>Ta’lim yo’nalishlari</h2>
                <ul className='flex items-center flex-wrap md:gap-5 lg:gap-10'>
                    <li className='drection-item1 w-full md:w-[392px] lg:w-[560px] pt-[37px] px-3 md:px-5 lg:px-[30px] pb-[28px] bg-white hover:bg-[#272726] hover:text-white rounded-[20px] duration-300'>
                        <h3 className='font-semibold text-[40px] leading-[51px] mb-[67px]'>Front-End</h3>
                        <img className='w-[180px] h-[32px] mb-[23px]' src={LanguageDevs} alt="LanguageDevs" />
                        <div className='flex flex-col md:flex md:flex-row'>
                            <img className='w-[92px] h-[52px] mb-[10px] md:mb-0 mr-0 lg:mr-[80px]' src={TeachersIcon} alt="teachersIcon" />
                            <div className='flex items-center justify-between'>
                                <div className='border-none md:border-l-[2px] md:border-black hover:border-white  pl-[15px] md:pr-[60px] gap-[5px]'>
                                    <p className='font-medium text-[15px] md:text-[18px] leading-[23px]'>3+ mentorlar </p>
                                    <p className='font-medium text-[15px] md:text-[18px] leading-[23px]'>TOP kompaniyalardan</p>
                                </div>
                                <button>
                                    <img className='w-[50px] h-[50px]' src={Arrow} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='drection-item2 w-full md:w-[392px] lg:w-[560px] pt-[37px] px-3 md:px-5 lg:px-[30px] pb-[28px] bg-white hover:bg-[#272726] hover:text-white rounded-[20px] duration-300'>
                        <h3 className='font-semibold text-[40px] leading-[51px] mb-[67px]'>Back-End</h3>
                        <img className='w-[180px] h-[32px] mb-[23px]' src={LanguageDevs2} alt="LanguageDevs2" />
                        <div className='flex flex-col md:flex md:flex-row'>
                            <img className='w-[92px] h-[52px] mb-[10px] md:mb-0 mr-0 lg:mr-[80px]' src={TeachersIcon} alt="teachersIcon" />
                            <div className='flex items-center justify-between'>
                                <div className='border-none md:border-l-[2px] border-black hover:border-white  pl-[15px] md:pr-[60px] gap-[5px]'>
                                    <p className='font-medium text-[15px] md:text-[18px] leading-[23px]'>3+ mentorlar</p>
                                    <p className='font-medium text-[15px] md:text-[18px] leading-[23px]'>TOP kompaniyalardan</p>
                                </div>
                                <button>
                                    <img className='w-[50px] h-[50px]' src={Arrow} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='drection-item3 w-full md:w-[253px] lg:w-[360px] py-[30px] p-[30px] bg-white hover:bg-[#272726] hover:text-white rounded-[20px] duration-300'>
                        <h3 className='font-medium text-[21px] lg:text-[32px] leading-[30px] lg:leading-[40.8px] mb-[25px]'>Computer Science</h3>
                        <div className='mb-[75px]'>
                            <p className='font-medium text-[18px] leading-[23px]'>2+ mentorlar</p>
                            <p className='font-medium text-[18px] leading-[23px]'>magistr, doktorant</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <img className='w-[92px] h-[52px]' src={UsersIcon1} alt="UsersIcon2" />
                            <button>
                                <img className='w-[50px] h-[50px]' src={Arrow} alt="Arrow" />
                            </button>
                        </div>
                    </li>
                    <li className='drection-item4 w-full md:w-[253px] lg:w-[360px] py-[30px] p-[30px] bg-white hover:bg-[#272726] hover:text-white rounded-[20px] duration-300'>
                        <h3 className='font-medium text-[32px] leading-[40.8px] mb-[23px]'>Dizayn</h3>
                        <div className='mb-[75px]'>
                            <p className='font-medium text-[18px] leading-[23px]'>3+ mentorlar</p>
                            <p className='font-medium text-[18px] leading-[23px]'>TOP kompaniyalardan</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <img className='w-[92px] h-[52px]' src={UsersIcon2} alt="UsersIcon2" />
                            <button>
                                <img className='w-[50px] h-[50px]' src={Arrow} alt="Arrow" />
                            </button>
                        </div>
                    </li>
                    <li className='drection-item5 w-full md:w-[253px] lg:w-[360px] py-[30px] p-[30px] bg-white hover:bg-[#272726] hover:text-white rounded-[20px] duration-300'>
                        <h3 className='font-medium text-[32px] leading-[40.8px] mb-[23px]'>Marketing</h3>
                        <div className='mb-[75px]'>
                            <p className='font-medium text-[18px] leading-[23px]'>2+ mentorlar</p>
                            <p className='font-medium text-[18px] leading-[23px]'>magistr, doktorant</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <img className='w-[92px] h-[52px]' src={UsersIcon3} alt="UsersIcon2" />
                            <button>
                                <img className='w-[50px] h-[50px]' src={Arrow} alt="Arrow" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='lg:w-[1300px] py-10 md:py-[44px] px-5 lg:pl-[40px] rounded-[20px] mx-3 md:ml-[30px] md:mr-[30px] lg:mx-0 identifier relative'>
                <div>
                    <h2 className='w-full lg:w-[620px] text-center lg:text-left font-medium text-[30px] md:text-[50px] lg:text-[44px] text-[#212121] leading-[40px] md:leading-[52px] mb-[11px]'>Agar qaysi yo’nalishni tanlashni bilmasangiz</h2>
                    <div className='w-[300px] md:w-[390px] bg-white rounded-[20px] lg:rotate-[-1.15deg] pt-[1px] pl-[24px] mb-[15.77px] mx-auto lg:mx-0'>
                        <p className='font-medium text-[33px] md:text-[44px] text-[#212121] leading-[52px]'>kasb aniqlovchi </p>
                    </div>
                    <p className='font-medium text-[33px] md:text-[44px] text-[#212121] leading-[52px] mb-[36px] text-center lg:text-left'>testimizdan o’ting</p>
                    <a className='w-[260px] block text-center mx-auto lg:mx-0 lg:inline-block bg-[#212121] rounded-[10px] py-[18px] font-semibold text-[20px] text-white leading-[24.8px]' href=''>Testni boshlash</a>
                </div>
                <img className='hidden lg:block absolute bottom-[-34px] right-[46px] w-[325px] h-[476px]' src={PhoneImg} alt="PhoneImg" />
            </div>
        </div>
    </section>
  )
}

export default Drection