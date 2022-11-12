import React, {useState} from "react";
import Container from "./Container/Container";
import styled from "styled-components";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";
import {getRandomNumber} from "../utils/Funcs";
import LandPage from "./LandingPage/LandPage";
const Div = styled.div`
   width: 100%;
   height: 100vh;
   background: linear-gradient(to right, #af1e3c, #8b2464);
   display: flex;
   justify-content: center;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function App() {
  let diceImagesArr = [dice1, dice2, dice3, dice4, dice5, dice6];
   const [state, setState] = useState({
      showLandPage:false,
      player1Current: 0,
      player2Current: 0,
      player1Score: 0,
      player2Score: 0,
      dice1: 4,
      dice2: 1,
      isHoldTrue: true,
      isHoldClicked: false,
      player1Opacity: 0.4,
      player2Opacity: 0,
      player1: "Player1",
      player2: "Player2",
      player1Color: 255,
      player2Color: 255,
      target: 100,
      holdDisabled: true,
      holdBtnOpacity: 0.3,
      rollDisabled: false,
      rollBtnOpacity: 1,
   });
   const newGame = () => {
      setState((prevVlaue) => {
         return {
            ...prevVlaue,
            player1Current: 0,
            player2Current: 0,
            player1Score: 0,
            player2Score: 0,
            dice1: 4,
            dice2: 1,
            isHoldTrue: true,
            isHoldClicked: false,
            player1Opacity: 0.4,
            player2Opacity: 0,
            player1: "Player1",
            player2: "Player2",
            player1Color: 255,
            player2Color: 255,
            target: 100,
            holdDisabled: true,
            holdBtnOpacity: 0.3,
            rollDisabled: false,
            rollBtnOpacity: 1,
         };
      });
   };
   const get = () => {
      let randomNum1 = getRandomNumber();
      let randomNum2 = getRandomNumber();
      if (state.isHoldTrue) {
         setPlayer1State(randomNum1, randomNum2);
      } else {
         setPlayer2State(randomNum1, randomNum2);
      }
      if (randomNum1 === 5 && randomNum2 === 5) {
        addScoreAndSwitchPlayer(true);
     }
   };
   const setPlayer1State = (num1, num2) => {
      setState((pervValue) => {
         return {
            ...pervValue,
            dice1: num1,
            dice2: num2,
            player1Current: pervValue.player1Current + num1 + num2 + 2,
            holdDisabled: false,
            holdBtnOpacity: 1,
         };
      });
   };
   const setPlayer2State = (num1, num2) => {
      setState((pervValue) => {
         return {
            ...pervValue,
            dice1: num1,
            dice2: num2,
            player2Current: pervValue.player2Current + num1 + num2 + 2,
            holdDisabled: false,
            holdBtnOpacity: 1,
         };
      });
   };
   const addScoreAndSwitchPlayer = (n) => {
      if (state.isHoldTrue) {
         setState((pervValue) => {
            const sum = n?0:pervValue.player1Score + pervValue.player1Current;
            checkScoreOfPlayer1(sum);
            return {
               ...pervValue,
               player1Score: sum,
               player1Current: 0,
               isHoldTrue: !pervValue.isHoldTrue,
               player1Opacity: 0,
               player2Opacity: 0.4,
               holdDisabled: true,
               holdBtnOpacity: 0.3,
            };
         });
      } else {
         setState((pervValue) => {
            const sum = n?0:pervValue.player2Score + pervValue.player2Current;
            checkScoreOfPlayer2(sum);
            return {
               ...pervValue,
               player2Score: sum,
               player2Current: 0,
               isHoldTrue: !pervValue.isHoldTrue,
               player1Opacity: 0.4,
               player2Opacity: 0,
               holdDisabled: true,
               holdBtnOpacity: 0.3,
            };
         });
      }
   };
   const checkScoreOfPlayer1 = (num) => {
      if (num > state.target) {
         setState((pervValue) => {
            return {
               ...pervValue,
               opacity: 1,
               player1: "Player1 Lost!",
               player2: "Player2 Won!",
               player1Color: 0,
               player2Color: 255,
               player1Opacity: 0.6,
               player2Opacity: 0.4,
               holdDisabled: true,
               rollDisabled: true,
               holdBtnOpacity: 0.3,
               rollBtnOpacity: 0.3,
            };
         });
      } else if (num === state.target) {
         setState((pervValue) => {
            return {
               ...pervValue,
               player1: "Player1 Won!",
               player1Opacity: 1,
               holdDisabled: true,
               rollDisabled: true,
               holdBtnOpacity: 0.3,
               rollBtnOpacity: 0.3,
            };
         });
      }
   };
   const checkScoreOfPlayer2 = (num) => {
      if (num > state.target) {
         setState((pervValue) => {
            return {
               ...pervValue,
               player1: "Player1 Won!",
               player2: "Player2 Lost!",
               player1Color: 255,
               player2Color: 0,
               player1Opacity: 0.4,
               player2Opacity: 0.6,
               holdDisabled: true,
               rollDisabled: true,
               holdBtnOpacity: 0.3,
               rollBtnOpacity: 0.3,
            };
         });
      } else if (num === state.target) {
         setState((pervValue) => {
            return {
               ...pervValue,
               opacity: 1,
               player2: "Player2 Won!",
               player2Opacity: 1,
               holdDisabled: true,
               rollDisabled: true,
               holdBtnOpacity: 0.3,
               rollBtnOpacity: 0.3,
            };
         });
      }
   };
   return (
      <Div>
       { state.showLandPage && <LandPage />}
        {!state.showLandPage && <Container
            getRandomNumber={get}
            diceImgArr={diceImagesArr}
            state={state}
            holdFunc={addScoreAndSwitchPlayer}
            newGame={newGame}
         />}
      </Div>
   );
}

export default App;
