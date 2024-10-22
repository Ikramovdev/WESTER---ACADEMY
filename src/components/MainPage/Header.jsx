import React from 'react'
import SiteLogo from "../../assets/images/SiteLogo.svg"
import { CallIcon } from '../../assets/images/Icon'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#2e2e2e] pt-[15px] md:pt-[18px] pb-[20px] md:pb-[23px] fixed z-50 w-full top-0'>
        <div className='container w-full lg:w-[1300px] mx-auto'>
          <div className='flex items-center justify-between mx-[12px] md:mx-9 lg:mx-0'>
            <img className='w-[160px] md:w-[180px] lg:w-[233px] h-[60px] lg:h-[85px] cursor-text' src={SiteLogo} alt="SiteLogo" width={233} height={85}/>
            <NavLink to={`tel:+998932609010`} className={`flex items-center gap-[3.63px]`}>
                <CallIcon/>
                <span className='text-white font-bold text-[16px] md:text-[17px] lg:text-[24px] leading-[20px]'>+998 93-260-90-10</span>
            </NavLink>
          </div>
        </div>
    </header>
  )
}

export default Header