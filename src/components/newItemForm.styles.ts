import styled from "styled-components";

type NewItemProps = {
  width: number;
};
export const NewItemFormContainer = styled.div<NewItemProps>`
  width: ${(props) => {
    console.log("----------props.width = ", props.width);
    return props.width !== null ? props.width + "px" : "120px";
  }};
  min-width: 192px;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  margin: 1px;
  justify-content: center;
`;

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
