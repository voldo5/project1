import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NewItemFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  onAdd(text: string): void;
  children?: ReactNode;
}
