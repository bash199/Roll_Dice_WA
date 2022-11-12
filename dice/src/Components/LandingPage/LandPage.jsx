import React from "react";
import styled from "styled-components";
import { Btn } from "../Buttons/Buttons";
const Div = styled.div`
   width: 70%;
   height: 100%;
   background: rgb(255, 255, 255, 0.4);
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   @media (max-width: 400px) {
      flex-direction: column;
   }
`;

const LandPage = () => {
   return (
      <Div>
         <h3>Game Instructions</h3>
         <ul>
            <li>
               In your turn roll the dice at least once! and accumulate the
               result in "CURRENT"
            </li>
            <li>
               You can roll again or click "HOLD" to save the score from
               "CURRENT" and switch turn
            </li>
            <li>
               Note! if you get double 6 you will lose all score from "CURRENT"
               and will switch turn
            </li>
            <li>
               If you managed to reach exactly the target score - you win! if
               you pass it - you lose!
            </li>
         </ul>
         <input type="text" />
         <Btn >start game</Btn>
      </Div>
   );
};

export default LandPage;
