import React from "react";

import styled, { css, keyframes } from "styled-components";

const Start = css`
  left: -450px;
`;
const End = css`
  left: 80px;
`;

const StartMB = css`
  left: -300px;
`;
const EndMB = css`
left:0;
`

export const Img = styled.img`
width:500px;
margin-left:50px;
@media screen and (max-width: 1300px) {
    width:0px;
    
}
@media screen and (max-width: 1000px) {
    width:00px;
  
}
@media screen and (max-width: 780px) {
    width:0px;
   
}
`
export const SectionWrapper = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  transition: left 3s;
  ${props => (props.start ? End : Start)}
  @media screen and (max-width: 780px) {
    width:800px;
   ${props => (props.start ? EndMB : StartMB)}
  }
`;

const visible = css`
 opacity:1;
`
const invisible = css`
 opacity:0;
`

export const ButtonDiss = styled.div`
margin:auto;
transition: opacity 5s;
${props=>props.start ? invisible: visible}
@media screen and (max-width: 780px) {
  margin:10px;
 }
`

