import React from 'react'

function FooterSocials({icons}) {
  return (
    <ul className="flex space-x-6">
      {icons.map((icon, id) => {
        return (
          <li key={id} className="flex justify-center items-center text-accent">
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