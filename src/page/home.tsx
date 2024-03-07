import { RoomButton } from "../components/RoomButton";

const home = () => {
  return (
    <main className="px-2 py-3">
      <h1 className="text-2xl font-bold">旅行を選択or追加してください</h1>
      <form>
        <input name="trip" className="border-2 border-black" />
        <button type="submit">追加</button>
      </form>
      <RoomButton />
    </main>
  );
};

export default home;
