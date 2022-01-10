import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";
//import { AddItemButton } from "./styles";
import * as S from "./AddNewItem.styles";
import { AddNewItemProps } from "./AddNewItem.props";

// type AddNewItemProps = {
//   onAdd(text: string): void;
//   toggleButtonText: string;
//   dark?: boolean;
// };

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <S.AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </S.AddItemButton>
  );
};
