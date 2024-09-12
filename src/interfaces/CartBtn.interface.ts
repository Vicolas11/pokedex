import { ButtonHTMLAttributes } from "react";

export interface CardBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  xtraStyle?: string;
}
