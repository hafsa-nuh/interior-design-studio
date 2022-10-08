import React, { useState } from 'react';
import styled from 'styled-components';

const DetainsContainer = styled.div`
   height:100%;
   display: flex;
   flex-direction: column;
   flex: 1;
   align-items: center;
   justify-content: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  h1 {
    color: #ac6b34;
    font-weight: 700;
    font-size: 30px;
  }
  h3 {
    color: #000;
    margin: 10px 0;
    font-weight: 600;
    font-size: 21px;
  }
  p {
    color: #000;
    font-weight: 400;
    font-size: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  position: relative;
  height: 53px;
  margine-top: 3rem;
  input {
    outline: #ac6b34;
    border: none;
    background-color: #1c1d24;
    padding-left: 1.8em;
    padding-right: 3em;
    border-radius: 17px;
    font-size: 20px;
    height: 100% auto;
  }
  button {
    margin-right: 4rem;
    position: absolute;
    right: -10px;
    top: 0;
    height: 100%;
    border: none;
    outline: none;
    color: #fff;
    background-color: #ac6b34;
    font-size: 20px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 0 10px;
    &:hover {
      background-color: #ac6b34;
    }
  }
`;

function NewsDetails() {
    const [val, setVal] = useState();

    return (
      <DetainsContainer>
        <InnerContainer>
          <h1>We Make A New Future</h1>
          <h3>Subscribe To Our Daily Newsletter! </h3>
          <p>
            We create the style of a new generation, Each of our design has
            inventive elements that are modern and state of the art. At the same
            time, Comforable and functional.
          </p>
          <FormGroup>
            <input
              name="email"
              type="email"
              value={val}
              placeholder="Your email"
            />
            <button type="submit" onClick={() => setVal(() => "")}>
              Subscribe
            </button>
          </FormGroup>
        </InnerContainer>
      </DetainsContainer>
    );
}
export default NewsDetails