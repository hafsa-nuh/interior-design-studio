import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {Link as LinkS} from "react-scroll"

// this is where all my navbar styling happens
export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // z-index: 10;
  border-radius: 40px;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

// this is the likes of the pages in our nav
export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-left: 5%;
  // margin-right: -20%;
  height: 80%;
  cursor: pointer;
  &:hover{
    color: orange;
  }

  &.active {
    color: orange;
  }
`;

// this is where the icon is for the navList
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top:15%;
    right: 5%;
    transform: translate(-100%, 75%)
    font-size: 1.8rem;
    cursor:pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;




