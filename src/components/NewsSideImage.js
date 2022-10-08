import React from 'react';
import styled from 'styled-components';

const SideImageContainer= styled.div`
   max-width:55%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex:1;
   position: relative;
   background: blue
`;

function NewsSideImage() {
  return <SideImageContainer>
    image
  </SideImageContainer>
}

export default NewsSideImage