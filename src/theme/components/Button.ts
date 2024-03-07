import { ComponentStyle } from "@yamada-ui/react";

export const Button: ComponentStyle = {
  baseStyle: {
    bg: "#F1D6AB",
    cursor: "pointer",
    rounded: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "slower",
    _focus: {
      outline: "none",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
    _hover: {
      _disabled: {
        bg: ["initial", "initial"],
      },
    },
  },
};
