import React, { FC, ReactNode } from "react";

interface FormProps {
  formClass?: string;
  children?: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({ formClass, children, onSubmit }) => {
  return (
    <form className={formClass} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
