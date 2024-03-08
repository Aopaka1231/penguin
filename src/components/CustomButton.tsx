import { Button, ButtonProps } from "@yamada-ui/react";
import { FC } from "react";

type Props = {
  label: string;
} & ButtonProps;

export const CustomButton: FC<Props> = ({ label, ...props }) => {
  return (
    <>
      <Button
        background="#F1D6AB"
        _hover={{ backgroundColor: "#F1D6AB80" }}
        {...props}
      >
        {label}
      </Button>
    </>
  );
};
