import React from 'react';
import FooterItem from './FooterItem';
import FooterSocials from './FooterSocials';


function Footer() {
  return (
    <>
      <footer className="bg-tertiary py-12">
        <div className="container mx-auto">
          <FooterItem />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2  text-sm pd-8 text-accent">
            <span> Copyright © 2022 Logo. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <FooterSocials />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer