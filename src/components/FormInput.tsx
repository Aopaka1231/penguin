import { FormControl, Label, ErrorMessage } from "@yamada-ui/react";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {
  label: string;
  placeHolder: string;
  errorMessage?: string;
  isvalid?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const FormInput: FC<Props> = ({
  label,
  errorMessage,
  placeHolder,
  isvalid,
  ...props
}) => {
  return (
    <FormControl isInvalid={isvalid}>
      <Label>{label}</Label>
      <input
        className="bg-[#F1D6AB] px-3 py-2 rounded w-full placeholder:text-[#707070]"
        type="text"
        placeholder={placeHolder}
        {...props}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormControl>
  );
};
