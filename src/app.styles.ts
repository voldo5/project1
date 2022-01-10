import styled from "styled-components";

//  //text-align: center;
//align-items: center;
//  justify-content: space-around;
export const AppContainer = styled.div`
  width: 100vw;
  height: 62.5vw;
  border: 2px solid red;
  display: grid;
  grid-template:
    "card1 card2 card3" 1fr
    "card4 card5 card6" 1fr
    "card7 card8 card9" 1fr
    / 1fr 1fr 1fr;
  grid-gap: 0px;
  background: var(--color-green0);
  justify-items: center;
  align-items: center;
`;

// export const CardContainer = styled.div`
//   width: clamp(192px, 50vw, 320px);
//   height: clamp(120px, 32vw, 200px);
//   cursor: pointer;
//   border-radius: 2px;
//   display: grid;
//   grid-template:
//     "wicon wicon condition condition condition condition" 1fr
//     "wicon wicon place place place place" 1fr
//     "temperature temperature temperature date1 date1 date1" 0.9fr
//     "temperature temperature temperature date2 date2 date2" 0.9fr
//     "hicon hval picon pval sicon sval" 0.7fr
//     "hicon hval picon pval sicon sval" 0.7fr
//     / 1fr 1.5fr 1fr 1.5fr 1fr 1.5fr;
//   text-align: center;
//   grid-gap: 0px;
//   background: var(--color-grey-light);
// `;
