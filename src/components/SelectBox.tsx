import { MultiSelect, Option, MultiSelectProps } from "@yamada-ui/react";
import { FC } from "react";

type Props = { value: string[] } & MultiSelectProps;

export const SelectBox: FC<Props> = ({ value, ...props }) => {
  return (
    <MultiSelect
      placeholder="メンバーを選ぶ"
      //   placement="right-start"
      iconProps={{ color: "primary" }}
      {...props}
      layerStyle="componentStyle"
    >
      {value.map((v) => (
        <Option
          key={v}
          value={v}
          _hover={{ backgroundColor: "#F1D6AB80" }}
          _focus={{ backgroundColor: "#E3B04B" }}
          backgroundColor={"#F1D6AB"}
        >
          {v}
        </Option>
      ))}
    </MultiSelect>
  );
};
