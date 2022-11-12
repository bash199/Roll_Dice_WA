import React from "react";
import styled from "styled-components";
import {Btn} from "../Buttons/Buttons";
const Div = styled.div`
   width: 70%;
   height: 98%;
   padding: 5px;
   background: rgb(255, 255, 255, 0.4);
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   @media (max-height: 450px) {
      font-size: 0.6rem;
      flex-direction: row;
      align-items: center;
      & > ul {
         margin-bottom: 0;
      }
   }
`;
const Div2 = styled.div`
   width: 50%;
   height: 150px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   margin: auto;
   @media (max-width: 450px) {
      font-size: 0.8rem;
   }
`;
const LandPage = ({setState}) => {
   const setTarget = (event) => {
      const val = event.target.value;
      setState((prevValue) => {
         return {
            ...prevValue,
            target: val > 49 ? val : 50,
         };
      });
   };
   const showGame = () => {
      setState((prevValue) => {
         return {
            ...prevValue,
            showLandPage: !prevValue.showLandPage,
         };
      });
   };
   return (
      <Div>
         <h3>Game Instructions</h3>
         <ul>
            <li>
               In your turn roll the dice at least once! and accumulate the
               result in "CURRENT".
            </li>
            <li>
               You can roll again or click "HOLD" to save the score from
               "CURRENT" and switch turn.
            </li>
            <li>
               Note! if you get double 6 you will lose all score from "CURRENT"
               and will switch turn.
            </li>
            <li>
               If you managed to reach exactly the target score - you win! if
               you pass it - you lose!.
            </li>
         </ul>
         <Div2>
            <p>Please select a target score! (minimum 50)</p>
            <Div2>
               <input
                  type="number"
                  min={50}
                  onChange={(event) => {
                     setTarget(event);
                  }}
               />
               <Btn onClick={showGame}>start game</Btn>
            </Div2>
         </Div2>
      </Div>
   );
};

export default LandPage;