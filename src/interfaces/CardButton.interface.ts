import { ButtonHTMLAttributes } from "react";

export interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  xtraStyle?: string;
}
