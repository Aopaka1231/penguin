import { ComponentPropsWithoutRef, FC } from "react";

export type EventBoxType = {
    title: string;
    menbers: string[]
}

type Props = {
    eventInfo: EventBoxType
} & ComponentPropsWithoutRef<'button'>

export const EventBox: FC<Props> = ({eventInfo, ...props}) => {
    return (
        <button className="min-w-56 px-4 py-4 rounded-xl font-medium text-xl bg-[#F1D6AB]" {...props}>
            {eventInfo.title}
            <p>{eventInfo.menbers.join(', ')}</p>
        </button>
    )
}
