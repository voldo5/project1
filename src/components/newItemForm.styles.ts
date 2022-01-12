import styled from "styled-components";

type NewItemFormProps = {
  newItemFormId: string;
};

export const NewItemFormContainer = styled.div<NewItemFormProps>`
  grid-area: ${(props) => "area-" + props.newItemFormId};
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin: 0.5rem 0;
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
