import React from "react";
import styled from "styled-components";
const Div = styled.div`
   width: 200px;
   height: 100%;
   background: transparent;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: space-around;
   position: absolute;
   right: calc(50% - 100px);
   @media (max-width: 400px) {
      display: flex;
      width: 100%;
      right: 0;
      flex-direction: row;
      justify-content: space-around;
   }
`;
export const Btn = styled.button`
   color: #444;
   border: none;
   font-family: inherit;
   font-size: 1rem;
   text-transform: uppercase;
   background-color: rgba(255, 255, 255, 0.6);
   padding: 3px;
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.4s;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
   &:active {
      transform: translateY(5px);
      transition-duration: 0.4;
   }

   &:focus {
      outline: none;
   }
   @media (max-height: 450px) {
      font-size: 0.6rem;
   }
   @media (max-width: 376px) {
      font-size: 0.6rem;
   }
`;
const Div2 = styled.div`
   height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
const Img = styled.img`
   width: 100px;
   height: 100px;
   margin-top: 10px;
   margin-bottom: 10px;
   @media (max-width: 450px) {
      width: 50px;
      height: 50px;
   }
   @media (max-height: 450px) {
      width: 50px;
      height: 50px;
   }
`;
const ImagesDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
const Buttons = ({
   img,
   getRandomNumber,
   state,
   holdFunc,
   rollDisabled,
   holdDisabled,
   rollBtnOpacity,
   holdBtnOpacity,
   newGame,
}) => {
   return (
      <Div>
         <Btn onClick={newGame}>🔄 New game</Btn>
         <ImagesDiv>
            <Img src={img[state.dice1]} alt="" />
            <Img src={img[state.dice2]} alt="" />
         </ImagesDiv>
         <Div2>
            <Btn
               style={{opacity: rollBtnOpacity}}
               disabled={rollDisabled}
               onClick={getRandomNumber}
            >
               🎲 Roll dice
            </Btn>
            <Btn
               style={{opacity: holdBtnOpacity}}
               disabled={holdDisabled}
               onClick={() => holdFunc(false)}
            >
               📥 Hold
            </Btn>
         </Div2>
      </Div>
   );
};

export default Buttons;