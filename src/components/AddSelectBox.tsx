import {
  MultiAutocomplete,
  MultiAutocompleteProps
} from "@yamada-ui/react"
import { FC } from "react";

type Props ={
  value: string[];
} & MultiAutocompleteProps

// const items:AutocompleteItem[] = [
//   {
//     label: "参加者",
//     items: [
//       { value: "山田" },
//       { value: "田中" },
//       { value: "佐藤" },
//       { value: "鈴木" },
//     ],
//   }
//   ]

export const AddSelectBox: FC<Props> = ({...props}) => {
  return (
    <>
    <MultiAutocomplete placeholder="参加者を選択or追加" allowCreate {...props} />
    </>
  )
}

