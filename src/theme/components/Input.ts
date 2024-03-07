import { ComponentMultiStyle } from "@yamada-ui/react"

export const FormControl: ComponentMultiStyle = {
    baseStyle: {
      container: {
        w: "100%",
        position: "relative",
        // borderWidth: "4px",
        // borderColor: "#E3B04B"
      },
      label: {
        fontSize: "md",
        me: "3",
        mb: "2",
        fontWeight: "medium",
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
  }