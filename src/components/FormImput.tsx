import {
    FormControl,
    Label,
    ErrorMessage,
  } from "@yamada-ui/react"
import { ComponentPropsWithoutRef, FC } from "react"

type Props = {label: string, placeHolder: string,errorMessage?: string, isvalid?: boolean} & ComponentPropsWithoutRef<"input">

export const FormInput:FC<Props> = ({label,errorMessage,placeHolder,isvalid, ...props}) => {
    return (
        <div>
            <FormControl isInvalid={isvalid}>
                <Label>{label}</Label>
                <input className="border-2 border-black rounded-md" type="text" placeholder={placeHolder} {...props}/>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormControl>
        </div>
    )
}