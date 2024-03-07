import { Button, ButtonProps } from "@yamada-ui/react"
import { FC } from "react"

export const RoomButton:FC<ButtonProps> = ({...props}) => {
  return (
    <>
      <Button {...props}>タイトル</Button>
    </>
  )
}
