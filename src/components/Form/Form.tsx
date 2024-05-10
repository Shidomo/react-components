import React, { FC, ReactNode } from "react";

interface FormProps {
  formClass?: string;
  children?: ReactNode;
}

export const Form: FC<FormProps> = ({ formClass, children }) => {
  return <form className={formClass}>{children}</form>;
};
