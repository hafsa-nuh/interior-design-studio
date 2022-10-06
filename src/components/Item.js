import React from 'react'

function Item({links, title}) {
  return (
    <>
      <ul>
        <h1 className='mb-1 font-semibold' >{title}</h1>
        {links.map((item)=>(
            <li key={item.name} >
                <a href={item.link}>{item.name}</a>
            </li>
        ))}
      </ul>
    </>
  );
}

export default Item