import React from 'react';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <>
      <footer className="bg-tertiary py-12">
        <div className="container mx-auto">
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb_6 lg:leading-normal font-semibold md:w-2/5' ><span className='text-teal-400' >free</span></h1>
            </div> 
<FooterItem/>
        </div>
      </footer>
    </>
  );
}

export default Footer