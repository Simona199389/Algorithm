import React from 'react';

export default function Footer() {
  return (
    <footer className='h-[4%] w-[100%] pl-[4%] pr-[2%] bg-black flex items-center justify-between fixed bottom-0'>
      <div className=' text-white'>
        <p>&copy; Всички права запазени 2004-2018</p>
      </div>
      <div className='w-[23.5%] text-white'>
        <p>Design and development by <span className='text-customGreen'>for the people creative studio</span></p>
      </div>
    </footer>
  );
}
