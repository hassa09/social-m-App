import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'reac-icons';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/utils/vidShare.png'
function navbar() {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[130px]'>
          <Image 
            className='cursor-pointer'
            src={Logo}
            alt="vidshare"
            layout='responsive'
          
          
          />
        </div>
      
      </Link>
    </div>
  )
}

export default navbar
