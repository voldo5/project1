import styled from "styled-components";

//max-width: 300px;
//width: 80%;
export const NewItemFormContainer = styled.div`
  grid-area: card2;
  width: clamp(192px, 50vw, 320px);
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
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
