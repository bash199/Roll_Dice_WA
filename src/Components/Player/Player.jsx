import React from "react";
import styled from "styled-components";
const Div = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   font-size: 1.5rem;
   @media (max-width: 450px) {
      width: 100%;
      justify-content: space-around;
   }
`;
const CurrentDiv = styled.div`
   width: 150px;
   height: 100px;
   margin-bottom: 30px;
   background: #af1e3c;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   @media (max-width: 450px) {
      width: 100px;
      height: 70px;
      font-size: 0.8rem;
   }
`;
const Div2 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 450px) {
      width: 100px;
      height: 70px;
      & > h2 {
         font-size: 1.5rem;
      }
      & > p {
         font-size: 2.5rem;
      }
   }
`;
const P = styled.p`
   margin: 3px;
   color: white;
`;
const P2 = styled.p`
   margin: 3px;
   font-size: 4rem;
   color: #af1e3c;
`;
const H6 = styled.h6`
   margin: 3px;
   color: white;
   font-weight: 400;
`;
const Player = ({player, score, currentScore, opacity, color}) => {
   return (
      <Div
         style={{
            background: `rgb(${color},${color},${color},${opacity})`,
            transition: "all 0.75s",
         }}
      >
         <Div2>
            <h2>{player}</h2>
            <P2>{score}</P2>
         </Div2>
         <CurrentDiv>
            <H6>CURRENT</H6>
            <P>{currentScore}</P>
         </CurrentDiv>
      </Div>
   );
};

export default Player;