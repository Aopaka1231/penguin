import { ComponentMultiStyle } from "@yamada-ui/react";

export const FormControl: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "100%",
      position: "relative",
    },
    label: {
      fontSize: "md",
      me: "3",
      mb: "0.5",
      fontWeight: "bold",
      transitionProperty: "common",
      transitionDuration: "normal",
      opacity: 1,
      _disabled: {
        opacity: 0.4,
      },
    },
    requiredIndicator: {
      ms: "1",
      color: ["danger.500", "danger.400"],
    },
    errorMessage: {
      mt: "2",
      color: ["danger.500", "danger.400"],
      fontSize: "sm",
    },
  },
};
