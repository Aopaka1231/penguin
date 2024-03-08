import { FormInput } from "../components/FormInput";
import { CustomButton } from "../components/CustomButton";
import { ChangeEvent, MouseEvent, useState } from "react";
import { EventBoxList } from "../components/EventBoxList";
import { AddSelectBox } from "../components/AddSelectBox";
import { EventBoxType } from "../components/EventBox";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [inputMenber, setInputMenber] = useState<string[]>([])
  const [inputEvent, setInputEvent] = useState<EventBoxType>({
    title: "",
    menbers: []
  })
  const [events, setEvents] = useState<EventBoxType[]>([])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEvent({
      ...inputEvent,
      [e.target.name]: e.target.value
    })
  }

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEvents((prev) => [
      ...prev,
      {
        title: inputEvent.title,
        menbers: inputMenber
      }
    ])
  }

  const handleClickEventBox = (
    e: MouseEvent<HTMLButtonElement>,
    item: EventBoxType) => {
    e.preventDefault()
    console.log('eventBox')
    navigate(`/event/${item.title}`)
  }

  return (
    <main className="px-2 py-3">
      <h1 className="text-2xl font-bold">イベントを選択or追加してください</h1>

      <form className="flex flex-col items-center mx-auto py-10 max-w-64 space-y-5">
        <FormInput label={"イベントを追加"} placeHolder={"群馬に行こうぜ"} name="title" value={inputEvent.title} onChange={handleOnChange} />
        <AddSelectBox value={inputMenber} onChange={setInputMenber} />
        <CustomButton type="submit" label={"追加"} onClick={handleOnClick}/>
      </form>

      <EventBoxList eventInfoList={events} handleOnClick={handleClickEventBox} />
    </main>
  );
};

export default Home;
