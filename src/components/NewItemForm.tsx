import React, { useState } from "react";
import { useFocus } from "../utils/useFocus";
// import {
//   NewItemFormContainer,
//   NewItemButton,
//   NewItemInput
// } from "./styles"
import * as S from "./newItemForm.styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <S.NewItemFormContainer>
      <S.NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <S.NewItemButton onClick={() => onAdd(text)}>Create</S.NewItemButton>
    </S.NewItemFormContainer>
  );
};
