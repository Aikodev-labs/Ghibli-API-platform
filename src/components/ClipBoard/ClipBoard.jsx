import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardDocument } from "react-icons/hi2";


const ClipBoard = ( ) => {

  return (

    <section className='w-[510px] h-[43px] bg-white flex justify-between items-center px-[15px] rounded-[4px]'>

    <p className='text-[16px] text-cyan-700'>
      <span className='font-bold border-b-[1px] border-b-cyan-700'>https:/</span>
      <span className='font-normal'>ghibliapi.com/api</span></p>
    
      <CopyToClipboard text='https:/ghibliapi.com/api'>
    
        <button>
          <HiOutlineClipboardDocument className='text-gray-600 w-[18px] h-[18px]' />
        </button>
    
        </CopyToClipboard>
    
      </section>

    
  )
}

export default ClipBoard