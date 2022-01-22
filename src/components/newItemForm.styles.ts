import styled from "styled-components";

//max-width: 80%;
// align-items: flex-start;
//   justify-self: center;

//justify-content: space-around;
// justify-self: center;
//   align-self: stretch;
//  flex-grow: 1;
//  flex-shrink: 1;

//   max-width: 320px;
//   min-width: 192px;
//   max-height: 200px;
//   align-items: center;
//   align-content: flex-start;
//flex-basis: 280px;
//   max-width: 320px;
//   max-height: 200px;
//   flex-shrink: 1;
//  flex-basis: 100%;
//max-width: 320px;
//   flex-basis: 220px;
//   flex-grow: 1;
//   width: 220px;
//   max-height: 200px;
//   max-width: 320px;
export const NewItemFormContainer = styled.div`
  min-width: 192px;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  margin: 1px;
  justify-content: center;
`;
// export const CardContainer = styled.div<CardContainerProps>`
//   opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
//   max-width: 320px;
//   min-width: 192px;
//   max-height: 200px;
//   cursor: pointer;
//   border-radius: 2px;
//   margin: 1px;
//   display: grid;
//   grid-template:
//     "wicon wicon condition condition time time dicon" 1fr
//     "wicon wicon place place place place place" 1fr
//     "temperature temperature temperature date1 date1 date1 date1" 0.9fr
//     "temperature temperature temperature date2 date2 date2 date2" 0.9fr
//     "hicon hval picon pval sicon sval sval" 0.7fr
//     "hicon hval picon pval sicon sval sval" 0.7fr
//     / 1fr 1.5fr 1fr 1.5fr 1fr 0.8fr 0.7fr;
//   grid-gap: 0px;
//   background: var(--color-grey-light);
//   justify-self: center;
//   align-self: stretch;
//   flex-grow: 1;
//   flex-shrink: 1;
// `;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 80%;
  align-self: center;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;
