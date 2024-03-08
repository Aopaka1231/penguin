import { CustomButton } from "../components/CustomButton";
import { FormInput } from "../components/FormInput";
import { HistoryTable } from "../components/HistoryTable";
import { CustomModal } from "../components/CustomModal";
import { SelectBox } from "../components/SelectBox";

const Event = () => {
  return (
    <main className="px-4 py-8">
      <h1 className="text-5xl font-bold pb-14">春旅行行こうぜ！</h1>

      <form className="flex flex-col items-center pb-20 max-w-64 space-y-8 mx-auto">
        <FormInput label={"目的"} placeHolder={"ご飯"} />
        <FormInput label={"金額"} placeHolder={"8000"} />
        <SelectBox
          value={["おひな", "清水", "そよち"]}
          className="flex justify-center items-center"
        />
        <CustomButton label="追加"></CustomButton>
      </form>

      <p className="text-2xl font-semibold pb-2">利用履歴</p>
      <HistoryTable className="mb-10" />
      <CustomModal className="flex justify-center" />
    </main>
  );
};

export default Event;
