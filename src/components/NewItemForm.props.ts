import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NewItemFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onAdd(text: string): void;
  children?: ReactNode;
}
