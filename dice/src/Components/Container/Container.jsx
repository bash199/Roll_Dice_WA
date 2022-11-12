import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons/Buttons";
import Player from "../Player/Player";
const Div = styled.div`
   width: 70%;
   height: 100%;
   background: rgb(255, 255, 255, 0.4);
   display: flex;
   position: relative;
   @media (max-width: 400px) {
      flex-direction: column;

   }
`;


const Container = ({diceImgArr,getRandomNumber,state,holdFunc,newGame}) => {
   return (
      <Div>
         <Buttons  newGame={newGame} rollBtnOpacity={state.rollBtnOpacity}  holdBtnOpacity={state.holdBtnOpacity} rollDisabled={state.rollDisabled} holdDisabled={state.holdDisabled} holdFunc={holdFunc} state={state} getRandomNumber={getRandomNumber} img={diceImgArr}></Buttons>
         <Player color={state.player1Color}  player={state.player1} score={state.player1Score} currentScore={state.player1Current} opacity={state.player1Opacity} />
         <Player player={state.player2} score={state.player2Score} currentScore={state.player2Current} opacity={state.player2Opacity} color={state.player2Color}/>
      </Div>
   );
};

export default Container;
