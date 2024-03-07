import { MultiSelect, Option, MultiSelectProps } from "@yamada-ui/react";
import { FC } from "react";

type Props = {value: string[]} & MultiSelectProps
export const SelectBox:FC<Props> = ({value, ...props}) => {
    return (
        <MultiSelect placeholder="対象を選択" placement="right-start" iconProps={{color:"primary"}} {...props} layerStyle="componentStyle">
                {value.map((v) => (
                    <Option key={v} value={v}>{v}</Option>
                ))}
                {/* <Option value="1">選択肢1</Option>
                <Option value="2">選択肢2</Option>
                <Option value="3">選択肢3</Option>
                <Option value="4">選択肢4</Option>
                <Option value="5">選択肢5</Option> */}
        </MultiSelect>
    )
}