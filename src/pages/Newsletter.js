import React from 'react'
import styled from 'styled-components'
import NewsSideImage from '../components/NewsSideImage';
import NewsDetails from "../components/NewsDetails"

const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`;
const Container = styled.div`
  width: 1100px;
  margin-left: 2rem;
  height: 500px;
  margin-right: 2rem;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 2px solid #ac6b34;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

function Newsletter() {
  return <>
  <NewsContainer>
    <Container>
      <NewsDetails/>
      <NewsSideImage/>
    </Container>
  </NewsContainer>
  </>
}

export default Newsletter