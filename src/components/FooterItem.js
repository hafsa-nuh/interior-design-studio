import React from 'react';
import Item from './Item';
import {product,resources, company, support} from "../data"

function FooterItem() {

  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item links={product} title='Product' />
      <Item links={resources} title='Resources' />
      <Item links={company} title='Company' />
      <Item links={support} title='Spport' />
    </div>
  );
}

export default FooterItem
