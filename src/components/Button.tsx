import { Button, ButtonProps } from "@yamada-ui/react"
import { FC } from "react"

export const MyButton:FC<ButtonProps> = ({...props}) => {
  return (
    <>
      <Button layerStyle="componentStyle" {...props}>計算</Button>
    </>
  )
}