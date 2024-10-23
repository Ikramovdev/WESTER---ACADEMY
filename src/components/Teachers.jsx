import React from 'react'
import ArrowL from "../assets/images/arrow-left.svg"
import ArrowR from "../assets/images/arrow-right.svg"
import Teachers1 from "../assets/images/Teachers1.png"
import Teachers2 from "../assets/images/Teachers2.png"
import Teachers3 from "../assets/images/Teachers3.png"
import Teachers4 from "../assets/images/Teachers4.png"


const Teachers = () => {
  return (
    <section className='mb-[107px]'>
      <div className='w-md lg:w-[1300px] mx-10 lg:mx-auto'>
          <div>
            <div className='hidden md:block mb-[87px]'>
                <div className='flex items-center justify-between mb-10 md:mb-[60px]'>
                  <h2 className='w-[300px] md:w-[500px] lg:w-[756px] font-bold text-[20px] md:text-[40px] lg:text-[52px] text-[#3F3F3F] leading-[30px] md:leading-[54px]'>O’z ishini ustalaridan bilim oling</h2>
                  <div className='hidden md:flex items-center gap-[12px]'>
                    <button className='w-[48px] border-[1px] border-black rounded-full p-[12px] hover:bg-green-500 duration-300'>
                      <img className='w-[24px] h-[24px]' src={ArrowL} alt="ArrowLeft" />
                    </button>
                    <button className='w-[48px] border-[1px] border-black p-[12px] rounded-full hover:bg-green-500 duration-300'>
                      <img className='w-[24px] h-[24px]' src={ArrowR} alt="ArrowRight" />
                    </button>
                  </div>
                </div>
                <ul className='lg:mx-10 flex items-center gap-7 lg:gap-[47px]'>
                  <li className='w-[500px] lg:w-[261px] bg-slate-100 hover:bg-green-500 hover:scale-[1.2] duration-300 rounded-[27px] relative'>
                    <img className='w-full' src={Teachers1} alt="Teachers-img" />
                    <dir className={'absolute bottom-[-40px] lg:bottom-[-20px] left-0 right-0 bg-[#EFFFFB] py-[10px] lg:py-[19px] px-[30px] lg:px-[43px] rounded-br-[27px] rounded-bl-[27px] text-center'}>
                        <h3 className='font-bold text-[18px] lg:text-[23px] text-[#212121] leading-[18px] lg:leading-[24.3px] mb-2'>Dostonbek Muxtorov</h3>
                        <p className='font-medium text-[15px] lg:text-[15px] leading-[15px] lg:leading-[18px] text-[#3F3F3F]'>Frontend Developer</p>
                    </dir>
                  </li>
                  <li className='md:w-[500px] lg:w-[261px] bg-slate-200 hover:bg-green-500 hover:scale-[1.2] duration-300 rounded-[27px] relative'>
                    <img className='w-full' src={Teachers2} alt="Teachers-img" />
                    <dir className={'absolute bottom-[-40px] lg:bottom-[-20px] left-0 right-0 bg-[#EFFFFB] py-[10px] lg:py-[19px] px-[30px] lg:px-[43px] rounded-br-[27px] rounded-bl-[27px] text-center'}>
                        <h3 className='font-bold text-[18px] lg:text-[23px] text-[#212121] leading-[18px] lg:leading-[24.3px] mb-2'>Islambek Sharipov</h3>
                        <p className='font-medium text-[15px] leading-[18px] text-[#3F3F3F]'>Manager</p>
                    </dir>
                  </li>
                  <li className='md:w-[500px] lg:w-[261px] bg-slate-200 hover:bg-green-500 hover:scale-[1.2] duration-300 rounded-[27px] relative'>
                    <img className='w-full' src={Teachers3} alt="Teachers-img" />
                    <dir className={'absolute bottom-[-40px] lg:bottom-[-20px] left-0 right-0 bg-[#EFFFFB] py-[10px] lg:py-[19px] px-[30px] lg:px-[43px] rounded-br-[27px] rounded-bl-[27px] text-center'}>
                        <h3 className='font-bold text-[18px] lg:text-[23px] text-[#212121] leading-[18px] lg:leading-[24.3px] mb-2'>Nosirbek Eraliyev</h3>
                        <p className='font-medium text-[15px] leading-[18px] text-[#3F3F3F]'>Foundation</p>
                    </dir>
                  </li>
                  <li className='md:w-[500px] lg:w-[261px] bg-slate-200 hover:bg-green-500 hover:scale-[1.2] duration-300 rounded-[27px] relative'>
                    <img className='w-full' src={Teachers4} alt="Teachers-img" />
                    <dir className={'absolute bottom-[-40px] lg:bottom-[-20px] left-0 right-0 bg-[#EFFFFB] py-[10px] lg:py-[19px] px-[30px] lg:px-[43px] rounded-br-[27px] rounded-bl-[27px] text-center'}>
                        <h3 className='font-bold text-[18px] lg:text-[23px] text-[#212121] leading-[18px] lg:leading-[24.3px] mb-2'>Abdurahmon Rashidov</h3>
                        <p className='font-medium text-[15px] leading-[18px] text-[#3F3F3F]'>Foundation</p>
                    </dir>
                  </li>
                </ul>
            </div>
            <div >
              <iframe className='w-full h-[500px] rounded-lg' src="https://www.youtube.com/embed/xgzrYNyJydU?si=2n77PmqaqL6EBFgu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Teachers