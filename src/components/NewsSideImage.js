import React from 'react';
import styled from 'styled-components';

const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;

const Image = styled.div`
  width: auto;
  height: 50em;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  img {
    width: auto;
    height: 100%;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
  }
`;

function NewsSideImage() {
  return (
    <SideImageContainer>
        <Image>
            <img src="https://i.postimg.cc/J0QRPXXD/news.jpg" alt="news" />
        </Image>
    </SideImageContainer>
  );
}

export default NewsSideImage