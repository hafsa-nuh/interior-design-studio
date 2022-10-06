import React from 'react';
import { icons } from "../data";

function FooterSocials() {
  return (
    <ul className="flex space-x-6">
      {icons.map((icon, id) => {
        return (
          <li key={id} className="items-center text-accent p-3 cursor-pointer inline-flex rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 hover:bg-green duration-300">
            <a className="text-base" href={icon.href}>
              {icon.icon}
            </a>
          </li>
        );
      }
      )}
    </ul>
  );
}

export default FooterSocials