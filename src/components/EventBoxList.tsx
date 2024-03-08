import { FC, MouseEvent } from "react";
import { EventBox, EventBoxType } from "./EventBox";

type Props = {
    eventInfoList: EventBoxType[];
    handleOnClick: (
        e: MouseEvent<HTMLButtonElement>,
        item: EventBoxType
    ) => void;
}

export const EventBoxList: FC<Props> = ({eventInfoList, handleOnClick}) => {
    const handleClick =
    (item: EventBoxType) =>
    (e: MouseEvent<HTMLButtonElement>) => {
        handleOnClick(e, item)
    };

    return (
        <>
            {eventInfoList?.map((item, i) => (
                <EventBox key={i} eventInfo={item} onClick={handleClick(item)} />
            ))}
        </>
    )
}
